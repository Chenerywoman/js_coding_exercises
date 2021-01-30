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

