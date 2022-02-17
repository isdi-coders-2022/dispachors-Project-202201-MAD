import { actionTypes } from './action-types';

export function Reducer(state, action) {
    switch (action.type) {
        case actionTypes.load:
            return [...action.books];

        case actionTypes.add:
            return state.map((item) =>
                item.user === action.userID
                    ? { ...item, books: [...item.books, action.book] }
                    : item
            );

        case actionTypes.addUser:
            return [...state, { user: action.userID, books: [] }];

        case actionTypes.remove:
            return state.filter((item) => item.id !== action.book.id);

        case actionTypes.update:
            return state.map((item) =>
                item.id === action.book.id
                    ? { ...item, isRead: !item.isRead }
                    : item
            );
        default:
            return state;
    }
}
