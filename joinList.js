const joinList = array => {
  let output = '';
  for (let i = 0; i < array.length; i++) {
    output += array[i];
    if (i !== (array.length - 1)) {
      output += ', ';
    }
  }
  return output;
};
module.exports = joinList;