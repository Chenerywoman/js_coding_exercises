function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  
  // loop

  const smallNums = []
  for (let i = 0; i < nums.length; i++){
    if (nums[i] < 1) smallNums.push(nums[i]);
  }
  return smallNums;

  //forEach

  //Other?
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  
  // loop
  const namesBeginningChar = []
  for (let i = 0; i < names.length; i++){
    if (names[i].charAt(0) === char) namesBeginningChar.push(names[i]);
  }
  return namesBeginningChar;

  //forEach

  //Other?
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // loop
  const verbs = [];

  for (let i = 0; i < words.length; i++){
    if (words[i].slice(0,3) === "to ") verbs.push(words[i]);
  }
  return verbs;

  //forEach

  //Other?
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // loop
  const integers = [];
  
  for (let i = 0; i < nums.length; i++){
    if (Number.isInteger(nums[i])) integers.push(nums[i])
  }

  return integers;

  //forEach

  //Other?
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // loop
  const cities = [];

  for (i = 0; i < users.length; i++){
    cities.push(users[i].data.city.displayName);
  }

  return cities;
  //forEach

  //Other?
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // loop
  const squareRoots = [];

  for (let i = 0; i < nums.length; i++){
    squareRoots.push(parseFloat(Math.sqrt(nums[i]).toFixed(2)))
  }

  return squareRoots;

  //forEach

  //Other?
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  /// loop

  const sentencesWithString = [];

  for (let i = 0; i < sentences.length; i++){
    if (sentences[i].toLowerCase().includes(str.toLowerCase())){
      sentencesWithString.push(sentences[i])
    }
  }

  return sentencesWithString;

  //forEach

  //Other?
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  
  // loop
  const longestSides = [];

  for (i = 0; i < triangles.length; i++){

    let longest = 0;

    for (j = 0; j < triangles[i].length; j++){
      if (triangles[i][j] > longest){
        longest = triangles[i][j];
      }
    }

    longestSides.push(longest);
  }

  return longestSides;

  //forEach

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
