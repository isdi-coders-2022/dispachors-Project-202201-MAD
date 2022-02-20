/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getFromSaved, saveBook, updateBook } from '../services/PRH-api';
import { useContextValue } from './context-value';

jest.mock('../services/PRH-api');

const mockState = [
    {
        user: 'google-oauth2|117072913009179683499',
        isbn: '9780767920384',
        _links: [
            {},
            {
                href: 'https://images.randomhouse.com/cover/9780767920384',
            },
        ],
        isRead: true,
        rating: '3',
        id: 2,
    },
    {
        user: 'google-oauth2|117072913009179683499',
        isbn: '9780262182430',
        _links: [
            {},
            {
                href: 'https://images.randomhouse.com/cover/9780262182430',
            },
        ],
        isRead: false,
        rating: 0,
        id: 3,
    },
];

const mockBook = {
    user: 'google-oauth2|117072913009179683499',
    isbn: '9780440351832',
    _links: [
        {},
        {
            href: 'https://images.randomhouse.com/cover/9780440351832',
        },
    ],
    isRead: true,
    rating: '4',
    id: 4,
};

function MockComponent() {
    const { addBook, userBooks, updateBook, deleteBook } = useContextValue();
    const handleAdd = () => {
        addBook(mockBook);
    };
    const handleDelete = () => {
        deleteBook({ ...mockBook, id: 3 });
    };
    const handleUpdate = () => {
        updateBook({ ...mockBook, id: 3 });
    };

    return (
        <>
            <p>State{JSON.stringify(userBooks)}</p>
            <button type="button" value="addBook" onClick={handleAdd}>
                addBook
            </button>
            <button type="button" value="deleteBook" onClick={handleDelete}>
                deleteBook
            </button>
            <button type="button" value="updateBook" onClick={handleUpdate}>
                updateBook
            </button>
        </>
    );
}

describe('Given MockComponent, which returns the state in the custom hook useContextValue', () => {
    beforeEach(() => {
        getFromSaved.mockResolvedValue({ data: mockState });
        saveBook.mockResolvedValue({ data: mockBook });
        updateBook.mockResolvedValue({ data: { ...mockBook, id: 3 } });
    });
    describe('When calling it', () => {
        test('Then it should return mockState and a series of buttons', async () => {
            await render(<MockComponent />);
            expect(screen.getByText(/9780767920384/i)).toBeTruthy();
            expect(screen.getByText(/addbook/i)).toBeTruthy();
            expect(screen.getByText(/deletebook/i)).toBeTruthy();
            expect(screen.getByText(/updatebook/i)).toBeTruthy();
        });
        describe('When callign the function addBook, with mockBook as a parameter', () => {
            test('Then it should be reflected on the state', async () => {
                await render(<MockComponent />);
                await userEvent.click(screen.getByText(/addbook/i));
                expect(screen.getByText(/9780440351832/i)).toBeTruthy();
            });
        });
        describe('When callign the function deleteBook, with mockBook as a parameter', () => {
            test('Then it should be reflected on the state', async () => {
                await render(<MockComponent />);
                await userEvent.click(screen.getByText(/deletebook/i));
                expect(screen.queryByText(/9780440351832/i)).toBeFalsy();
            });
        });
        describe('When callign the function updateBook, with mockBook as a parameter', () => {
            test('Then it should be reflected on the state', async () => {
                await render(<MockComponent />);
                await userEvent.click(screen.getByText(/updatebook/i));
                expect(screen.getByText(/"rating":"4"/i)).toBeTruthy();
            });
        });
    });
});
