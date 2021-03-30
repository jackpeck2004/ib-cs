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

const BorisBMI = calcBMI(1.93, 83);

outputCategory(BorisBMI);
