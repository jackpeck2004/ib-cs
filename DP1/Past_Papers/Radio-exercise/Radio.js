let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i = i + 1) {
  if (arr[i] > max) {
    max = arr[i];
  } else if (arr[i] < min) {
    min = arr[i];
  }
}

console.log(max - min);
