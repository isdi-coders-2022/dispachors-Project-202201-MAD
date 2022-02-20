import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { Context, ContextProvider } from './context-provider';

function MockComponent() {
    return <div>{JSON.stringify(useContext(Context))}</div>;
}

describe('Given the component ContextProvider,', () => {
    describe('When wrapping a mock component that returns its value', () => {
        test('Then it should have a number of properties', () => {
            render(
                <ContextProvider>
                    <MockComponent />
                </ContextProvider>
            );

            expect(screen.getByText(/userbooks/i)).toBeTruthy();
        });
    });
});
