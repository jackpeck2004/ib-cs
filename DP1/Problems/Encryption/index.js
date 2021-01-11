function encryption(s) {
  const l = s.length;
  let tmp = [];
  let rows = Math.floor(Math.sqrt(l));
  let cols = Math.ceil(Math.sqrt(l));
  if (rows * cols < l) {
    rows = cols;
  }

  // set up array
  for (let i = 0; i < rows; i = i + 1) {
    tmp.push([]);
  }

  // construct matrix with all values
  let n = 0;
  for (let i = 1; i <= s.length; i = i + 1) {
    tmp[n].push(s.charAt(i - 1));
    if (i !== 0 && i % cols === 0) {
      n = n + 1;
    }
  }

  // setup encryption
  let encryption = [];
  for (let i = 0; i < cols; i = i + 1) {
    encryption.push([]);
  }

  // rotate the matrix clockwise
  for (let j = 0; j < cols; j = j + 1) {
    for (let i = 0; i < rows; i = i + 1) {
      encryption[j].push(tmp[i][j]);
    }
    encryption[j] = encryption[j].join('');
  }

  return encryption.join(' ');
}

function encryptionTom(s) {
  const string = s.split('');
  let encriptedString = [];
  l = s.length;
  grid = Math.sqrt(l);
  c = Math.ceil(grid);
  r = Math.floor(grid);
  let count = 0;
  for (i = 0; i < c; i = i + 1) {
    for (j = count; j / c < r; j = j + c) {
      encriptedString.push(string[j]);
    }
    encriptedString.push(' ');
    count = count + 1;
  }
  console.log(encriptedString);
  return encriptedString.join('');
}

const s = 'chillout';
console.log(encryption(s));
