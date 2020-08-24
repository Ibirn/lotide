const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

console.log(middle([1, 2, 4, 5, 6, "kitten", false, "cheese", 3, -9]))
console.log(middle([1,2,3,4,5]))
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

assertArraysEqual(middle([1,2,"3",4,5,6]),["3",4])