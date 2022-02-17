import { actionTypes } from './action-types';

export function Reducer(state, action) {
    switch (action.type) {
        case actionTypes.load:
            return [...action.books];

        case actionTypes.add:
            return [...state, action.book];

        case actionTypes.remove:
            return state.filter((item) => item.id !== action.book.id);

        case actionTypes.update:
            return state.map((item) =>
                item.id === action.book.id
                    ? {
                          ...item,
                          isRead: action.book.isRead,
                          rating: action.book.rating,
                      }
                    : item
            );
        default:
            return state;
    }
}
