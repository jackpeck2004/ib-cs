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
  const startRandomIdx = getRandomNumber(min, max);
  let endRandomIdx = getRandomNumber(min, max);


  while(startRandomIdx === endRandomIdx) {
    endRandomIdx = getRandomNumber(min, max);
  }

  const tmp = solution[startRandomIdx];
  solution[startRandomIdx] = solution[endRandomIdx];
  solution[endRandomIdx] = tmp;
}

function truncate(population) {
  population.pop()
}

function pmx(population) {
  const parent1Idx = getRandomNumber(0, population.length - 1);
  let parent2Idx = getRandomNumber(0, population.length - 1);
  
  while (parent1Idx === parent2Idx) {
    parent2Idx = getRandomNumber(0, population.length - 1);
  }
  
  const parent1 = population[parent1Idx];
  const parent2 = population[parent2Idx];

  const child = [0];
  for (let i = 1; i < parent1.length - 1; i += 1) {
    child.push("*");
  }
  child.push(0)

  const firstIdx = getRandomNumber(1, parent1.length - 3);
  const secondIdx = getRandomNumber(firstIdx, parent1.length - 2);

  for (let i = firstIdx; i <= secondIdx; i += 1) {
    child[i] = parent1[i];
  }


  let p2Idx = 1;
  for (let i = 1; i < firstIdx; i += 1) {
    let candidate = parent2[p2Idx];
    while(isCityInSolution(child, candidate)) {
      p2Idx += 1;
      candidate = parent2[p2Idx];
    }
    child[i] = candidate;
    //mapped.push(candidate);
  }

  for (let i = secondIdx + 1; i < child.length - 1; i += 1) {
    let candidate = parent2[p2Idx];
    while(isCityInSolution(child, candidate)) {
      p2Idx += 1;
      candidate = parent2[p2Idx];
    }
    child[i] = candidate;
    //mapped.push(candidate);
  }

  return child;

}

module.exports = {
  calculateFitness,
  generateRandomSolution,
  isCityInSolution,
  getRandomNumber,
  mutate,
  truncate,
  pmx
}


