
const mathOperations = require('./calculator');

describe('Calculator tests', () => {
    test('adding 2 + 3 should equal 5', () => {
        expect(mathOperations.sum(2, 3)).not.toBe(1);
    });
    test('subtracting 5 from 20 should equal 15', () => {
        expect(mathOperations.diff(20, 5)).toBe(15);
    });
    test('multiplying 5 by 5 should equal 25', () => {
        expect(mathOperations.product(5, 5)).toBe(25);
    });
});