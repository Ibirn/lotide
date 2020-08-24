const assert = require("chai").assert
const middle = require("../middle");

describe("#middle", () => {
  it("returns ['kitten'] when passed  [1, 2, 4, 5, 6, 'kitten', false, 'cheese', 3, true, -9]", () => {
    assert.deepEqual(middle([1, 2, 4, 5, 6, "kitten", false, "cheese", 3, true, -9]), ['kitten'])
  });
  it("returns [3] when passed [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3])
  });
  it("returns an empty array when passed a single digit array", () => {
    assert.deepEqual(middle(['ham']), [])
  });
  it("returns an empty array when passed a two digit array", () => {
    assert.deepEqual(middle([true, false]), [])
  });
  it("passes middle two elements when passed even length array", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3])
    assert.deepEqual(middle(["Jan", "Feb", "Mar", "Apr", "May", "Jun"]), ["Mar", "Apr"])
  });
  
});


// console.log(middle([1,2,3,4,5]));
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

// assertArraysEqual(middle([1,2,"3",4,5,6]),["3",4]);