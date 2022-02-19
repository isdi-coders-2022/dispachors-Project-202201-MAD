/* eslint-disable react/jsx-no-constructed-context-values */
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Home } from './components/home/home';
import { App } from './App';

jest.mock('./components/home/home');
describe('Tests for App Router', () => {
    test('Should render Home on default route', () => {
        Home.mockImplementation(() => <div> HomeMock</div>);

        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByText('HomeMock')).toBeInTheDocument();
    });
});
