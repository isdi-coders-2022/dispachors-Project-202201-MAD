import { render, screen } from '@testing-library/react';
import { useAuth0 } from '@auth0/auth0-react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Context } from '../../context/context-provider';
import { BooksToRead } from './books-to-read';

jest.mock('@auth0/auth0-react');

const contextValue = {
    userBooks: [
        {
            user: 'google-oauth2|117072913009179683499',
            isbn: '9780767920384',
            _links: [
                {},
                {
                    href: 'https://images.randomhouse.com/cover/9780767920384',
                },
            ],
            isRead: false,
            rating: '3',
            id: 2,
        },
    ],
};

describe('Given the component BooksToRead', () => {
    beforeEach(() => {
        useAuth0.mockReturnValue({
            user: { sub: 'google-oauth2|117072913009179683499' },
        });
    });
    describe('When completed loaded', () => {
        test('Then it should renders the book cover', () => {
            render(
                <Context.Provider value={contextValue}>
                    <MemoryRouter>
                        <Routes>
                            <Route path="/" element={<BooksToRead />} />
                        </Routes>
                    </MemoryRouter>
                </Context.Provider>
            );
            expect(screen.getByText(/books/i)).toBeTruthy();
            expect(screen.getByAltText(/cover/i)).toBeTruthy();
        });
    });
});
