const letterPositions = input => {
  let output = {};
  for (let key in input) {
    if (!(input[key] === ' ')) {
      if (!output[input[key]]) {
        output[input[key]] = [Number(key)];
      } else {
        output[input[key]].push(Number(key));
      }
    }
  }
  return output;
};

module.exports = letterPositions;