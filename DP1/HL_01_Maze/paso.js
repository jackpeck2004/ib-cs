function canMoveToNextCell(result, input, x, y) {
  if (!result && input[x][y] >= 1) {
    return true;
  }

  return false;
}

function maze(input, x, y, prevX, prevY) {
  // Base Case
  if (input[x][y] === 3) {
    console.log('-----------Win-----------');
    return true;
  }

  const sumOfNeighbors =
    input[x - 1][y] + input[x + 1][y] + input[x][y + 1] + input[x][y - 1];

  if (sumOfNeighbors === 1 && input[prevX][prevY] === 1) {
    console.log('Stuck', x, y);
    return false;
  }

  // Recursion
  // Up
  let newX = x - 1;
  let newY = y;
  let result = false;

  if (
    canMoveToNextCell(result, input, newX, newY) &&
    (newX !== prevX || newY !== prevY)
  ) {
    console.log('Up', newX, newY);
    result = maze(input, newX, newY, x, y);
  }

  // Right
  newX = x;
  newY = y + 1;

  if (
    canMoveToNextCell(result, input, newX, newY) &&
    (newX !== prevX || newY !== prevY)
  ) {
    // console.log(x, y + 1);
    // console.log(newX, newY);
    console.log('Right', newX, newY, x, y);
    result = maze(input, newX, newY, x, y);
  }

  // Left
  newX = x;
  newY = y - 1;

  if (
    canMoveToNextCell(result, input, newX, newY) &&
    (newX !== prevX || newY !== prevY)
  ) {
    console.log('Left', newX, newY);
    result = maze(input, newX, newY, x, y);
  }

  // Down
  newX = x + 1;
  newY = y;

  if (
    canMoveToNextCell(result, input, newX, newY) &&
    (newX !== prevX || newY !== prevY)
  ) {
    console.log('Down', newX, newY);
    result = maze(input, newX, newY, x, y);
  }

  return result;
}

// const input = [
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 3, 1, 0],
//   [0, 1, 1, 0, 1, 0, 1, 0],
//   [0, 0, 1, 0, 1, 1, 1, 0],
//   [0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 2, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
// ];

const input = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 1, 1, 0],
  [0, 1, 1, 1, 2, 0, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

const startX = 5;
const startY = 4;

maze(input, startX, startY, 0, 0);
