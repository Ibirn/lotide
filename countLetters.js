const countLetters = input => {
  let output = {};
  input = input.split(' ').join('');
  for (let key in input) {
    if (!output[input[key]]) {
      output[input[key]] = 1;
    } else {
      output[input[key]] += 1;
    }
  }
  console.log(output);
  return output;
};