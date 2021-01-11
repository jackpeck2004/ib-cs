const Node = require('./node');
const { readKeystrokeForever } = require('input');
const { printBoard, moveSnake, isSnakeDead } = require('./functions');
const { boardHeight, boardWidth } = require('./constants');

const directions = ['up', 'down', 'left', 'right'];
let direction;

function main() {
  let snake = new Node([5, 7], new Node([5, 8], new Node([5, 9], null)));

  // printBoard(boardWidth, boardHeight, snake);
  console.log('press any key to continue');

  readKeystrokeForever((key) => {
    const interval = setInterval(() => {
      if (isSnakeDead(snake)) {
        clearInterval(interval);
        console.log('dead');
      } else {
        if (directions.includes(key.name)) {
          direction = key.name;
        }
        snake = moveSnake(snake, direction);
        printBoard(boardWidth, boardHeight, snake);
      }
    }, 250);
  });
}

main();
