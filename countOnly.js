// const assertEqual = (actual, expected) => {
//   if (actual === expected) {
//     console.log("👍 Assertion Passed.");
//   } else {
//     console.log(`😱 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
//returns an object containing the counts(values) of things passed in the array. so [a,a] + {a:true} => {a:2}
const countOnly = (allItems, itemstoCount) => {
  const results = {};
  for (let key of allItems) {
    console.log(key);
    if (itemstoCount[key]) {
      if (!results[key]) {
        results[key] = 1;
      } else {
        results[key] += 1;
      }
    }
  }
  return results;
};

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
