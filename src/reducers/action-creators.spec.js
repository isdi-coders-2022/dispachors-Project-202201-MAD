import { actionTypes } from './action-types';

describe('Given the function addBook', () => {
    describe('Whem importing it', () => {
        test('then, it should work like this', () => {
            const addBook = (book) => ({
                type: actionTypes.add,
                book,
            });

            const book = { cosicas: 'estas' };

            expect(addBook(book)).toEqual({
                book: { cosicas: 'estas' },
                type: '@books/add',
            });
        });
    });
});

describe('Given the function removeBook', () => {
    describe('Whem importing it', () => {
        test('then, it should work like this', () => {
            const removeBook = (book) => ({
                type: actionTypes.remove,
                book,
            });

            const book = { cosicas: 'estas' };

            expect(removeBook(book)).toEqual({
                book: { cosicas: 'estas' },
                type: '@books/remove',
            });
        });
    });
});

describe('Given the function updateBook', () => {
    describe('Whem importing it', () => {
        test('then, it should work like this', () => {
            const update = (book) => ({
                type: actionTypes.update,
                book,
            });

            const book = { cosicas: 'estas' };

            expect(update(book)).toEqual({
                book: { cosicas: 'estas' },
                type: '@books/update',
            });
        });
    });
});
describe('Given the function loadBooks', () => {
    describe('Whem importing it', () => {
        test('then, it should work like this', () => {
            const loadBooks = (books) => ({
                type: actionTypes.load,
                books,
            });

            const books = { cosicas: 'estas' };

            expect(loadBooks(books)).toEqual({
                books: { cosicas: 'estas' },
                type: '@books/load',
            });
        });
    });
});
