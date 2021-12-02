const { getRandomNumber } = require("./utils");

function isPresent(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) {
      return true;
    }
  }

  return false;
}

function PX(p1, p2) {
  const solution = ["X"]

  const startIdx = getRandomNumber(1, (p1.length - 2)/ 2);
  const endIdx = getRandomNumber(startIdx, p1.length - 2);

  const start = [...p1]
  const center = start.splice(startIdx, endIdx - startIdx) 
  const end = start.splice(endIdx, start.length);
  console.log("p1", p1)
  console.log("p2", p2)
  console.log("start", start)
  console.log("center", center)
  console.log("end",end)

  const mapValues = []

  const mapKeys = start.slice(1, start.length );

  console.log(mapKeys, mapValues)

  solution.push("X")
  return solution;
}

const p = PX(["X", "A", "D", "C", "E", "F", "B", "X"], ["X", "B", "A", "C", "F", "E", "D", "X"])

console.log(p);

module.exports = {
  PX
}

