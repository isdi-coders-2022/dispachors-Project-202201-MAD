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

            render(
                <Context.Provider value={contextValue}>
                    <SavedBooks />
                </Context.Provider>
            );
            expect(screen.getByText(/read/i)).toBeTruthy();
        });
    });
});
