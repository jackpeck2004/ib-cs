const Node = require('./node');

// function to create
function removeDuplicates(head) {
  let currentNode = head;
  if (currentNode === null) {
    return null;
  }

  while (currentNode.next !== null) {
    if (currentNode.data == currentNode.next.data) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }

  return head;
}

// utils
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

// main
function main() {
  // create linked list with duplicates
  const head = new Node(
    1,
    new Node(
      2,
      new Node(
        2,
        new Node(
          2,
          new Node(3, new Node(4, new Node(4, new Node(5, new Node(5, null)))))
        )
      )
    )
  );

  console.log('Linked List before removeDuplicate()');
  print(head);
  console.log('Linked List after removeDuplicate()');
  print(removeDuplicates(head));
}

main();
