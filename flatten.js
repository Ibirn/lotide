const flatten = input => {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i])) {
      for (let j = 0; j < input[i].length; j++) {
        output.push(input[i][j]);
      }
    } else {
      output.push(input[i]);
    }
  }
  return output;
};

// const eqArrays = (arrayOne, arrayTwo) => {
//   if (arrayOne.length !== arrayTwo.length) {
//     return false;
//   }
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertEqualArrays = (actual, expected) => {
//   const eqArrays = (arrayOne, arrayTwo) => {
//     if (arrayOne.length !== arrayTwo.length) {
//       return false;
//     }
//     for (let i = 0; i < arrayOne.length; i++) {
//       if (arrayOne[i] !== arrayTwo[i]) {
//         return false;
//       }
//     }
//     return true;
//   };
//   (eqArrays(actual, expected)) ? console.log("👍 Assertion Passed.") : console.log(`😱 Assertion Failed: ${actual} !== ${expected}`);
// };

//console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
//console.log(flatten([1, [32], [3], [3, 5, [4]]]));