const tree = 'a';
const d = 10;
const s = -5;
const t = 4;
const a = -10;
const o = 18;
const l = [10, 5];

// if (tree === 'a' && d >= 5 && d <= 14) {
//   console.log('in house from tree a');
// } else if (tree === 'o' && d <= -14 && d >= -23) {
//   console.log('in house from tree o');
// } else if (tree === 'l') {
//   if (Math.sqrt(Math.pow(15, 2) + Math.pow(5, 2)) >= d) {
//     if (Math.sqrt(Math.pow(6, 2) + Math.pow(5, 2)) <= d) {
//       console.log('in house from tree l');
//     }
//   }
// } else {
//   console.log('not in house');
// }

// if (
//   tree === 'a' &&
//   d >= Math.abs(a) - Math.abs(s) &&
//   d <= Math.abs(a) - Math.abs(s) + Math.abs(t)
// ) {
//   console.log('in house from tree a');
// } else if (
//   tree === 'o' &&
//   d <= Math.abs(t) - Math.abs(o) &&
//   d >= Math.abs(t) - Math.abs(o) - (Math.abs(s) + Math.abs(t))
// ) {
//   console.log('in house from tree o');
// } else if (tree === 'l') {
//   if (
//     Math.sqrt(
//       Math.pow(Math.abs(s) + Math.abs(l[0]), 2) + Math.pow(Math.abs(l[1]), 2)
//     ) >= d
//   ) {
//     if (
//       Math.sqrt(
//         Math.pow(Math.abs(l[0] - Math.abs(t), 2) + Math.pow(Math.abs(l[1])), 2)
//       ) <= d
//     ) {
//       console.log('in house from tree l');
//     }
//   }
// } else {
//   console.log('not in house');
// }

// const whichTree = tree === 'a' ? a : tree === 'o' ? b : tree === 'l' ? l : null;

const getTreeCoordinates = (tree) => {
  switch (tree) {
    case 'a':
      return [a, 0];
    case 'o':
      return [o, 0];
    case 'l':
      return l;
    default:
      null;
  }
};

const treeCoordinates = getTreeCoordinates(tree);
// console.log(treeCoordinates);
const fp = [treeCoordinates[0] + d, 0];
const isInRange = () => fp >= s && fp <= t;

if (isInRange) {
  console.log('inside');
} else {
  console.log('outside');
}
