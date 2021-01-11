function findInArray(n) {
  function giveArray(array) {
    let result = false;
    for (let i = 0; i < array.length; i = i + 1) {
      if (!result && array[i] === n) {
        result = true;
      }
    }
    return result;
  }

  return giveArray;
}

const findFive = findInArray(5);

const array = [1, 2, 3, 4, 5];
console.log(findFive(array));
