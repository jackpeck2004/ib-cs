function maze(input, x, y) {
  // Base Case
  if (input[x][y] === 3) {
    return true;
  }

  // Recursion
  // Up
  let newX = x - 1;
  let newY = y;
  let result = false;

  if (input[newX][newY] === 1) {
    result = maze(input, newX, newY);
  }

  // Right
  newX = x;
  newX = y + 1;

  if (input[newX][newY] === 1) {
    result = maze(input, newX, newY);
  }

  // Left
  newX = x;
  newY = y - 1;

  if (input[newX][newY] === 1) {
    result = maze(input, newX, newY);
  }

  // Down
  newX = x + 1;
  newY = y;

  if (input[newX][newY] === 1) {
    result = maze(input, newX, newY);
  }

  return result;
}

const input = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 1, 0],
  [0, 1, 1, 0, 1, 0, 1, 0],
  [0, 0, 1, 0, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

const startX = 5;
const startY = 4;

console.log(maze(input, startX, startY));
