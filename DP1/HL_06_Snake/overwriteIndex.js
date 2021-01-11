const Node = require('./node');
const { deleteNodeTail } = require('./utils');
const { readKeystrokeForever } = require('input');
const terminalOverwrite = require('terminal-overwrite');

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

// const snakeChar = '\u2588';
const snakeChar = '@';

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

  // console.log(result);
  return result;
}

function main() {
  let snake = new Node([5, 7], new Node([5, 8], new Node([5, 9], null)));
  printBoard(boardWidth, boardHeight, snake);
  const directions = ['up', 'down', 'left', 'right'];
  readKeystrokeForever((key) => {
    if (directions.includes(key.name)) {
      snake = moveSnake(snake, key.name);
      terminalOverwrite.clear();
      terminalOverwrite(printBoard(10, 10, snake));
    }
  });
}

main();
