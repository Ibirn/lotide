/* This is for the sake of testing and not acutally necessary to get the head of an array.
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log("👍 Assertion Passed.");
  } else {
    console.log(`😱 Assertion Failed: ${actual} !== ${expected}`);
  }
};
*/
const head = array => {
  return array[0];
};
/* These are testing cases.
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
*/

