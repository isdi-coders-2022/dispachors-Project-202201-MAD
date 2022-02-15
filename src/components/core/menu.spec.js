import { render, screen } from '@testing-library/react';
import { Menu } from './menu';

describe('Given the component Menu', () => {
    describe('When rendering it', () => {
        test('Then it should appear on the screen', () => {
            render(<Menu />);
            expect(screen.getAllByRole('menuitem')).toHaveLength(3);
        });
    });
});
