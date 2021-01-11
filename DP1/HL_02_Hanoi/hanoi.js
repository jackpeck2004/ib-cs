function move(from, to) {
  console.log('Move', from, 'to', to);
}

let i = 0;
function hanoi(n, start, finish, aux) {
  i = i + 1;
  if (n === 1) {
    move(start, finish);
  } else {
    hanoi(n - 1, start, aux, finish);
    move(start, finish);
    hanoi(n - 1, aux, finish, start);
  }
}

hanoi(8, 'A', 'C', 'B');
console.log(i);
