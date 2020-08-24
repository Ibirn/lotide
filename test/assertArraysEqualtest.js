const assertArraysEqual = require("../assertArraysEqual");
const assertEqual = require("../assertEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
assertArraysEqual([1, [2, 3], 4, 5, [6, [7, ["ham", "Thursday", false]], 9], 10], [1, [2, 3], 4, 5, [6, [7, ["ham", "Thursday", false]], 9], 10]); // => should PASS