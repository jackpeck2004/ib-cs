function ashtonString(s, k) {
  const substr = [];

  for (let i = 0; i < s.length; i = i + 1) {
    for (let j = i; j < s.length; j = j + 1) {
      let lastItem = substr[substr.length - 1];
      let toPush = '';

      if (substr[0]) {
        if (lastItem.charAt(lastItem.length - 1) !== s.charAt(s.length - 1)) {
          toPush = toPush + substr[substr.length - 1];
        }
      }
      toPush = toPush + s[j];
      substr.push(toPush);
    }
  }

  substr.sort();
  return substr.join('').charAt(k - 1);
}

function main() {
  let s = 'dbac';
  let k = 3;
  console.log(ashtonString(s, k));
}

main();
