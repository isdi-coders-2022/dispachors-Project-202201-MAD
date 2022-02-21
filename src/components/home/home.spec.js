import { render, screen } from '@testing-library/react';
import { useAuth0 } from '@auth0/auth0-react';
import { Context } from '../../context/context-provider';
import { Home } from './home';

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

describe('Given the component Home', () => {
    beforeEach(() => {
        useAuth0.mockReturnValue({ isAuthenticated: true });
    });
    describe('When rendering it while authenticated', () => {
        test('Then it should appear on the screen', () => {
            render(
                <Context.Provider value={contextValue}>
                    <Home />
                </Context.Provider>
            );
            expect(screen.getByText(/books/i)).toBeTruthy();
        });
    });
    describe('When rendering it while not authenticated', () => {
        test('Then it should appear on the screen', () => {
            useAuth0.mockReturnValue({ isAuthenticated: false });
            render(
                <Context.Provider value={contextValue}>
                    <Home />
                </Context.Provider>
            );
            expect(screen.queryByText(/books/i)).toBeFalsy();
        });
    });
});
