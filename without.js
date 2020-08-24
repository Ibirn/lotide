const without = (source, remove) => {
  let indexArray = [];
  let outputArray = source;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < remove.length; j++) {
      if (remove[j] === source[i]) {
        indexArray.push(i);
      }
    }
  }
  for (let k = indexArray.length - 1; k >= 0; k--) {
    outputArray.splice(indexArray[k], 1);
  }
  return outputArray;
};

module.exports = without;