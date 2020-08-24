const takeUntil = (array, callback) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return output;
    }
    output.push(array[i]);
  }
  return output;
};

module.exports = takeUntil;