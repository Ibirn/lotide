const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");
const eqObjects = require("../eqObjects");


// const ab = { a: [2], c: "horse", b: "2", d: [true, true, false] };
// const ba = { d: [true, true, false], b: "2", a: [2], c: "horse"};


// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false
// console.log(eqObjects(ab, ba));
// const ab = { a: [2], c: "horse", b: "2", d: [true, true, false] };
// const ba = { d: [true, true, false], b: "2", a: [2], c: "horse"};
const ab = { a: 2, d: [true, {cheese: "stilton", pies: ["apple", "saskatoonberry", "blueberry"]}, [false]], c:{name: "Bill", stats: { str: 18, chr: 12, expertise:{ stealth: true, perception: false}}}};
const ba = { d: [true, {cheese: "stilton", pies: ["apple", "saskatoonberry", "blueberry"]}, [false]], c:{name: "Bill", stats: { str: 18, chr: 12, expertise:{ stealth: true, perception: false}}}, a: 2};
//console.log(eqObjects(ab, ba))
assertEqual(eqObjects(ab, ba), true); // => true