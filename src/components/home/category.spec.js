/* eslint-disable no-underscore-dangle */
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { Category } from './category';

const server = setupServer();

beforeAll(() => server.listen());
beforeEach(() => server.resetHandlers());
afterAll(() => server.close);

const item = { id: 123, catName: 'Shakespeare' };
const URL = `https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/categories/123/titles?rows=5&showCovers=true&sort=random&api_key=mdmzpbe68gz2cc23pc7dhs28`;
const mockResponse = {
    data: {
        titles: [
            {
                isbn: 9780143128618,
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
            {
                isbn: 9780143128618,
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
    },
};

describe('Given the component Category', () => {
    describe('When rendering it', () => {
        test('Then it should appear on the screen', () => {
            server.use(
                rest.get(URL, (req, response, context) =>
                    response(context.status(200), context.json(mockResponse))
                )
            );

            render(
                <Category
                    key={item.id}
                    catID={item.id}
                    categoryName={item.catName}
                />
            );

            expect(screen.getByText(/Shakespeare/i)).toBeTruthy();
        });
    });
});
