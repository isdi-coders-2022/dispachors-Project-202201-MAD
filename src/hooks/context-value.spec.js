import { render, screen } from '@testing-library/react';
import { useContextValue } from './context-value';

describe('Given the custom hook useContextValue', () => {
    describe('When calling it', () => {
        test('Then it should return an object', () => {
            function MockComponent() {
                return <p>{typeof useContextValue()}</p>;
            }
            render(<MockComponent />);
            expect(screen.getByText(/object/i)).toBeTruthy();
        });
    });
});
