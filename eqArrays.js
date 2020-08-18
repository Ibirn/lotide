const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log("👍 Assertion Passed.");
  } else {
    console.log(`😱 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length){
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]){
      return false;
    }
  }
  return true;
};

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);