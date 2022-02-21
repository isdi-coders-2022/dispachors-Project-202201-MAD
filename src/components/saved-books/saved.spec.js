/* eslint-disable react/jsx-no-constructed-context-values */
import { render, screen } from '@testing-library/react';
import { SavedBooks } from './saved';

import { Context } from '../../context/context-provider';

describe('Given the component SavedBooks', () => {
    describe('When rendering it', () => {
        test('Then it should appear on the screen', () => {
            const contextValue = {
                userBooks: [
                    {
                        user: 'google-oauth2|117072913009179683499',
                        isbn: '9780767920384',
                        _links: [
                            {},
                            {
                                href: 'https://images.randomhouse.com/cover/9780767920384',
                            },
                        ],
                        isRead: true,
                        rating: '3',
                        id: 2,
                    },
                ],
            };

            render(
                <Context.Provider value={contextValue}>
                    <SavedBooks />
                </Context.Provider>
            );
            expect(screen.getByText(/Read books/i)).toBeTruthy();
        });
    });
});
