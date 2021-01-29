function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  
  const smallNums = [];
 
  //forEach
  nums.forEach(num => {
    if(num < 1) smallNums.push(num);
  });

  return smallNums;

  //Other?
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  
 
  const namesBeginningChar = [];

  //forEach
  names.forEach(name => {
    if (name.charAt(0) === char){
      namesBeginningChar.push(name);
    }
  })

  return namesBeginningChar;
  //Other?
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  
  const verbs = [];
  
  //forEach
  words.forEach(word => {
    if (word.slice(0,3) === "to ") verbs.push(word);
  });

  return verbs;

  //Other?
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  
  const integers = [];

  //forEach
  nums.forEach(num => {
    if (Number.isInteger(num)) integers.push(num)
  });

  return integers;

  //Other?
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  
  const cities = [];
 
  //forEach
  users.forEach(user => cities.push(user.data.city.displayName));

  return cities;
  
  //Other?
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  
  const squareRoots = [];

  //forEach
  nums.forEach(num => squareRoots.push(parseFloat(Math.sqrt(num).toFixed(2))))

  return squareRoots;

  //Other?
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  
  const sentencesWithString = [];

  //forEach
  sentences.forEach(sentence => {
    if (sentence.toLowerCase().includes(str.toLowerCase())){
        sentencesWithString.push(sentence)
    }
  });

  return sentencesWithString;

  //Other?
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  
  const longestSides = [];

  //forEach
  triangles.forEach(triangle => {

    let longest = 0;

    triangle.forEach(side => {
      if (side > longest){
        longest = side;
      }
    });

    longestSides.push(longest);

  });

  return longestSides;

  //Other?
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
