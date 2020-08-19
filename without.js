const without = (source, remove) => {
  let output = source.filter(number => !remove.includes(number));
  return output;
};
//console.log(without(["cat", "dog", "human" ], [2, "cat", true])); // => [2, 3]
