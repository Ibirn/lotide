const assertEqual = require("./assertEqual")
//const eqObjects = require("./eqObjects") //This chunk and below commented section is for working in tandem with the eqObjects function but causes errors when not in same JS file. 

const eqArrays = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (Array.isArray(arrOne[i]) && Array.isArray(arrTwo[i])) {
      if (!eqArrays(arrOne[i], arrTwo[i])) {
        return false;
      }
    // } else if (typeof arrOne[i] === 'object' && arrOne[i] !== 'null' && !Array.isArray(arrOne[i])) {
    //   if (!eqObjects(arrOne[i],arrTwo[i])) {
    //     return false;
    //   } 
    } else if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;