let arr = [1, 5, 6, 2, 4];

function remove(array, element) {
  const index = array.indexOf(element);
  array.splice(index, 1);
}

function boubbleSort(arr) {
  for (let i = 0; i < arr.length; i = i + 1) {
    for (let j = i; j < arr.length - i; j = j + 1) {
      if (arr[j - 1] > arr[j]) {
        let tmp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
}

function selectionSort(array) {
  for (let i = 0; i < arr.length; i = i + 1) {
    let minIndex = i;
    for (let j = i; j < arr.length; j = j + 1) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    const tmp = array[i];
    array[i] = array[min];
  }
}

sort(arr);
console.log(arr);
