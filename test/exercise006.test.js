const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime, 
    createMatrix, 
    areWeCovered
} = require('../challenges/exercise006');

describe("sumMultiples", () => {
    test("it throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples()
        }).toThrow("arr is required");
        expect(() => {
            sumMultiples('string')
        }).toThrow("An array is required");
        expect(() => {
            sumMultiples(5)
        }).toThrow("An array is required");
    });
    test("it returns the sum of any numbers which are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
        expect(sumMultiples([3, 3, 5, 5])).toBe(16);
        expect(sumMultiples([6, 15, 2])).toBe(21);
    });
    test("it works with decimal numbers", () => {
        expect(sumMultiples([1, 3.0, 5.0, 15.0, 12.0, 2])).toBe(35);
    });
    test("it returns 0 if no multiples of 3 or 5", () => {
        expect(sumMultiples([1, 2, 4, 7, 8, 11, 13])).toBe(0);
    });


});

describe("isValidDNA", () => {
    it("throws an error if no string is passed in", () => {
        expect(() => {
            isValidDNA();
        }).toThrow("str is required");
    });

    it("returns false if string contains no valid DNA characters", () => {
        expect(isValidDNA("BDEFG")).toBe(false);
        expect(isValidDNA("XYZ")).toBe(false);
    });

    it("returns false if string contains a mixture of valid DNA characters & invalid characters", () => {
        expect(isValidDNA("ABCDEFG")).toBe(false);
        expect(isValidDNA("STUVW")).toBe(false);

    });
    it("returns true if string contains only valid DNA characters", () => {
        expect(isValidDNA("CGTA")).toBe(true);
        expect(isValidDNA("CGTACGTA")).toBe(true);
        expect(isValidDNA("ATGCATGC")).toBe(true);
        expect(isValidDNA("TTTTT")).toBe(true);
        expect(isValidDNA("AAAAA")).toBe(true);
        expect(isValidDNA("GGGGG")).toBe(true);
        expect(isValidDNA("CC")).toBe(true);
    });

    it("returns false if string contains valid DNA characters but lowercase", () => {
        expect(isValidDNA("cgta")).toBe(false);
        expect(isValidDNA("atgc")).toBe(false);
        expect(isValidDNA("CGtA")).toBe(false);
    });

});

describe("getComplementaryDNA", () => {
    test("throws an error is no string is passed" , () => {
        expect(() => {
            getComplementaryDNA();
        }).toThrow("str is required");

    });

    test("returns an error if an invalid string is passed", () => {
        expect(() => {
            getComplementaryDNA("ACTH")
        }).toThrow("invalid DNA string");
    });

    test("returns the correct corresponding DNA base pairs", () => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
        expect(getComplementaryDNA("CGTA")).toBe("GCAT");
        expect(getComplementaryDNA("ACTGCGTA")).toBe("TGACGCAT");
        expect(getComplementaryDNA("ACTGCGTATTGC")).toBe("TGACGCATAACG");
    })
});

describe("isItPrime", () => {
    test("throws an error if no parameter passed in", () => {
        expect(() => {
            isItPrime()
        }).toThrow("n is required");
    });

    test("returns true if n is a prime number", () => {
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(3)).toBe(true);
        expect(isItPrime(5)).toBe(true);
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(11)).toBe(true);
        expect(isItPrime(13)).toBe(true);
        expect(isItPrime(17)).toBe(true);
        expect(isItPrime(19)).toBe(true);
        expect(isItPrime(23)).toBe(true);
        expect(isItPrime(29)).toBe(true);
        expect(isItPrime(31)).toBe(true);
        expect(isItPrime(37)).toBe(true);
        expect(isItPrime(41)).toBe(true);
        expect(isItPrime(43)).toBe(true);
        expect(isItPrime(47)).toBe(true);
    });

    test("returns false if n is not a prime number", () => {
        expect(isItPrime(0)).toBe(false);
        expect(isItPrime(1)).toBe(false);
        expect(isItPrime(4)).toBe(false);
        expect(isItPrime(6)).toBe(false);
        expect(isItPrime(8)).toBe(false);
        expect(isItPrime(9)).toBe(false);
        expect(isItPrime(10)).toBe(false);
    });

});

describe("createMatrix", () => {

    it("throws an error if either of the parameters are not passed in (undefined)", () => {
        expect(() => {
            createMatrix();
        }).toThrow("n is required")
        expect(() => {
            createMatrix(5);
        }).toThrow("fill is required")

    });

    it("throws an error if either of the parameters are of the wrong type", () => {
        expect(() => {
            createMatrix("4", "boo");
        }).toThrow("n must be a number")
        expect(() => {
            createMatrix(5, 7);
        }).toThrow("fill must be a string")

    });

    it("returns an empty array when passed the argument 0", () =>{
        expect(createMatrix(0, "foo")).toEqual([]);
    });

    it("returns a matrix of 1 * 1 when passed 1", () => {
        expect(createMatrix(1, "foo")).toEqual([["foo"]])
    });

    it("returns a matrix of 2 * 2 when passed 1", () => {
        expect(createMatrix(2, "foo")).toEqual(
            [
                ["foo", "foo"],
                ["foo", "foo"]
            ])
    });
    it("returns a matrix of 3 * 3 when passed 1", () => {
        expect(createMatrix(3, "bar")).toEqual(
            [
                ["bar", "bar", "bar"],
                ["bar", "bar", "bar"],
                ["bar", "bar", "bar"],
            ])
    });

});

xdescribe("areWeCovered", () => {
    test("it throws an error if parameters not passed in", () => {
        expect(() => {
            areWeCovered()
        }).toThrow("staff is required");
        expect(() => {
            areWeCovered(["Ben"]);
        }).toThrow("day is required");
    });

    test("it returns false if there are no staff at all", () => {
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
        expect(areWeCovered([], "Sunday")).toBe(false);
    });

    test("it returns false if there are staff but < 3 scheduled to work", () => {
        const staff = [
            {name : "Gary", rota: ["Monday", "Tuesday"]},
            {name : "Paul", rota: ["Monday", "Tuesday"]},
            {name : "Sally", rota: ["Monday", "Tuesday"]},
            {name : "Jess", rota: ["Monday", "Tuesday"]},
        ]
        expect(areWeCovered(staff, "Wednesday")).toBe(false);
        expect(areWeCovered(staff, "Thursday")).toBe(false);
        expect(areWeCovered(staff, "Friday")).toBe(false);
        expect(areWeCovered(staff, "Saturday")).toBe(false);
        expect(areWeCovered(staff, "Sunday")).toBe(false);

    });

    // 3 staff working
    // more than 3 staff working

});