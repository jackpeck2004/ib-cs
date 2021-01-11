function buildSuffixArray(string) {
  const suffixArray = [];
  for (let i = 0; i < string.length; i = i + 1) {
    // O(n)
    const currentSubstring = string.substring(i, string.length);
    suffixArray.push({
      string: currentSubstring,
      index: i,
    });
  }

  suffixArray.sort((a, b) => (a.string < b.string ? -1 : 1)); // O(n * log n)

  return suffixArray;
}

function buildLcpArray(suffixArray) {
  const lcpArray = [0];
  for (let i = 0; i < suffixArray.length - 1; i = i + 1) {
    const currentSuffixString = suffixArray[i].string;
    const nextSuffixString = suffixArray[i + 1].string;

    let lcp = 0;
    let stop = false;
    for (let j = 0; j < currentSuffixString.length && !stop; j = j + 1) {
      if (currentSuffixString.charAt(j) === nextSuffixString.charAt(j)) {
        lcp = lcp + 1;
      } else {
        stop = true;
      }
    }
    lcpArray.push(lcp);
  }

  return lcpArray;
}

function ashton(string, charAtK) {
  const suffixArray = buildSuffixArray(string);
  const lcpArray = buildLcpArray(suffixArray);

  for (let i = 0; i < suffixArray.length; i = i + 1) {
    suffixArray[i].lcp = lcpArray[i];
  }

  let runningIndex = 0;
  let char;
  let stop = false;
  for (let i = 0; i < suffixArray.length && !char; i = i + 1) {
    const currentSuffix = suffixArray[i];
    for (
      let j = currentSuffix.lcp;
      j < currentSuffix.string.length && !stop;
      j = j + 1
    ) {
      for (let m = 0; m < currentSuffix.lcp && !char; m = m + 1) {
        runningIndex = runningIndex + 1;
        if (runningIndex === charAtK) {
          char = currentSuffix.string[m];
        }
      }
      for (let k = currentSuffix.lcp; k <= j && !char; k = k + 1) {
        runningIndex = runningIndex + 1;
        if (runningIndex === charAtK) {
          char = currentSuffix.string[k];
        }
      }
    }
  }

  return char;

  // Questo invece genera tutta la stringa finale, ma può essere proibitivo in termini di RAM
  const finalStringArray = [];
  for (let i = 0; i < suffixArray.length; i = i + 1) {
    const currentSuffix = suffixArray[i];
    for (
      let j = currentSuffix.lcp;
      j < currentSuffix.string.length;
      j = j + 1
    ) {
      for (let m = 0; m < currentSuffix.lcp; m = m + 1) {
        finalStringArray.push(currentSuffix.string[m]);
      }
      for (let k = currentSuffix.lcp; k <= j; k = k + 1) {
        finalStringArray.push(currentSuffix.string[k]);
      }
    }
  }

  return finalStringArray[charAtK - 1];
}

// const string = 'dbaca';
// const k = 4;
// const result = ashton(string, k);
// console.log(result);

const string = 'szkkcedhlkhjnjofbrnvhntsushncjavkmfn';
const k = 465;
const result = ashton(string, k);
console.log(result);

// nvzjkcahjwlhmdiuobjdwbanmvrtadopapbktdtezellktgywrdstdhhayaadqrdhspavjgxprk
// 2071
// szkkcedhlkhjnjofbrnvhntsushncjavkmfn
// 465
// wcweojncpqwcofrhxnzgbdrd
// 251
// pfpgrnlorzzhdoxzsnemubzvkcbbfb
// 77
// judaioobpoiteiszvzlscmpmpqqwuvtdqzdapudfimaowsnttalwndievaapwusmtyoksrpcfpqbkgvfiibvlkbjkcy
// 2473

// b
// d
// d
// o
// w
