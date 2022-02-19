import { screen, render } from '@testing-library/react';
import { useAuth0 } from '@auth0/auth0-react';
import { Routes, MemoryRouter } from 'react-router-dom';
import { axios } from 'axios';
import { Details } from './details';

jest.mock('axios');

jest.mock('@auth0/auth0-react');

const mockUser = {
    sub: 123,
};

const titleURL = `https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/titles/123?api_key=mdmzpbe68gz2cc23pc7dhs28`;
const contentURL = `https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/titles/123/content?api_key=mdmzpbe68gz2cc23pc7dhs28`;

describe('Given the component Details', () => {
    beforeEach(() => {
        useAuth0.mockReturnValue({
            isAuthenticated: true,
            user: mockUser,
        });
        axios.get(titleURL).mockResolvedValue();
        axios.get(contentURL).mockResolvedValue();
    });
    describe('When rendering it', () => {
        test('A page should appear', () => {
            render(
                <MemoryRouter initialEntries={['/detail/id=123']}>
                    <Routes location={{ pathname: '/detail/id=123' }}>
                        <Details />
                    </Routes>
                </MemoryRouter>
            );
        });
    });
});
