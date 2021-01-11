const array = [1, 2, 3];
let sum = 0;
let counter = 0;
let avg = 0;

while (counter < array.length) {
  sum += array[counter];
  counter++;
}

avg = sum / array.length;

console.log(sum, avg);
