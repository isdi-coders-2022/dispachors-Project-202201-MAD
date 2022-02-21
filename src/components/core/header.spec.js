import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Header } from './header';

jest.mock('@auth0/auth0-react');

describe('Given the component Header', () => {
    beforeEach(() => {
        useAuth0.mockReturnValue({
            isAuthenticated: true,
            user: {
                picture: '1234',
            },
        });
    });
    describe('When rendering it', () => {
        test('Then it should appear on the screen', () => {
            render(
                <MemoryRouter>
                    <Routes>
                        <Route path="/" element={<Header />} />
                    </Routes>
                </MemoryRouter>
            );
            expect(screen.getAllByRole('button')).toBeTruthy();
        });
    });
});
