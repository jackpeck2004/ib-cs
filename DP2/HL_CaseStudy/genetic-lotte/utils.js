function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function calculateFitness(solution, distances) {
  // [0, 2, 1, 4, 3, 0] 
  let sum = 0;
  for(let i = 0; i < solution.length - 1; i = i + 1) {
    const rowIdx = solution[i];
    const colIdx = solution[i + 1];

    const currentDistance = distances[rowIdx][colIdx];

    sum = sum + currentDistance;
  }

  return 1/sum
}

// Sequential Search to see if solution already contains the current city index
function isCityInSolution(solution, currentIdx) {
  let found = false;

  for (let i = 0; i < solution.length; i = i + 1) {
    if (solution[i] === currentIdx) {
      found = true;
    }
  }

  return found;
}

function generateRandomSolution(cities) {
  const result = [0]; // Solution starts with X
  const min = 1;
  const max = cities.length - 1;

  // shake cities
  while (result.length !== cities.length) {
    // generate random city idx
    const randomCityIdx = Math.floor(Math.random() * (max - min + 1) + min);

    // check if city already in solution
    if (!isCityInSolution(result, randomCityIdx)) {
      result.push(randomCityIdx);
    }

  }

  // Solution ends with X
  result.push(0)

  return result;
}

function mutate(solution) {
  const min = 1;
  const max = solution.length - 2;
  const startRandomIdx = getRandonNumber(min, max);
  let endRandomIdx = getRandonNumber(min, max);


  while(startRandomIdx === endRandomIdx) {
    endRandomIdx = getRandonNumber(min, max);
  }

  const tmp = solution[endRandomIdx];
  solution[startRandomIdx] = solution[endRandomIdx];
  solution[endRandomIdx] = tmp;
}

module.exports = {
  calculateFitness,
  generateRandomSolution,
  isCityInSolution,
  getRandomNumber,
  mutate
}


