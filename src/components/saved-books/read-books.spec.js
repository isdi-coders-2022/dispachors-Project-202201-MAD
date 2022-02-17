/* eslint-disable react/jsx-no-constructed-context-values */
import { render, screen } from '@testing-library/react';
import { ReadBooks } from './read-books';
import { Context } from '../../context/context-provider';

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

describe('Given the component ReadBooks', () => {
    describe('When calling it', () => {
        test('Then it should render it', () => {
            render(
                <Context.Provider value={contextValue}>
                    <ReadBooks />
                </Context.Provider>
            );

            expect(screen.getByText(/libros/i)).toBeTruthy();
            expect(screen.getByAltText(/cover/i)).toBeTruthy();
        });
    });
});
