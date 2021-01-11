function findMinIndexInArray(array,from) {
  let min = from;
  for(let i = from; i < array.length; i = i + 1) {
    if(array[i] < array[min]) {
      min = i;
    }
  }
  return min;
}

function swap(from, to, array) {
  let tmp = array[from];
  array[from] = array[to];
  array[to] = tmp;
}

function selectionSort(array) {
  for(let i = 0; i < array.length; i = i + 1) {
    let minIndex = findMinIndexInArray(array,i);
    swap(i, minIndex, array);
  }
}

const array = [9,5,12,1];
selectionSort(array);
console.log(array);
