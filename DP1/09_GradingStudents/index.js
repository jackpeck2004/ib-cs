const round = require('./utils');
const input = require('input');

async function main() {
  const grades = await input.readIntegerArray('Insert Grades');
  const roundedGrades = round(grades);

  console.log(grades);
  console.log(roundedGrades);
}

main();
