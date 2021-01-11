function highestReducer(acc, item) {
  if (acc > item) {
    return acc;
  }
  return item;
}

function hurdleRace(k, heights) {
  const highest = heights.reduce(highestReducer, 0);
  const diff = highest - k;

  if (diff < 0) {
    return 0;
  }

  return diff;
}

// how high the player can run
const k = 4;
const heights = [1, 6, 3, 5, 2];
console.log(hurdleRace(k, heights));
