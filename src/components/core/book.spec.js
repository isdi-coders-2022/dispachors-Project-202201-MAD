/* eslint-disable no-underscore-dangle */
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Book } from './book';

const item = {
    isbn: 9780143128618,
    _links: [
        {
            rel: 'self',
            href: 'https://api.penguinrandomhouse.com/title/client/Public/domains/PRH.US/titles/9780143128618?sort=random',
            method: 'GET',
            parameters: null,
        },
        {
            rel: 'icon',
            href: 'https://images.randomhouse.com/cover/9780143128618',
            method: 'GET',
            parameters: null,
        },
    ],
};

describe('Given the component Book', () => {
    describe('When rendering it', () => {
        test('Then it should appear on the screen', async () => {
            render(
                <MemoryRouter>
                    <Routes>
                        <Route path="/" element={<Book book={item} />} />
                    </Routes>
                </MemoryRouter>
            );

            expect(screen.getByAltText(/book/i)).toBeTruthy();
        });
    });
});
