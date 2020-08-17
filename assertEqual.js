const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log("👍 Assertion Passed.");
  } else {
    console.log("😱 Assertion Failed: " + actual + " !== " + expected);
  }
};
assertEqual("Butts", "Butts");
assertEqual("Butts", "butts");
assertEqual(69, 69);
assertEqual(69, 420);