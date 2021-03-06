import * as action from './action-creators';
import { Reducer } from './reducers';

let mockState = [];

describe('Given the function Reducer', () => {
    beforeEach(() => {
        mockState = [
            { id: 1, bookName: '1984' },
            { id: 2, bookName: 'Soledad' },
            { id: 3, bookName: 'Comedia' },
        ];
    });

    describe('When passing a state and the add action', () => {
        test('Then it should return the state with the added book', () => {
            const newState = Reducer(
                mockState,
                action.addBook({ id: 4, bookName: 'Renglones' })
            );

            expect(newState).toEqual([
                { id: 1, bookName: '1984' },
                { id: 2, bookName: 'Soledad' },
                { id: 3, bookName: 'Comedia' },
                { id: 4, bookName: 'Renglones' },
            ]);
        });
    });

    describe('When passing a state and the remove action', () => {
        test('then it should return the state without the removed book', () => {
            const currentState = Reducer(
                mockState,
                action.removeBook({ id: 3, bookName: 'Comedia' })
            );

            expect(currentState).toEqual([
                { id: 1, bookName: '1984' },
                { id: 2, bookName: 'Soledad' },
            ]);
        });
    });

    describe('When passing a state and the load action', () => {
        test('then it should return the current state', () => {
            const newState = Reducer(mockState, action.loadBooks(mockState));

            expect(newState).toEqual([
                { id: 1, bookName: '1984' },
                { id: 2, bookName: 'Soledad' },
                { id: 3, bookName: 'Comedia' },
            ]);
        });
    });

    describe('When passing a state and the update function', () => {
        test('then it should return the state updated', () => {
            const currentState = Reducer(
                mockState,
                action.updateBook({
                    id: 3,
                    bookName: 'Comedia',
                    isRead: true,
                    rating: 3,
                })
            );

            expect(currentState).toEqual([
                { id: 1, bookName: '1984' },
                { id: 2, bookName: 'Soledad' },
                { id: 3, bookName: 'Comedia', isRead: true, rating: 3 },
            ]);
        });
    });

    describe('When passing a state and the an unknown function', () => {
        test('then it should return the same state', () => {
            const currentState = Reducer(mockState, action === undefined);

            expect(currentState).toEqual([
                { id: 1, bookName: '1984' },
                { id: 2, bookName: 'Soledad' },
                { id: 3, bookName: 'Comedia' },
            ]);
        });
    });
});
