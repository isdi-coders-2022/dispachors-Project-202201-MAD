import { useReducer, useEffect } from 'react';
import { Reducer } from '../reducers/reducers';
import * as api from '../services/PRH-api';
import * as action from '../reducers/action-creators';

export function useContextValue() {
    const [userBooks, dispatcher] = useReducer(Reducer, []);

    useEffect(() => {
        // const savedBooks = api.getFromSaved();
        // const loadSavedAction = action.loadBooks(savedBooks);
        // dispatcher(loadSavedAction);

        api.getFromSaved().then((Response) => {
            dispatcher(action.loadBooks(Response.data));
        });
    }, []);

    const addBook = (book) => {
        // const addBookAction = action.addBook(book);
        // dispatcher(addBookAction);
        dispatcher(action.addBook(book));
    };

    const contextValue = {
        addBook,
        userBooks,
    };

    return contextValue;
}
