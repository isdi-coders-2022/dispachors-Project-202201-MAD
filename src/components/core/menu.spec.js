import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './menu';

describe('Given the component Menu', () => {
    describe('When rendering it', () => {
        test('Then it should appear on the screen', () => {
            render(
                <MemoryRouter>
                    <Routes>
                        <Route path="/" element={<Menu />} />
                    </Routes>
                </MemoryRouter>
            );
            expect(screen.getAllByRole('menuitem')).toHaveLength(2);
        });
    });
});
