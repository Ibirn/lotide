// const assertEqual = (actual, expected) => {
//   if (actual === expected) {
//     console.log("👍 Assertion Passed.");
//   } else {
//     console.log(`😱 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

const findKeyByValue = (checkObj, searchVal) => {
  let output = '';
  for (let j in checkObj) {
    if (searchVal === checkObj[j]) {
      output += j;
      return output;
    }
  }
  return undefined;
};

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// // takes obj and val, return first key with val, if no val, return undefined
