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

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
