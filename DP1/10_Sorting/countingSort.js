let arr = [1, 10, 4, 2, 0, 10];

function countingSort(arr) {
  let min = 0;
  let max = 0;

  // find min and max
  for (let i = 0; i < arr.length; i = i + 1) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  // initialize the empty frequency array
  let frequencies = new Array(max - min + 1).fill(0);

  // add the frequencies
  for (let i = 0; i < arr.length; i = i + 1) {
    frequencies[arr[i]] += 1;
  }

  console.log(frequencies);

  // create the final array
  let final = [];

  for (let i = 0; i < frequencies.length; i = i + 1) {
    for (let j = 0; j < frequencies[i]; j = j + 1) {
      final.push(i);
    }
  }

  return final;
}

console.log(countingSort(arr));
