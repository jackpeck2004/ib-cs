const { reverse, print, createSortedLinkedList } = require('./utils');

function main() {
  const head = createSortedLinkedList([1, 4, 6]);
  print(head);
  const rev = reverse(head);
  print(rev);
}

main();
