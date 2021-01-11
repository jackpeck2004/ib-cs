function rotate(a) {
  // setup encryption
  let ra = [];
  for (let i = 0; i < a[0].length; i = i + 1) {
    ra.push([]);
  }

  // rotate the matrix clockwise
  for (let j = 0; j < a[0].length; j = j + 1) {
    for (let i = 0; i < a.length; i = i + 1) {
      ra[j].push(a[i][j]);
    }
  }
  return ra;
}

const a = [
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 5],
];

console.log(a);
console.log(rotate(a));
