const countOnly = (allItems, itemstoCount) => {
  const results = {};
  for (let key of allItems) {
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
module.exports = countOnly;