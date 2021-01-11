const Node = require('./Node');

function searchNode(currentNode, data) {
  if (currentNode === null) {
    return false;
  }
  if (currentNode.data === data) {
    return true;
  }

  return searchNodeRecursive(currentNode.next, data);
}

function searchNodeIterative(node, data) {
  let currentNode = node;
  let found = false;
  while (currentNode !== null) {
    if (currentNode.data === data) {
      found = true;
    }
    currentNode = currentNode.next;
  }

  return found;
}

function deleteNodeTail(currentNode, pos) {
  if (currentNode.next === null) {
    return null;
  }
  currentNode.next = deleteNodeTail(currentNode.next, pos - 1);
  return currentNode;
}

function deleteNode(currentNode, value) {
  if (currentNode === null) {
    return null;
  }
  if (currentNode.data === value) {
    return currentNode.next;
  }
  currentNode.next = deleteNode(currentNode.next, value);
  return currentNode;
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

function getLength(currentNode) {
  if (currentNode === null) {
    return 0;
  }
  return getLength(currentNode.next) + 1;
}

function reverse(currentNode) {
  if (currentNode === null) {
    return null;
  }

  if (currentNode.next === null) {
    return currentNode;
  }
  let inverse = reverse(currentNode.next);
  currentNode.next.next = currentNode;
  currentNode.next = null;
  return inverse;
}

function createSortedLinkedList(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let linkedList = new Node(arr[0], null);
  for (let i = 1; i < arr.length; i = i + 1) {
    linkedList = addNode(linkedList, arr[i], i);
  }
  return linkedList;
}

function addAtEndOfList(currentNode, value) {
  if (currentNode === null) {
    return value;
  }
  currentNode.next = addAtEndOfList(currentNode.next, value);
  return currentNode;
}

function joinLinkedLists(l1, l2) {
  return addAtEndOfList(l1, l2);
}

function orderLinkedList(currentNode) {
  if (currentNode === null || currentNode.next === null) {
    return currentNode;
  }

  if (currentNode === null && currentNode.next !== null) {
    return currentNode.next;
  }

  if (currentNode.data > currentNode.next.data) {
    let tmp = currentNode.data;
    currentNode.data = currentNode.next.data;
    currentNode.next.data = tmp;
  }
  currentNode.next = orderLinkedList(currentNode.next);

  return currentNode;
}

function mergeOrderedLists(currentNode1, currentNode2) {
  if (currentNode1 == null) {
    return currentNode2;
  }
  if (currentNode2 == null) {
    return currentNode1;
  }
  if (currentNode1.data <= currentNode2.data) {
    return new Node(
      currentNode1.data,
      mergeOrderedLists(currentNode1.next, currentNode2)
    );
  }
  if (currentNode1.data > currentNode2.data) {
    return new Node(
      currentNode2.data,
      mergeOrderedLists(currentNode1, currentNode2.next)
    );
  }
}

function addNodeIterative(head, data, pos) {
  let currentNode = head;
  let i = 0;
  while (i < pos - 1) {
    currentNode = currentNode.next;
    i = i + 1;
  }
  currentNode.next = new Node(data, currentNode.next);
  return head;
}

function createPrintString(currentNode) {
  if (currentNode === null) {
    return 'X';
  }

  const str = currentNode.data + ' -> ' + createPrintString(currentNode.next);
  return str;
}

function print(currentNode) {
  console.log(createPrintString(currentNode));
}

function debug(tp) {
  console.log(JSON.stringify(tp, null, 2));
}

function reverse(head) {
  let current = head;
  let prev = null;
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

module.exports = {
  searchNode,
  searchNodeIterative,
  deleteNode,
  deleteNodeTail,
  addNode,
  addNodeIterative,
  getLength,
  reverse,
  createSortedLinkedList,
  joinLinkedLists,
  orderLinkedList,
  mergeOrderedLists,
  print,
  debug,
  reverse,
};
