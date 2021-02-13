function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  const busesNeeded = Math.ceil(people / 40);

  return busesNeeded;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  const sheep = arr.reduce((acc, curr) => {
    return curr === "sheep" ? acc + 1 : acc;
  }, 0);

  return sheep;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  return person.address.postCode.charAt(0) === "M" && person.address.city === "Manchester";
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};