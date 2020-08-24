const findKey = (checkObj, callback) => {
  for (const key in checkObj) {
    if (callback(checkObj[key])) {
      return key;
    }
  }
  return "No matches.";
};
module.exports = findKey;