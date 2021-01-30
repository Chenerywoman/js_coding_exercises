const {
    sumDigits, 
    createRange, 
    getScreentimeAlertList, 
    hexToRGB, 
    findWinner, 
} = require('../challenges/exercise007');

describe("sumDigits", () => {
    it("throws an error if argument not passed in (n is undefined", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");
    });

    it("returns the number if it is a single digit", () => {
        expect(sumDigits(0)).toBe(0);
        expect(sumDigits(1)).toBe(1);
        expect(sumDigits(2)).toBe(2);
        expect(sumDigits(3)).toBe(3);
        expect(sumDigits(4)).toBe(4);
        expect(sumDigits(5)).toBe(5);
        expect(sumDigits(6)).toBe(6);
        expect(sumDigits(7)).toBe(7);
        expect(sumDigits(8)).toBe(8);
        expect(sumDigits(9)).toBe(9);
    });

    it("returns the sum of two numbers", () => {
        expect(sumDigits(10)).toBe(1);
        expect(sumDigits(12)).toBe(3);
        expect(sumDigits(23)).toBe(5);
        expect(sumDigits(34)).toBe(7);
        expect(sumDigits(45)).toBe(9);
        expect(sumDigits(56)).toBe(11);
        expect(sumDigits(67)).toBe(13);
        expect(sumDigits(78)).toBe(15);
        expect(sumDigits(89)).toBe(17);
        expect(sumDigits(91)).toBe(10);
    });

    it("returns the sum of three numbers", () => {
        expect(sumDigits(101)).toBe(2);
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(234)).toBe(9);
        expect(sumDigits(345)).toBe(12);
        expect(sumDigits(456)).toBe(15);
        expect(sumDigits(567)).toBe(18);
        expect(sumDigits(678)).toBe(21);
        expect(sumDigits(789)).toBe(24);
        expect(sumDigits(891)).toBe(18);
        expect(sumDigits(919)).toBe(19);
    });

    it("returns the sum of three numbers, ignoring the decimal point", () => {
        expect(sumDigits(1.01)).toBe(2);
        expect(sumDigits(1.23)).toBe(6);
        expect(sumDigits(23.4)).toBe(9);
        expect(sumDigits(34.5)).toBe(12);
        expect(sumDigits(4.56)).toBe(15);
        expect(sumDigits(56.7)).toBe(18);
        expect(sumDigits(6.78)).toBe(21);
        expect(sumDigits(78.9)).toBe(24);
        expect(sumDigits(8.91)).toBe(18);
        expect(sumDigits(91.9)).toBe(19);
    });
});

describe("createRange", () => {
    it("throws an error if either of the required arguments are undefined", () => {
        expect(() => {
            createRange()
        }).toThrow("start is required");

        expect(() => {
            createRange(3)
        }).toThrow("end is required");
    });

    it("creates an array of positive numbers with the default step value of 1", () => {
        expect(createRange(0, 9)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(createRange(10, 20)).toEqual([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    });

    it("creates an array of positive numbers with the step value passed in", () => {
        expect(createRange(1, 19, 2)).toEqual([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
        expect(createRange(10, 50, 5)).toEqual([10, 15, 20, 25, 30, 35, 40, 45, 50]);
    });

    it("creates an array starting from a negative number", () => {
        expect(createRange(-10, 10)).toEqual([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(createRange(-10, 10, 2)).toEqual([-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10]);
    });

    it("creates an descending array", () => {
        expect(createRange(10, -10)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]);
        expect(createRange(50, 0, 10)).toEqual([50, 40, 30, 20, 10, 0]);
    });

    // positive to negative
});

