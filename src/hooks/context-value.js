import { useReducer, useEffect } from 'react';
import { Reducer } from '../reducers/reducers';
import * as api from '../services/PRH-api';
import * as action from '../reducers/action-creators';

export function useContextValue() {
    const [userBooks, dispatcher] = useReducer(Reducer, []);

    useEffect(() => {
        api.getFromSaved().then((Response) => {
            dispatcher(action.loadBooks(Response.data));
        });
    }, []);

    const addBook = (book) => {
        api.saveBook(book).then((resp) => {
            dispatcher(action.addBook(resp.data));
        });
    };

    const deleteBook = (book) => {
        api.deleteBook(book);
        dispatcher(action.removeBook(book));
    };

    const updateBook = (book) => {
        api.updateBook(book).then((resp) => {
            dispatcher(action.updateBook(resp.data));
        });
    };

    return {
        addBook,
        userBooks,
        updateBook,
        deleteBook,
    };
}
