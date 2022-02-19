import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useAuth0 } from '@auth0/auth0-react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import { getFromUrl } from '../../services/PRH-api';
import { Context } from '../../context/context-provider';
import { Details } from './details';

jest.mock('../../services/PRH-api');

jest.mock('@auth0/auth0-react');

jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
    return {
        __esModule: true,
        ...originalModule,
        useParams: () => ({ isbn: '123' }),
    };
});

const mockUser = {
    sub: 'Pepito',
};

const readContextValue = {
    userBooks: [
        {
            isbn: '123',
            user: 'Pepito',
            isRead: true,
            _links: [
                {},
                {
                    rel: 'icon',
                    href: 'https://images.randomhouse.com/cover/9780143128618',
                    method: 'GET',
                    parameters: null,
                },
            ],
        },
    ],
    updateBook: jest.fn(),
};

const unsavedContextValue = {
    userBooks: [
        {
            isbn: '124',
        },
    ],
    addBook: jest.fn(),
};

const unreadContextValue = {
    userBooks: [
        {
            isbn: '123',
            user: 'Pepito',
            isRead: false,
            _links: [
                {},
                {
                    rel: 'icon',
                    href: 'https://images.randomhouse.com/cover/9780143128618',
                    method: 'GET',
                    parameters: null,
                },
            ],
        },
    ],
    deleteBook: jest.fn(),
};

const mockTitleResponse = {
    data: {
        data: {
            titles: [
                {
                    title: 'ISDI Coders',
                    author: 'Toño',
                    _links: [
                        {},
                        {
                            href: 'https://images.randomhouse.com/cover/9780451223623',
                        },
                    ],
                    pages: '123',
                },
            ],
        },
    },
};

const mockContentResponse = {
    data: { data: { content: { jacketquotes: 'The best book ever written' } } },
};

describe('Given the component Details', () => {
    beforeEach(() => {
        useAuth0.mockReturnValue({
            isAuthenticated: true,
            user: mockUser,
        });
        getFromUrl
            .mockResolvedValueOnce(mockTitleResponse)
            .mockResolvedValueOnce(mockContentResponse);
    });
    describe('When rendering it having logged, if the book is not read', () => {
        test('The delete button should appear', async () => {
            await render(
                <Context.Provider value={unreadContextValue}>
                    <MemoryRouter initialEntries={['/details/123']}>
                        <Routes location={{ pathname: '/details/123' }}>
                            <Route path="/details/123" element={<Details />} />
                        </Routes>
                    </MemoryRouter>
                </Context.Provider>
            );

            expect(screen.getByAltText(/cover/i)).toBeTruthy();
            expect(screen.getByText(/Toño/i)).toBeTruthy();
            expect(screen.getByText(/delete/i)).toBeTruthy();
        });
    });
    describe('When pushing the delete button', () => {
        test('Then the function deleteBook should be called', async () => {
            await render(
                <Context.Provider value={unreadContextValue}>
                    <MemoryRouter initialEntries={['/details/123']}>
                        <Routes location={{ pathname: '/details/123' }}>
                            <Route path="/details/123" element={<Details />} />
                        </Routes>
                    </MemoryRouter>
                </Context.Provider>
            );

            userEvent.click(screen.getByText(/delete/i));
            expect(unreadContextValue.deleteBook).toHaveBeenCalled();
        });
    });
    describe('When rendering it having logged in, if it is read', () => {
        test('The mark as unread button should appear', async () => {
            await render(
                <Context.Provider value={readContextValue}>
                    <MemoryRouter initialEntries={['/details/123']}>
                        <Routes location={{ pathname: '/details/123' }}>
                            <Route path="/details/123" element={<Details />} />
                        </Routes>
                    </MemoryRouter>
                </Context.Provider>
            );

            expect(screen.getByAltText(/cover/i)).toBeTruthy();
            expect(screen.getByText(/Toño/i)).toBeTruthy();
            expect(screen.getByText(/mark as unread/i)).toBeTruthy();
        });
        test('When clicking the button the updateBook function should be called', async () => {
            await render(
                <Context.Provider value={readContextValue}>
                    <MemoryRouter initialEntries={['/details/123']}>
                        <Routes location={{ pathname: '/details/123' }}>
                            <Route path="/details/123" element={<Details />} />
                        </Routes>
                    </MemoryRouter>
                </Context.Provider>
            );

            userEvent.click(screen.getByText(/mark as unread/i));
            expect(readContextValue.updateBook).toHaveBeenCalled();
        });
    });
    describe('When rendering it without logging in', () => {
        test('The save button should disappear', async () => {
            useAuth0.mockReturnValue({
                isAuthenticated: false,
                user: mockUser,
            });
            await render(
                <Context.Provider value={readContextValue}>
                    <MemoryRouter initialEntries={['/details/123']}>
                        <Routes location={{ pathname: '/details/123' }}>
                            <Route path="/details/123" element={<Details />} />
                        </Routes>
                    </MemoryRouter>
                </Context.Provider>
            );

            expect(screen.getByText(/login to save this book/i)).toBeTruthy();
        });
    });
    describe('When rendering an unsaved book', () => {
        test('The save button should appear', async () => {
            await render(
                <Context.Provider value={unsavedContextValue}>
                    <MemoryRouter initialEntries={['/details/123']}>
                        <Routes location={{ pathname: '/details/123' }}>
                            <Route path="/details/123" element={<Details />} />
                        </Routes>
                    </MemoryRouter>
                </Context.Provider>
            );

            expect(screen.getByText(/save/i)).toBeTruthy();
        });
    });
    describe('When pushing the save button', () => {
        test('Then the function addBook should be called', async () => {
            await render(
                <Context.Provider value={unsavedContextValue}>
                    <MemoryRouter initialEntries={['/details/123']}>
                        <Routes location={{ pathname: '/details/123' }}>
                            <Route path="/details/123" element={<Details />} />
                        </Routes>
                    </MemoryRouter>
                </Context.Provider>
            );

            userEvent.click(screen.getByText(/save/i));
            expect(unsavedContextValue.addBook).toHaveBeenCalled();
        });
    });
});
