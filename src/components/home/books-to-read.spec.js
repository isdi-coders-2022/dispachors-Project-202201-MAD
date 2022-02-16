import { render, screen } from '@testing-library/react';
import { Context } from '../../context/context-provider';
import { BooksToRead } from './books-to-read';

const contextValue = {
    userBooks: [
        {
            _links: [
                {},
                {
                    rel: 'icon',
                    href: 'https://images.randomhouse.com/cover/9780143128618',
                    method: 'GET',
                    parameters: null,
                },
            ],
        },
    ],
};

describe('Given the component BooksToRead', () => {
    describe('When completed loaded', () => {
        test('Then it should renders the book cover', () => {
            render(
                <Context.Provider value={contextValue}>
                    <BooksToRead />
                </Context.Provider>
            );
            expect(screen.getByAltText(/book/i)).toBeTruthy();
            expect(screen.getByText(/leer/i)).toBeTruthy();
        });
    });
});
