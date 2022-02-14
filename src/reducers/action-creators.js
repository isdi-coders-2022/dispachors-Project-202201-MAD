import { actionTypes } from './action-types';

export const addBook = (book) => ({
    type: actionTypes.add,
    book,
});

export const removeBook = (book) => ({
    type: actionTypes.remove,
    book,
});

export const updateBook = (book) => ({
    type: actionTypes.update,
    book,
});

export const loadBooks = (books) => ({
    type: actionTypes.load,
    books,
});
