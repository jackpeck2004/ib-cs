const Node = require("./node.js");

function printPreOrder(currentNode) {
  if (currentNode === null) {
    return;
  }

  console.log(currentNode.key);
  printPreOrder(currentNode.left);
  printPreOrder(currentNode.right);
}

function printInOrder(currentNode) {
  if (currentNode === null) {
    return;
  }

  printInOrder(currentNode.left);
  console.log(currentNode.key);
  printInOrder(currentNode.right);
}

function printPostOrder(currentNode) {
  if (currentNode === null) {
    return;
  }

  printPostOrder(currentNode.left);
  printPostOrder(currentNode.right);
  console.log(currentNode.key);
}

const _11 = new Node(11, null, null);
const _15 = new Node(15, null, null);
const _21 = new Node(21, null, null);
const _3 = new Node(3, _11, _15);
const _14 = new Node(14, null, _21);
const _1 = new Node(1, _3, null);

const root = new Node(7, _14, _1);

console.log("\npreOrder:");
printPreOrder(root);

console.log("\ninOrder:");
printInOrder(root);

console.log("\npostOrder:");
printPostOrder(root);
