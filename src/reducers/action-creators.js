import { actionTypes } from './action-types';

export const addBook = (book, userID) => ({
    type: actionTypes.add,
    book,
    userID,
});

export const addUser = (userID) => ({
    type: actionTypes.addUser,
    userID,
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
