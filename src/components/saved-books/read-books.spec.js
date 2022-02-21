/* eslint-disable react/jsx-no-constructed-context-values */
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { ReadBooks } from './read-books';
import { Context } from '../../context/context-provider';

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
            isRead: true,
            rating: '3',
            id: 2,
        },
    ],
};

describe('Given the component ReadBooks', () => {
    beforeEach(() => {
        useAuth0.mockReturnValue({
            user: { sub: 'google-oauth2|117072913009179683499' },
        });
    });
    describe('When calling it', () => {
        test('Then it should render it', () => {
            render(
                <Context.Provider value={contextValue}>
                    <MemoryRouter>
                        <Routes>
                            <Route path="/" element={<ReadBooks />} />
                        </Routes>
                    </MemoryRouter>
                </Context.Provider>
            );

            expect(screen.getByText(/books/i)).toBeTruthy();
            expect(screen.getByAltText(/cover/i)).toBeTruthy();
        });
    });
});
