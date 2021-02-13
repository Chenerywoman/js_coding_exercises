const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  
  return nums.indexOf(n) >= 0 && nums.indexOf(n) < nums.length - 1 ? nums[nums.indexOf(n) + 1] : null;

};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  
  return str.split('').reduce((acc, num) => {

    if (num === '0') acc["0"] += 1
    else if (num === '1') acc["1"] += 1
    return acc;

  }, {0:0, 1:0})
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  
  return Number.parseInt(n.toString().split('').reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");

  return arrs.reduce((acc, arr) => {

    return acc + arr.reduce((acc, num) => {
      return acc + num;
    }, 0)

  }, 0);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  
  if (arr.length < 2) {
    return arr;

  } else if (arr.length === 2) {
    return arr.reverse();

  } else {
    const firstArr = [];
   
    firstArr.push(arr[arr.length -1])
    const secondArr = firstArr.concat(arr.slice(1, arr.length - 1));
    secondArr.push(arr[0]);
    
    return secondArr;
  }

};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  for (const key in haystack ){

    if (typeof haystack[key] === "string" && haystack[key].toLowerCase().includes(searchTerm.toLowerCase())) return true; 

  }

  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  
  const frequencies = {};
  const arr = str.split(" ")

  for (let i = 0; i < arr.length; i++){

    const regex = /(\.|\?|!|:|;|,)/
    let word = arr[i].toLowerCase();
   
    word = word.charAt(word.length - 1).match(regex) ? word.slice(0, word.length - 1) : word;

    if (frequencies[word] === undefined){
      frequencies[word] = 1;
    } else {
      frequencies[word] += 1; 
    }
  
  }
  return frequencies;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
