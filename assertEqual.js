const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log("👍 Assertion Passed.");
  } else {
    console.log(`😱 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;