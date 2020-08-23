const eqObjects = (objOne, objTwo) => {
  if (Object.keys(objOne).length !== Object.keys(objTwo).length) {
    return false;
  }
  for (const key in objOne) {
    if (typeof objOne[key] === 'object' && objOne[key] !== 'null' && !Array.isArray(objOne[key])) {
      if (!eqObjects(objOne[key], objTwo[key])) {
        return false;
      }
    } else if (Array.isArray(objOne[key]) && Array.isArray(objTwo[key])) {
      if (!eqArrays(objOne[key], objTwo[key])) {
        return false;
      }
    } else if (objOne[key] !== objTwo[key]) {
      return false;
    }
  }
  return true;
};


// const ab = { a: [2], c: "horse", b: "2", d: [true, true, false] };
// const ba = { d: [true, true, false], b: "2", a: [2], c: "horse"};
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false
// console.log(eqObjects(ab, ba));
// const ab = { a: [2], c: "horse", b: "2", d: [true, true, false] };
// const ba = { d: [true, true, false], b: "2", a: [2], c: "horse"};
// const ab = { a: 2, d: [true, {cheese: "stilton", pies: ["apple", "saskatoonberry", "blueberry"]}, [false]], c:{name: "Bill", stats: { str: 18, chr: 12, expertise:{ stealth: true, perception: false}}}};
// const ba = { d: [true, {cheese: "stilton", pies: ["apple", "saskatoonberry", "blueberry"]}, [false]], c:{name: "Bill", stats: { str: 18, chr: 12, expertise:{ stealth: true, perception: false}}}, a: 2};
// assertEqual(eqObjects(ab, ba), true);