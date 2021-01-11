const array = [3, 7, 8, 0];
let i = 1;
let minNum = array[0];

while (i < array.length) {
  if (array[i] < minNum) {
    minNum = array[i];
  }

  i++;
}

console.log(minNum);
