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

    const addBook = (book) => {
        dispatcher(action.addBook(book));
    };

    const userExists = () => {
        console.log(user.sub);
    };

    return {
        addBook,
        userBooks,
        userExists,
    };
}
