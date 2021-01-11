function breakingRecords(scores) {
  let maxScore = scores[0];
  let minScore = scores[0];
  let maxRecord = 0;
  let minRecord = 0;
  for (let i = 0; i < scores.length; i = i + 1) {
    const item = scores[i];
    if (item > maxScore) {
      maxScore = item;
      maxRecord = maxRecord + 1;
    } else if (item < minScore) {
      minScore = item;
      minRecord = minRecord + 1;
    }
  }

  return [maxRecord, minRecord];
}

function main() {
  const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
  console.log(breakingRecords(scores).join(' '));
}

main();
