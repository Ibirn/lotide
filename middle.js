const middle = array => {
  let middleElements = [];
  if (array.length <= 2) {
    return middleElements;
  } else if (array.length % 2 === 0) {
    let middleIndex = Math.floor(array.length / 2) - 1;
    middleElements = array.slice(middleIndex, (middleIndex + 2));
  } else {
    let middleIndex = Math.floor(array.length / 2);
    middleElements = array.slice(middleIndex, (middleIndex + 1));
  }
  return middleElements;
};

module.exports = middle;