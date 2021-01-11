const s = -5;
const t = 8;
const l = {
  x: 17,
  y: 20,
};
const d = 25;

function getLemonMath(lemon, houseS, houseT, distance) {
  if (distance < 0) {
    return false; // negative distance means the fruit falls to the other side
  }
  //circonference equation from center and radius
  //(x - x0)^2 + (y - y0)^2 = r^2
  
  //straight line of house y = 0

  //resolve the system of equation to find intersecation points
  const a = 1;
  const b = 2 * (0 - lemon.x);
  const c = Math.pow(lemon.x, 2) + Math.pow(lemon.y, 2) - Math.pow(distance, 2);
  const delta = Math.pow(b, 2) - 4 * a * c;
  let equationResult = false;
  if (delta >= 0) {
    const x1 = ((0 - b) - Math.sqrt(delta)) / (2 * a);
    const x2 = ((0 - b) + Math.sqrt(delta)) / (2 * a);
    equationResult = [x1, x2];
  }
  let result = false;
  if (equationResult) {
    console.log(equationResult);
   // we have the x of the intersection, check if at lest one is inside 
    if (equationResult[0] >= houseS && equationResult[0] <= houseT) {
      console.log('fall in point', equationResult[0]);
      result = true;
    }
    if (equationResult[1] >= houseS && equationResult[1] <= houseT) {
      console.log('fall in point', equationResult[1]);
      result = true;
    }
  }
  return result;
}

function getLemonIterativeAngles(lemon, houseS, houseT, distance) {
  if (distance < 0) {
    return false; // negative distance means the fruit falls to the other side
  }

  let inside = false;
  let degrees = -90;
  const angleStep = 0.5;
  while (!inside && degrees >= -90 && degrees <= 90) {
    let x;
    if (degrees === -90 || degrees === 90) {
      // vertical line
      x = lemon.x
    }
    else {
      const q = lemon.y;
      const m = Math.tan(degrees * Math.PI / 180);
      // straight line equation from lemon tree
      // y = mx + q
      
      // straight line of house y = 0

      // resolve the system of equation to find intersecation points
      x = -q / m;
    }
    if (x >= houseS && x <= houseT) {
      //distance between two points Math.sqtr((x2 - x1)^2 + (y2 - y1)^2)
      const lineLength = Math.sqrt(Math.pow(lemon.x - x, 2) + Math.pow(lemon.y, 2));
      if (lineLength === distance) {
        inside = true;
        console.log(`inside with ${degrees} degrees`);
      }
    }
    degrees += angleStep;
  }
  return inside;
}

function getLemonIterativePoints(lemon, houseS, houseT, distance) {
  const stepX = 1;
  let x = houseS;
  let inside = false;

  while(!inside && x <= houseT) {
    const xLength = Math.abs(x - lemon.x);
    const yLength = Math.abs(0 - lemon.y);
    const hLength = Math.sqrt(Math.pow(xLength, 2) + Math.pow(yLength, 2));
    if (hLength === distance) {
      console.log('fall in point', x);
      inside = true;
    }
    x += stepX;
  }
  return inside;
}

function getLemonValidDistancesAndAngles(lemon, houseS, houseT) {
  const result = [];
  const step = 1;
  for (let x = s; x <= t; x += step) {
    const distance = Math.sqrt((
      Math.pow(x - lemon.x, 2) +
      Math.pow(0 - lemon.y, 2)
    ));
    if (x == lemon.x) {
      // vertical line
      result.push({
        distance,
        angle: 90,
      });
    }
    else {
      // m for straight line from two points
      const x2MinusX1 = x - lemon.x;
      const y2MinusY1 = 0 - lemon.y;
      const m = y2MinusY1 / x2MinusX1;
      const radians = Math.atan(m);
      const degrees = radians * (180 / Math.PI);
      result.push({
        distance,
        angle: degrees,
      });
    }
  }
  return result;
}

console.log(getLemonValidDistancesAndAngles(l, s, t));
console.log('getLemonMath');
console.log(getLemonMath(l, s, t, d));
console.log('getLemonIterativeAngles');
console.log(getLemonIterativeAngles(l, s, t, d));
console.log('getLemonIterativePoints');
console.log(getLemonIterativePoints(l, s, t, d));
