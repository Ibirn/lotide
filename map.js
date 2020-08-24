const map = (array, callback) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
};
module.exports = map;