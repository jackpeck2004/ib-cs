function reduce(array, operationFunction, startingAccumulator) {
  let accumulator = startingAccumulator;
  let i = 0;
  while (i < array.length) {
    const item = array[i];
    accumulator = operationFunction(accumulator, item);
    i = i + 1;
  }

  return accumulator;
}

function isFound(acc, item) {
  let found = acc !== null;
  if (acc || item === n) {
    return true;
  } else {
    return false;
  }
}

function findMax(acc, item) {
  if (item > acc) {
    return item;
  } else {
    return acc;
  }
}

const a = [1, 5, 55, -23, 76, 11, 3];

const found = reduce(a, isFound, false);
const max = reduce(a, findMax, a[0]);

console.log(found, max);
