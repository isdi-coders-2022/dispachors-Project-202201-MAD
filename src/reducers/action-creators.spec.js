import * as action from './action-creators';

describe('Given the function addBook', () => {
    describe('Whem importing it', () => {
        test('then, it should work like this', () => {
            const book = { cosicas: 'estas' };

            expect(action.addBook(book)).toEqual({
                book: { cosicas: 'estas' },
                type: '@books/add',
            });
        });
    });
});

describe('Given the function addUser', () => {
    describe('Whem importing it', () => {
        test('then, it should work like this', () => {
            const userID = { cosicas: 'estas' };
            expect(action.addUser(userID)).toEqual({
                userID: { cosicas: 'estas' },
                type: '@books/addUser',
            });
        });
    });
});

describe('Given the function removeBook', () => {
    describe('Whem importing it', () => {
        test('then, it should work like this', () => {
            const book = { cosicas: 'estas' };

            expect(action.removeBook(book)).toEqual({
                book: { cosicas: 'estas' },
                type: '@books/remove',
            });
        });
    });
});

describe('Given the function updateBook', () => {
    describe('Whem importing it', () => {
        test('then, it should work like this', () => {
            const book = { cosicas: 'estas' };

            expect(action.updateBook(book)).toEqual({
                book: { cosicas: 'estas' },
                type: '@books/update',
            });
        });
    });
});
describe('Given the function loadBooks', () => {
    describe('Whem importing it', () => {
        test('then, it should work like this', () => {
            const books = { cosicas: 'estas' };

            expect(action.loadBooks(books)).toEqual({
                books: { cosicas: 'estas' },
                type: '@books/load',
            });
        });
    });
});
