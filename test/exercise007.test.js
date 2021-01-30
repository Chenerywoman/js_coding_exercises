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

});

describe("getScreentimeAlertList", () => {
    const users = []

    const users2 = [{
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [{
                    date: "2019-05-01",
                    usage: {
                        twitter: 34,
                        instagram: 22,
                        facebook: 40
                    }
                },
                {
                    date: "2019-05-02",
                    usage: {
                        twitter: 56,
                        instagram: 40,
                        facebook: 31
                    }
                },
                {
                    date: "2019-05-03",
                    usage: {
                        twitter: 12,
                        instagram: 15,
                        facebook: 19
                    }
                },
                {
                    date: "2019-05-04",
                    usage: {
                        twitter: 10,
                        instagram: 56,
                        facebook: 61
                    }
                },
            ]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [{
                    date: "2019-06-11",
                    usage: {
                        mapMyRun: 0,
                        whatsApp: 0,
                        facebook: 0,
                        safari: 10
                    }
                },
                {
                    date: "2019-06-13",
                    usage: {
                        mapMyRun: 0,
                        whatsApp: 0,
                        facebook: 0,
                        safari: 16
                    }
                },
                {
                    date: "2019-06-14",
                    usage: {
                        mapMyRun: 0,
                        whatsApp: 0,
                        facebook: 0,
                        safari: 31
                    }
                },
            ]
        },
        {
            username: "bobby-jones",
            name: "Bobby Jones",
            screenTime: [{
                    date: "2019-06-11",
                    usage: {
                        mapMyRun: 0,
                        whatsApp: 0,
                        facebook: 0,
                        safari: 10
                    }
                },
                {
                    date: "2019-06-13",
                    usage: {
                        mapMyRun: 0,
                        whatsApp: 0,
                        facebook: 0,
                        safari: 16
                    }
                },
                {
                    date: "2019-05-02",
                    usage: {
                        mapMyRun: 45,
                        whatsApp: 30,
                        facebook: 25,
                        safari: 15
                    }
                },
            ]
        },
    ]


    it("throws an error if either of the required arguments are undefined, empty or wrongly formatted", () => {

        expect(() => {
            getScreentimeAlertList()
        }).toThrow("users is required");

        expect(() => {
            getScreentimeAlertList(users2)
        }).toThrow("date is required");

        expect(() => {
            getScreentimeAlertList(users, "2019-05-04")
        }).toThrow("users array is empty");

        expect(() => {
            getScreentimeAlertList(users2, "2019-05-0")
        }).toThrow("date not formatted YYYY-MM-DD");


    });

    it("returns a array with a single username who has used more than 100 minutes of screen time for the given day", () => {

        expect(getScreentimeAlertList(users2, "2019-05-04")).toEqual(["beth_1234"])

    });
    it("returns a array with a two usernames if they have used more than 100 minutes of screen time for the given day", () => {
        expect(getScreentimeAlertList(users2, "2019-05-04")).toEqual(["beth_1234"])
        expect(getScreentimeAlertList(users2, "2019-05-02")).toEqual(["beth_1234", "bobby-jones"])

    });
    it("returns a array with an empty array if no users have used more than 100 minutes of screen time for the given day", () => {
        expect(getScreentimeAlertList(users2, "2020-05-04")).toEqual([])
    })
});

describe("hextoRGB", () => {
    it("throws an error if a string is not passed into the function, or is wrongly formatted", () => {

        expect(() => {
            hexToRGB()
        }).toThrow("hexStr is required");

        expect(() => {
            hexToRGB("#FF113")
        }).toThrow("hex colour not formatted #FF1133");

        expect(() => {
            hexToRGB("#FF113d")
        }).toThrow("hex colour not formatted #FF1133");
    });

    it("tranforms a given hex code into an RGB code in the format rgb(255,17,51", () => {
        expect(hexToRGB("#FFFFFF")).toBe("rgb(255,255,255)")
        expect(hexToRGB("#FF0000")).toBe("rgb(255,0,0)")
        expect(hexToRGB("#0000FF")).toBe("rgb(0,0,255)")
        expect(hexToRGB("#00FF00")).toBe("rgb(0,255,0)")
        expect(hexToRGB("#FF00FF")).toBe("rgb(255,0,255)")
        expect(hexToRGB("#00FFFF")).toBe("rgb(0,255,255)")
        expect(hexToRGB("#66FF66")).toBe("rgb(102,255,102)")
        expect(hexToRGB("#6666FF")).toBe("rgb(102,102,255)")
        expect(hexToRGB("#CC00CC")).toBe("rgb(204,0,204)")
        expect(hexToRGB("#000000")).toBe("rgb(0,0,0)")
        expect(hexToRGB("#FFCCCC")).toBe("rgb(255,204,204)")
    });
});
