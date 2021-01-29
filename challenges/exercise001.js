function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase().concat(word.slice(1, word.length))
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  const firstInitial = firstName.charAt(0).toUpperCase();
  const secondInitial = lastName.charAt(0).toUpperCase();

  return firstInitial + "." + secondInitial;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  const VAT = vatRate / 100;
  const VATElement = originalPrice * VAT;
  const priceWithVAT = originalPrice + VATElement
  const priceWithVATRounded = priceWithVAT.toFixed(2);
  return Number(priceWithVATRounded);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  const amountToDeduct = originalPrice * reduction / 100;
  const reduducedPrice = originalPrice - amountToDeduct;
  const rounded = Number(reduducedPrice.toFixed(2))
  return rounded;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  return str.length % 2 == 0 ? str.charAt(str.length / 2 - 1) + str.charAt(str.length / 2) : str.charAt(str.length / 2);

}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  const reversedArray = word.split(' ').reverse();

  const reversedWordsArray = reversedArray.map((elem) => {
    return elem.split('').reverse().join('');
  });
  const reversed = reversedWordsArray.join(' ');

  return reversed;

}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  const reversedArray = words.map((elem) => {
    return elem.split('').reverse().join('');
  });

  return reversedArray;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  const linuxUsers = users.reduce((acc, curr) => {

    return curr.type === "Linux" ? acc + 1 : acc;

  }, 0);

  return linuxUsers;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  const totalScores = scores.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  let meanScores = totalScores / scores.length;

  if (meanScores % 1 !== 0) {
    meanScores = Number(meanScores.toFixed(2));
  }
  return meanScores;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  if (n % 3 == 0 && n % 5 == 0) return "fizzbuzz";
  else if (n % 3 === 0) return "fizz";
  else if (n % 5 === 0) return "buzz";
  else return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};