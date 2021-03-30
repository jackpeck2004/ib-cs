function calcBMI(H, W) {
  const X = H * H;
  const B = W / X;
  return B;
}

function outputCategory(BMI) {
  if (BMI < 18.5) {
    console.log('underweight');
  } else if (BMI < 25) {
    console.log('normal weight');
  } else if (BMI < 30) {
    console.log('overweight');
  } else {
    console.log('obese');
  }
}

const weight = [52, 100, 105, 61, 88];
const height = [1.56, 2.0, 2.03, 1.75, 1.8];
const names = ['Anne', 'Boris', 'Hughes', 'Paul', 'Robby'];
const bmis = [];

let sum = 0;

for (let i = 0; i < weight.length; i++) {
  const bmi = calcBMI(height[i], weight[i]);
  bmis.push(bmi);
  sum += bmi;
}

const avgBMI = sum / weight.length;

for (let i = 0; i < names.length[i]; i++) {
  if (bmi[i] < avgBMI) {
    console.log(names[i]);
  }
}

const BorisBMI = calcBMI(1.93, 83);
outputCategory(BorisBMI);
