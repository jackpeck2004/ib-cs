const birds = [1, 1, 2, 2, 3];
let i = 0;
const freq = [0, 0, 0];

while (i < birds.length) {
  const bird = birds[i];

  freq[bird - 1] = freq[bird - 1] + 1;

  i = i + 1;
}

let n = 1;
let freqSpecie = freq[0];

while (n < freq.length) {
  if (freq[n] > freqSpecie) {
    freqSpecie = freq[n];
  }

  n = n + 1;
}

console.log(freqSpecie);
console.log(freq);
