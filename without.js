// const without = (source, remove) => {
//   let output = source.filter(number => !remove.includes(number));
//   return output;
// };
// //console.log(without(["cat", "dog", "human" ], [2, "cat", true])); // => [2, 3]
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

//console.log(without([1, true, "haberdashery", -4, "0"],["haberdashery", true]))