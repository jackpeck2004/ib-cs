const Node = require('./node');

function getLength(currentNode) {
  if (currentNode === null) {
    return 0;
  }
  return getLength(currentNode.next) + 1;
}

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

function getValueAtPos(currentNode, pos) {
  if (pos == 0) {
    return currentNode;
  }
  return getValueAtPos(currentNode.next, pos - 1);
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

const Queue = function () {
  this.data = null;

  this.isEmpty = function () {
    if (this.data) return false;
    return true;
  };

  this.length = getLength(this.data) - 1;

  // add at beginning
  this.enqueue = function (data) {
    this.data = addNode(this.data, data, 0);
  };

  // remove at end
  this.denqueue = function () {
    let last = getValueAtPos(this.data, this.length);
    deleteNode(this.data, this.length);
    return last;
  };
};

module.exports = Queue;
