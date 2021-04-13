function intDivision(n, d) {
  return (n - (n % d)) / d;
}

function isInArray(n, arr) {
  for (let i = 0; i < arr.length; i = i + 1) {
    if (n === arr[i]) {
      return true;
    }
  }
  return false;
}

function socks(array) {
  const uniqueColors = [];
  let allPairs = 0;
  for (let i = 0; i < array.length; i = i + 1) {
    const currentColor = array[i];
    if (!isInArray(currentColor, uniqueColors)) {
      uniqueColors.push(currentColor);
    }
  }
  for (let i = 0; i < uniqueColors.length; i = i + 1) {
    const currentColor = uniqueColors[i];
    let currentColorFrequency = 0;
    for (let j = 0; j < array.length; j = j + 1) {
      if (array[j] === currentColor) {
        currentColorFrequency = currentColorFrequency + 1;
      }
    }

    const realPairs = intDivision(currentColorFrequency, 2);
    allPairs = allPairs + realPairs;
  }
  return allPairs;
}

const s = [1, 2, 1, 2, 1, 3, 2];
console.log(socks(s));
