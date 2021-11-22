const { generateRandomSolution, calculateFitness } = require("./utils");

const distanceArray = [
  [0, 94, 76, 141, 91, 60, 120, 145],
  [94, 0, 156, 231, 64, 93, 108, 68],
  [76, 156, 0, 80, 167, 133, 124, 216],
  [141, 231, 80, 0, 229, 185, 201, 286],
  [91, 64, 167, 229, 0, 49, 163, 65],
  [60, 93, 133, 185, 49, 0, 165, 115],
  [120, 108, 124, 201, 163, 165, 0, 173],
  [145, 68, 216, 286, 65, 115, 173, 0],
];

const cities = ['X', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];

// Initialize population
const populationSize = 5;
const population = [];

for (let i = 0; i < populationSize; i = i + 1) {
  population.push(generateRandomSolution(cities));
}


while(true) {
  // Evaluate
  population.sort((a, b) => calculateFitness(a, distanceArray) > calculateFitness(b, distanceArray) ? 1 : -1);

  // Select
  const best = population.slice(0, Math.floor(populationSize / 2));
  const worst = population.slice(best.length, population.length - 1);

  // Crossover
  // Mutate
}

  /*
let finalSolution = generateRandomSolution(cities);
let finalSolutionFitness = calculateFitness(finalSolution, distanceArray);


while (true) {
  const currentSolution = generateRandomSolution(cities);
  const currentSolutionFitness = calculateFitness(currentSolution, distanceArray);

  if (currentSolutionFitness > finalSolutionFitness) {
    finalSolution = currentSolution;
    console.log(finalSolution);
    finalSolutionFitness = currentSolutionFitness;
  }
}
*/

//console.log(population);
