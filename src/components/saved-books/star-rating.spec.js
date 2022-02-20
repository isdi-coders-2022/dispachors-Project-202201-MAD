import { render, screen } from '@testing-library/react';
import { useAuth0 } from '@auth0/auth0-react';
import userEvent from '@testing-library/user-event';
import { Context } from '../../context/context-provider';
import { StarRating } from './star-rating';

jest.mock('@auth0/auth0-react');

const mockBook = {
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
};

const mockContextValue = {
    userBooks: [mockBook],
    updateBook: jest.fn(),
};

describe('Given the component StarRating', () => {
    beforeEach(() => {
        useAuth0.mockReturnValue({
            user: { sub: 'google-oauth2|117072913009179683499' },
        });
    });
    describe('When rendering with a book passed by props', () => {
        test('Then it should render a number of stars', () => {
            render(
                <Context.Provider value={mockContextValue}>
                    <StarRating bookState={mockBook} />
                </Context.Provider>
            );

            expect(screen.getAllByAltText(/solid star/i)).toHaveLength(3);
            expect(screen.getAllByAltText(/empty star/i)).toHaveLength(2);

            userEvent.click(screen.getAllByAltText(/empty star/i)[1]);
            expect(mockContextValue.updateBook).toBeCalled();
        });
        test('And call the function updateBooks when clicking a star', () => {
            render(
                <Context.Provider value={mockContextValue}>
                    <StarRating bookState={mockBook} />
                </Context.Provider>
            );

            userEvent.click(screen.getAllByAltText(/empty star/i)[1]);
            expect(mockContextValue.updateBook).toBeCalled();
        });
    });
});
