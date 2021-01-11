/*
 *function hackerlandRadioTransmitters(x, k) {
 *  x.sort((a, b) => a - b);
 *  console.log(x);
 *  let repeaters = 0;
 *  for (let i = 1; i < x.length; i = i + 1) {
 *    const current = x[i];
 *    repeaters += 1;
 *    const maxRange = x[i] + k;
 *    //const minRange = x[i] - k;
 *    console.log('current', current);
 *    for (let j = i + 1; j < x.length; j = j + 1) {
 *      if (x[j] <= maxRange) {
 *        console.log('subcurrent', x[j], 'is in range');
 *        i = j + 1;
 *      }
 *    }
 *  }
 *  return repeaters;
 *}
 */

function hackerlandRadioTransmitters(x, k) {
  x.sort((a, b) => a - b);
  console.log(x);
  let repeaters = 1;

  for (let i = 0; i < x.length; i += 1) {
    const pos = x[i];
    let maxRange = x[i] + k;
    console.log('pos', pos);

    for (let j = i + 1; j < x.length; j += 1) {
      if (x[j] <= maxRange) {
        let maxRange = x[j] + k;
        console.log('\t' + x[j], 'in range of', x[i]);

        for (let n = j + 1; n < x.length; n += 1) {
          if (x[n] <= maxRange) {
            console.log('\t\t' + x[n], 'in range of', x[j]);
          } else {
            console.log('\t\tnext pos', x[n]);
            repeaters += 1;
            i = n - 1;
            break;
          }
        }
      }
    }
  }
  console.log(repeaters);
  return repeaters;
}

function test(x, k, expected) {
  return hackerlandRadioTransmitters(x, k) === expected;
}

//console.log(test([1, 2, 3, 4, 5], 1, 2));
console.log(test([7, 2, 4, 6, 5, 9, 12, 11], 2, 3));
