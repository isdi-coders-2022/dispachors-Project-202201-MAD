import * as action from './action-creators';
import { Reducer } from './reducers';

describe('Given the function Reducer', () => {
    describe('When passing a state and the add action', () => {
        test('Then it should return the state with the added book', () => {
            const mockState = [
                { id: 1, bookName: '1984' },
                { id: 2, bookName: 'Soledad' },
                { id: 3, bookName: 'Comedia' },
            ];
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
    describe('When passing a state and the load action', () => {
        test('then it should return the current state', () => {
            const newState2 = Reducer(mockState, action.loadBooks(mockState));

            expect(newState2).toEqual([
                { id: 1, bookName: '1984' },
                { id: 2, bookName: 'Soledad' },
                { id: 3, bookName: 'Comedia' },
            ]);
        });
    });
});
