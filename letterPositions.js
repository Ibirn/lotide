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
//   if (arrayOne.length !== arrayTwo.length){
//     return false;
//   }
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]){
//       return false;
//     }
//   }
//   return true;
// };

const letterPositions = input => {
  let output = {}
  for (let key in input) {
    if (!(input[key] === ' ')) {
      if (!output[input[key]]) {
        output[input[key]] = [Number(key)];
      } else {
        output[input[key]].push(Number(key));
      }
    }
  }
  return output;
};

console.log(letterPositions("lighthouse in the house").e) 

// assertEqualArrays(letterPositions("hello").e, [1]);
