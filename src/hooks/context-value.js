import { useAuth0 } from '@auth0/auth0-react';
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

    const { user } = useAuth0();

    const addBook = (book, userID) => {
        dispatcher(action.addBook(book, userID));
    };

    const updateBook = (book) => {
        dispatcher(action.updateBook(book));
    };

    const userExists = (userID) =>
        userBooks.find((item) => item.user === userID) !== undefined;

    return {
        addBook,
        userBooks,
        userExists,
        updateBook,
    };
}
