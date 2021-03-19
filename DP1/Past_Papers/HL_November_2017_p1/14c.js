const mat = [
  [7, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, -3, 0, 9, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, -1, 0, 0, 0],
  [0, -6, 0, 0, -5, 1]
];

const values = new Array(7).fill(0)
const rowc = new Array(6).fill(0)
const col = new Array(7).fill(0)

const dimension = 6;
let valuesCounter = 0;
let valueIndex = 0;

for (let i = 0; i < dimension; i = i + 1) {
  for (let j = 0; j < dimension; j = j + 1) {
    const item = mat[i][j];
    if (item !== 0) {
      values[valueIndex] = item;
      col[valueIndex] = j;
      valueIndex += 1;
      valuesCounter += 1;
    }
  }
  rowc[i] = valuesCounter
}

console.log("values:", values)
console.log("rowc:", rowc)
console.log("col:", col)
