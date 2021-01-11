function round(grades) {
  const roundedGrades = [];
  for (let i = 0; i < grades.length; i = i + 1) {
    let item = grades[i];
    if (item >= 38) {
      const remainder = item % 5;
      const distance = 5 - remainder;
      if (distance < 3) {
        item = item + distance;
      }
    }
    roundedGrades.push(item);
  }

  return roundedGrades;
}

module.exports = round;
