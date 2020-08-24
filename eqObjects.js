const eqArrays = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (Array.isArray(arrOne[i]) && Array.isArray(arrTwo[i])) {
      if (!eqArrays(arrOne[i], arrTwo[i])) {
        return false;
      }
    } else if (typeof arrOne[i] === 'object' && arrOne[i] !== 'null' && !Array.isArray(arrOne[i])) {
      if (!eqObjects(arrOne[i],arrTwo[i])) {
        return false;
      }
    } else if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = (objOne, objTwo) => {
  if (Object.keys(objOne).length !== Object.keys(objTwo).length) {
    return false;
  }
  for (const key in objOne) {
    if (typeof objOne[key] === 'object' && objOne[key] !== 'null' && !Array.isArray(objOne[key])) {
      if (!eqObjects(objOne[key], objTwo[key])) {
        return false;
      }
    } else if (Array.isArray(objOne[key]) && Array.isArray(objTwo[key])) {
      if (!eqArrays(objOne[key], objTwo[key])) {
        return false;
      }
    } else if (objOne[key] !== objTwo[key]) {
      return false;
    }
  }
  return true;
};




module.exports = eqObjects;