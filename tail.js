/* This is for the sake of testing and not acutally necessary to get the head of an array.
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log("👍 Assertion Passed.");
  } else {
    console.log(`😱 Assertion Failed: ${actual} !== ${expected}`);
  }
};
*/
const tail = array => {
  let newArray = array.slice(1);
  return newArray;
}

//console.log(tail([]))