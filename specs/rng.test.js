const index = require('../rng');

describe('checkNumbersInRange', () => {
    it('returns true if number is in range', () => {
        expect(index.checkNumbersInRange(49)).toEqual(true);
    });

    it('returns true if number is at min range', () => {
        expect(index.checkNumbersInRange(10)).toEqual(true);
    });

    it('returns true if number is at max range', () => {
        expect(index.checkNumbersInRange(100)).toEqual(true);
    });

    it('returns false if number is out of min range', () => {
        expect(index.checkNumbersInRange(9)).toEqual(false);
    });

    it('returns false if number is out of max range', () => {
        expect(index.checkNumbersInRange(101)).toEqual(false);
    });
});

describe('genRandomNumbers', () => {
    it('returns array of random numbers', () => {
        const expected = index.genRandomNumbers(10);
        expect(expected.length).toEqual(10);
    });
});

describe('ascOrder', () => {
    it('sorts array biggest to lowest', () => {
        const expected = index.genRandomNumbers(10);
        const sorted = index.ascOrder(expected);

        sorted.forEach((el, _, arr) => {
            if (el != undefined && arr != undefined) {
                expect(el >= arr[0]).toEqual(true);
            }
        });
    });
});

describe('descOrder', () => {
    it('sorts array lowest to biggest', () => {
        const expected = index.genRandomNumbers(10);
        const sorted = index.descOrder(expected);

        sorted.forEach((el, _, arr) => {
            if (el != undefined && arr != undefined) {
                expect(el <= arr[0]).toEqual(true);
            }
        });
    });
});

describe('evenNumbers', () => {
    it('gets only even numbers', () => {
        const expected = index.genRandomNumbers(10);
        const evenNumbers = index.evenNumbers(expected);

        evenNumbers.forEach(el => expect(el % 2).toEqual(0));
    });
});

describe('oddNumbers', () => {
    it('gets only odd numbers', () => {
        const expected = index.genRandomNumbers(10);
        const oddNumbers = index.oddNumbers(expected);

        oddNumbers.forEach(el => expect(el % 2).not.toEqual(0));
    });
});