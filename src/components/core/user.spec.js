import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useAuth0 } from '@auth0/auth0-react';
import { User } from './user';

jest.mock('@auth0/auth0-react');

const mockAuth0 = {
    loginWithRedirect: jest.fn(),
    logout: jest.fn(),
    user: {
        name: 'Pepito',
    },
    isAuthenticated: true,
};

describe('Given the component Menu', () => {
    describe('When rendering it while being logged in', () => {
        test('Then it should appear on the screen', () => {
            useAuth0.mockReturnValue(mockAuth0);
            render(<User />);
            expect(screen.getAllByRole('button')).toHaveLength(2);
            expect(screen.getByText(/logout/i)).toBeTruthy();
            expect(screen.getByAltText(/user/i)).toBeTruthy();
        });
        test('If the user clicks on logout', () => {
            useAuth0.mockReturnValue(mockAuth0);
            render(<User />);
            userEvent.click(screen.getByText(/logout/i));
            expect(mockAuth0.logout).toBeCalled();
        });
    });
    describe('When rendering it without logging in', () => {
        test('Then it should appear on the screen', () => {
            useAuth0.mockReturnValue({ ...mockAuth0, isAuthenticated: false });
            render(<User />);
            expect(screen.getAllByRole('button')).toHaveLength(1);
            expect(screen.getByText(/login/i)).toBeTruthy();
            expect(screen.queryByAltText(/user/i)).toBeFalsy();
        });
        test('If the user clicks on login', () => {
            useAuth0.mockReturnValue({ ...mockAuth0, isAuthenticated: false });
            render(<User />);
            userEvent.click(screen.getByText(/login/i));
            expect(mockAuth0.loginWithRedirect).toBeCalled();
        });
    });
});
