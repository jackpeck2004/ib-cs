function swap(from, to, array) {
  let tmp = array[from];
  array[from] = array[to];
  array[to] = tmp;
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j = j + 1) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1, array);
      }
    }
  }
}

const array = [9, 5, 12, 1];
bubbleSort(array);
console.log(array);
