function highestReducer(acc, item) {
  if (acc > item) {
    return acc;
  }
  return item;
}

function birthdayCakeCandles(candles) {
  const highest = candles.reduce(highestReducer, 0);
  let freq = 0;
  for (let i = 0; i < candles.length; i = i + 1) {
    if (candles[i] === highest) {
      freq = freq + 1;
    }
  }
  return freq;
}

const candles = [3, 2, 1, 3];
console.log(birthdayCakeCandles(candles));
