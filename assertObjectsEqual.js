const eqObjects = require("./eqObjects");

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  (eqObjects(actual, expected)) ? console.log(`Nailed it. Turns out ${inspect(actual)} IS ${inspect(expected)}`) : console.log(`Whoa nellie! ${inspect(actual)} IS NOT ${inspect(expected)}!`);
};

module.exports = assertObjectsEqual;