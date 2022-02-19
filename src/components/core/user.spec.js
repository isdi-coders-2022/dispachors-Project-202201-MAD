import { render, screen } from '@testing-library/react';
import { User } from './user';

describe('Given the component Menu', () => {
    describe('When rendering it', () => {
        test('Then it should appear on the screen', () => {
            render(<User />);
            expect(screen.getByRole('button')).toBeTruthy();
        });
    });
});
