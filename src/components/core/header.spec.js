import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Given the component Header', () => {
    describe('When rendering it', () => {
        test('Then it should appear on the screen', () => {
            render(<Header />);
            expect(screen.getAllByRole('img')).toBeTruthy();
        });
    });
});
