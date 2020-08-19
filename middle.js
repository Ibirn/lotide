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
const middle = array => {
  let middleElements = [];
  if (array.length <= 2) {
    return middleElements;
  } else if (array.length % 2 === 0) {
    let middleIndex = Math.floor(array.length / 2) - 1;
    middleElements = array.slice(middleIndex, (middleIndex + 2));
  } else {
    let middleIndex = Math.floor(array.length / 2);
    middleElements = array.slice(middleIndex, (middleIndex + 1));
  }
  return middleElements;
};

// console.log(middle([1, 2, 4, 5, 6, "kitten", false, "cheese", 3, -9]))
// console.log(middle([1,2,3,4,5]))
// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

// assertEqualArrays(middle([1,2,"3",4,5,6]),["3",4])