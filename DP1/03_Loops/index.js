// Input
const tSpeed = 5;
const aSpeed = 3;
let tPos = 0;
let aPos = 9;
let seconds = 0;

// Process
while (tPos !== aPos && tPos < aPos) {
  tPos += tSpeed;
  aPos += aSpeed;
  seconds += 1;
}

// Output
console.log(
  tPos === aPos
    ? `Same position at ${seconds} seconds.`
    : `tPos ${tPos} has surpassed aPos ${aPos} at ${seconds} seconds`
);
