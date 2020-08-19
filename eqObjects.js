// const assertEqual = (actual, expected) => {
//   if (actual === expected) {
//     console.log("👍 Assertion Passed.");
//   } else {
//     console.log(`😱 Assertion Failed: ${actual} !== ${expected}`);
//   }
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

const eqObjects = (objOne, objTwo) => {
  if (Object.keys(objOne).length !== Object.keys(objTwo).length) {
    return false;
  }
  for (let i in objOne) {
    if (Array.isArray(objOne[i]) && Array.isArray(objTwo[i])) {
      if (!eqArrays(objOne[i], objTwo[i])) {
        return false;
      }
    } else if (objOne[i] !== objTwo[i]) {
      return false;
    }
  }
  return true;
};

// const ab = { a: [2], c: "horse", b: "2", d: [true, true, false] };
// const ba = { d: [true, true, false], b: "2", a: [2], c: "horse"};
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false
// console.log(eqObjects(ab, ba));