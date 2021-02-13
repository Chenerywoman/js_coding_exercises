/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("An array is required");
  return arr.reduce((acc, curr) => {
    return curr % 3 === 0 || curr % 5 === 0 ? acc + curr : acc;
  }, 0);
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");

  const regex = /(C|G|T|A)/

  for (let i = 0; i < str.length; i++) {
    if (!str[i].match(regex)) return false;
  }
  return true;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {

  if (str === undefined) throw new Error("str is required");

  const regex = /(C|G|T|A)/
  for (let i = 0; i < str.length; i++) {
    if (!str[i].match(regex)) throw new Error("invalid DNA string")
  }

  const pairs = {
    A: "T",
    C: "G",
    T: "A",
    G: "C"
  };

  let DNAPairs = "";
  for (let i = 0; i < str.length; i++) {
    DNAPairs = DNAPairs + pairs[str[i]]
  }

  return DNAPairs;


};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");

  if (n < 2) return false;
  if (n == 2) return true;
  if (n % 2 === 0) return false;

  let number = 3;

  while (number < n) {

    if (n % number === 0) return false;
    number += 2;

  }

  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (typeof n !== "number") throw new Error("n must be a number");
  if (fill === undefined) throw new Error("fill is required");
  if (typeof fill !== "string") throw new Error("fill must be a string");

  if (n === 0) return [];

  const outerArray = [];

  for (let i = 0; i < n; i++) {
    outerArray.push(Array(n).fill(fill))
  }

  return outerArray;

}

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  if (staff.length === 0) return false;

  const staffOnRota = staff.reduce((acc, worker) => {
    return worker.rota.filter(weekday => weekday === day).length === 1 ? acc + 1 : acc;
  }, 0);

  return staffOnRota >= 3;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};