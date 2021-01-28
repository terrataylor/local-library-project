function sortObjectByValues(obj) {
    const keys = Object.keys(obj);
    return keys.sort((keyA, keyB) => {
      if (obj[keyA] > obj[keyB]) {
        return -1;
      } else if (obj[keyB] > obj[keyA]) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  module.exports={sortObjectByValues}