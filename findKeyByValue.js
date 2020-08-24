const findKeyByValue = (checkObj, searchVal) => {
  let output = '';
  for (let j in checkObj) {
    if (searchVal === checkObj[j]) {
      output += j;
      return output;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;