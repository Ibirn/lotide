const countLetters = input => {
  let output = {};
  for (let key in input) {
    if (!(input[key] === ' ')) {
      if (!output[input[key]]) {
        output[input[key]] = 1;
      } else {
        output[input[key]] += 1;
      }
    }
  }
  return output;
};

module.exports = countLetters;