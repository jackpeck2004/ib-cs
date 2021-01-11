// let variable = 55;
// const constants = 5.5;

// const stringOne = 'Hello';
// const stringTwo = ' World';

// const stringResult = stringOne + stringTwo;
// console.log(stringResult);

// const a = true;
// const b = 12.1;

// console.log(a + b);

// absolute value
// const abs = (a) => (a < 0 ? a * -1 : a);
// console.log(abs(-10));
// let a = 52;
// if (a<0) {
//     a*=-1
// }
// console.log(a)

// bigger or smaller than 0
// const a = '4';

// if (a > 0) {
//   console.log('> 0');
// } else if (a < 0) {
//   console.log('< 0');
// } else {
//   console.log('0');
// }

// console.log(a > 0 ? '> 0' : a < 0 ? '< 0' : '0');

// admit to exam
// const m = 70;
// const p = 65;
// const c = 87;

// if ((m >= 65 && p >= 55 && c >= 50 && m + p + c >= 180) || m + p > 140) {
//   console.log('Enter');
// } else {
//   console.log('Eh, volevi');
// }

// anno bisestile
// const year = 2000;

// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//   console.log('bisestile');
// } else {
//   console.log('non bisestile');
// }

// quadrant

const x = 5;
const y = 5;

// if (x >= 0) {
//   if (y >= 0) {
//     console.log('1');
//   } else {
//     console.log('3');
//   }
// } else {
//   if (y >= 0) {
//     console.log('2');
//   } else {
//     console.log('4');
//   }
// }

console.log(x * y >= 0 ? (x >= 0 ? '1' : '3') : x < 0 ? '4' : '2');
