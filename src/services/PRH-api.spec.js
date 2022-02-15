import { rest } from 'msw';
import { setupServer } from 'msw/node';

import * as api from './PRH-api';

const URL =
    'https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/categories/93/titles?rows=5&showCovers=true&sort=random&api_key=mdmzpbe68gz2cc23pc7dhs28';

const server = setupServer();

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('Given the function getFromCategory in PRH-api.js', () => {
    describe('When calling it with a catID of 93', () => {
        test('Then it shold either return an object', async () => {
            server.use(
                rest.get(URL, (req, response, context) =>
                    response(
                        context.status(200),
                        context.json({ catName: 'Romance', id: 3 })
                    )
                )
            );

            await expect((await api.getFromCategory(93)).data).toEqual({
                catName: 'Romance',
                id: 3,
            });
        });
        test('or catch an error', async () => {
            server.use(
                rest.get(URL, (req, response, context) =>
                    response(context.status(404))
                )
            );

            await expect(api.getFromCategory(93)).rejects.toThrow('404');
        });
    });
});

describe('Given the function getFromSaved in PRH-api.js', () => {
    describe('When calling it without parameters', () => {
        test('Then it shold either return an array of objects', async () => {
            server.use(
                rest.get(
                    'http://localhost:4500/books/',
                    (req, response, context) =>
                        response(
                            context.status(200),
                            context.json([
                                {
                                    title: 'Romeo & Juliet',
                                    author: 'Shakespeare',
                                    id: 1,
                                },
                            ])
                        )
                )
            );

            await expect((await api.getFromSaved()).data).toEqual([
                {
                    title: 'Romeo & Juliet',
                    author: 'Shakespeare',
                    id: 1,
                },
            ]);
        });
        test('or catch an error', async () => {
            server.use(
                rest.get(
                    'http://localhost:4500/books/',
                    (req, response, context) => response(context.status(404))
                )
            );

            await expect(api.getFromSaved()).rejects.toThrow('404');
        });
    });
});

describe('Given the function saveBook in PRH-api.js', () => {
    describe('When calling it whith an object as a parameter', () => {
        test('Then it shold either return the object updated', async () => {
            server.use(
                rest.post(
                    'http://localhost:4500/books/',
                    (req, response, context) =>
                        response(
                            context.status(200),
                            context.json({
                                title: 'Romeo & Juliet',
                                author: 'Shakespeare',
                                id: 1,
                            })
                        )
                )
            );

            await expect(
                (
                    await api.saveBook({
                        title: 'Romeo & Juliet',
                        author: 'Shakespeare',
                    })
                ).data
            ).toEqual({
                title: 'Romeo & Juliet',
                author: 'Shakespeare',
                id: 1,
            });
        });
        test('or catch an error', async () => {
            server.use(
                rest.post(
                    'http://localhost:4500/books/',
                    (req, response, context) => response(context.status(404))
                )
            );

            await expect(api.saveBook()).rejects.toThrow('404');
        });
    });
});
