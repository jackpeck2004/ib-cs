function create2DArray(n) {
  const arr = [];
  for (let i = 0; i < n; i = i + 1) {
    arr.push([]);
    for (let j = 0; j < n; j = j + 1) {
      arr[i].push(0);
    }
  }

  return arr;
}

const n = 3;
const a = create2DArray(n);

function print(a) {
  for (let i = 0; i < a.length; i++) {
    let str = "";

    for (let j = 0; j < a.length; j++) {
      str += `${a[i][j]}\t`;
    }
    console.log(str);
  }
}

let startCol = 0;
let endCol = n - 1;
let startRow = 0;
let endRow = n - 1;
let counter = 1;

while (startRow <= endRow && startCol <= endRow) {
  for (let i = startCol; i <= endCol; i = i + 1) {
    a[startRow][i] = counter;
    counter = counter + 1;
  }
  startRow = startRow + 1;

  for (let j = startRow; j <= endRow; j = j + 1) {
    a[j][endCol] = counter;
    counter = counter + 1;
  }
  endCol = endCol - 1;

  for (let i = endCol; i >= startCol; i = i - 1) {
    a[endRow][i] = counter;
    counter = counter + 1;
  }
  endRow = endRow - 1;

  for (let j = endRow; j >= startRow; j = j - 1) {
    a[j][startCol] = counter;
    counter = counter + 1;
  }
  startCol = startCol + 1;
}

print(a);
