const Node = require('./node');

function addNode(currentNode, value, pos) {
  if (currentNode === null) {
    if (pos === 0) {
      return new Node(value, null);
    }
    return null;
  }
  if (pos === 0) {
    return new Node(value, currentNode);
  }
  currentNode.next = addNode(currentNode.next, value, pos - 1);
  return currentNode;
}

function deleteNode(currentNode, pos) {
  if (currentNode === null) {
    return null;
  }
  if (pos === 0) {
    return currentNode.next;
  }
  currentNode.next = deleteNode(currentNode.next, pos - 1);
  return currentNode;
}

const Stack = function () {
  this.data = null;

  this.isEmpty = function () {
    if (this.data) return false;
    return true;
  };

  this.push = function (data) {
    this.data = addNode(this.data, data, 0);
  };

  this.pop = function () {
    let first = this.data.data;
    deleteNode(this.data, 0);
    return first;
  };
};

module.exports = Stack;
