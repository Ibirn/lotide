const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");
//const eqObjects = require("../eqObjects");

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
assertEqual(eqArrays([1, [2, 3], 4, 5, [6, [7, ["ham", "Thusrsday", false]], 9], 10], [1, [2, 3], 4, 5, [6, [7, ["ham", "Thursday", false]], 9], 10]), true); // => should PASS