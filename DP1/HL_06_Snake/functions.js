const Node = require('./node');
const { deleteNodeTail } = require('./utils');
const { snakeChar, boardHeight, boardWidth } = require('./constants');

function moveSnake(currentNode, direction) {
  let newDirection = [...currentNode.data];
  if (direction === 'up') {
    newDirection[0] -= 1;
  } else if (direction === 'down') {
    newDirection[0] += 1;
  } else if (direction === 'right') {
    newDirection[1] += 1;
  } else if (direction === 'left') {
    newDirection[1] -= 1;
  }
  return new Node(newDirection, deleteNodeTail(currentNode));
}

function isSnakeHere(x, y, currentNode) {
  if (currentNode === null) {
    return false;
  } else {
    const [snakeX, snakeY] = currentNode.data;
    if (snakeX === x && snakeY === y) {
      return true;
    } else {
      return isSnakeHere(x, y, currentNode.next);
    }
  }
}

function printBoard(width, height, snake) {
  let result = '';
  for (let i = -1; i <= height; i = i + 1) {
    if (i === -1 || i === height) {
      for (let j = -1; j <= width; j = j + 1) {
        result += '#';
      }
      result += '\n';
    } else {
      for (let j = -1; j <= width; j = j + 1) {
        if (j === -1 || j === width) {
          result += '#';
        } else {
          if (isSnakeHere(i, j, snake)) {
            result += snakeChar;
          } else {
            result += ' ';
          }
        }
      }
      result += '\n';
    }
  }

  console.log(result);
}

function isSnakeDead(snake) {
  let [snakeX, snakeY] = snake.data;
  if (snakeX < 0 || snakeX > boardHeight || snakeY < 0 || snakeY > boardWidth) {
    return true;
  }
  return false;
}

module.exports = {
  moveSnake,
  isSnakeHere,
  printBoard,
  isSnakeDead,
};
