const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
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
  (eqObjects(actual, expected)) ? console.log(`Nailed it. Turns out ${inspect(actual)} IS ${inspect(expected)}`) : console.log(`Whoa nellie! ${inspect(actual)} IS NOT ${inspect(expected)}!`);
};
// const ab = { a: [2], c: "horse", b: "2", d: [true, true, false] };
// const ba = { d: [true, true, false], b: "2", a: [2], c: "horse"};
// const abc = { a: "1", b: "2", c: "3" };

// assertObjectsEqual(ab, ba)
