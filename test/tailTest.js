const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns empty array for ['5']", ()=>{
    assert.deepEqual(tail(['5']), []);
  });
  it("returns ['Lighthouse', Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", ()=>{
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("does not modify original array when returning value", ()=>{
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words).length, 2);
    assert.strictEqual(words.length, 3);
  });

});


// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
