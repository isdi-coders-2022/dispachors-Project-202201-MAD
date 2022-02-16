import { render, screen } from '@testing-library/react';
import { Context } from '../../context/context-provider';
import { Home } from './home';

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

describe('Given the component Home', () => {
    describe('When rendering it', () => {
        test('Then it should appear on the screen', () => {
            render(
                <Context.Provider value={contextValue}>
                    <Home />
                </Context.Provider>
            );
            expect(screen.getByAltText(/book/i)).toBeTruthy();
        });
    });
});
