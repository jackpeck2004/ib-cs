function maxArray(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i = i + 1) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

const arr = [1, 2, 3, 4];

console.log(maxArray(arr));
