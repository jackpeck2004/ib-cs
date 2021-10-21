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

function generateRandomSolution(cities) {
	const result = [0];

	// shake cities
	for(let i = 0; i < cities.length - 1; i = i + 1) {
		const randomCityIdx = Math.floor(Math.random() * (max - min) + min);
	}
	
	result.push(0)

	return result;
}

const distanceArray = [
	[0, 94, 76, 141, 91],
	[94, 0, 156, 231, 64],
	[76, 156, 0, 80, 167],
	[141, 231, 80, 0, 229],
	[91, 64, 167, 229, 0]
];

const cities = ['X', 'A', 'B', 'C', 'D'];

const solution = [0, 2, 1, 4, 3, 0];
const solution1 = [0, 3, 1, 2, 4, 0];

const solutionFitness = calculateFitness(solution, distanceArray);
const solutionFitness1 = calculateFitness(solution1, distanceArray);

console.log(solutionFitness)
console.log(solutionFitness1)

