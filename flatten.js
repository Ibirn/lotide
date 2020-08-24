const flatten = array => {
  let output = [];
  function deepProtection (array) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        deepProtection(array[i])
      }
      else {
        output.push(array[i])
      }
    }
  }
  deepProtection(array)
  return output;
}

module.exports = flatten;