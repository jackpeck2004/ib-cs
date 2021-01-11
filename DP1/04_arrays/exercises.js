const array = [1, 5, 55, -23, 76, 11, 3];

// Is Number Present

const numberToCheck = 11;
let i = 0;
let isFound = false;

while (i < array.length) {
  if (array[i] === numberToCheck) {
    isFound = true;
  }

  i++;
}

if (isFound) {
  console.log('found');
} else {
  console.log('not found');
}

// Maximum

i = 1;
let maxNum = array[0];

while (i < array.length) {
  if (array[i] > maxNum) {
    maxNum = array[i];
  }

  i++;
}

console.log(maxNum);

// Max - min

i = 1;
maxNum = array[0];
let minNum = array[0];

while (i < array.length) {
  if (array[i] > maxNum) {
    maxNum = array[i];
  } else if (array[i] < minNum) {
    minNum = array[i];
  }

  i++;
}

console.log(maxNum - minNum);

// Similariy
// In all the exercises there is a while loop
// with an incrementor number to be able to
// loop throughout all the elements of the array.
// Plus some code is repeated therefore can
// be split into a function to be quicker to call
// since instead of writing the whole while loop
// over and over again or rewriting the code
// necessary to get the minimum and maximum values
// from the array, you call a function declared once
// and get the code more concise.
