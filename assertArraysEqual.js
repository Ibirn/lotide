const assertEqual = require("./assertEqual");

const assertArraysEqual = (actual, expected) => {
  const eqArrays = (arrayOne, arrayTwo) => {
    if (arrayOne.length !== arrayTwo.length) {
      return false;
    }
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  };
  (eqArrays(actual, expected)) ? console.log("👍 Assertion Passed.") : console.log(`😱 Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertArraysEqual;