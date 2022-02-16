import { randomCategories } from './helpers';

describe('Given the function randomCategories', () => {
    describe('Whem importing it', () => {
        test('then, it should output 3 objects', () => {
            expect(randomCategories().length).toEqual(3);
        });
    });
});
