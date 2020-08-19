//returns an object containing the counts(values) of things passed in the array. so [a,a] + {a:true} => {a:2}
const countOnly = (allItems, itemstoCount) => {
  const results = {};
  for (let key of allItems) {
    console.log(key)
    if (itemstoCount[key]) {
      if (!results[key]) {
        results[key] = 1;
      } else {
        results[key] += 1;
      }
    }
  }
  return results;
}