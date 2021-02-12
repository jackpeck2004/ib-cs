const ALPHABET_STRING = "abcdefghijklmnopqrstuvwxyz";
const ALPHABET = ALPHABET_STRING.split("");

// return the shifted alphabet
function createShiftedAlphabet(key, alphabet) {
  const shiftedAlphabet = new Array(ALPHABET.length);

  for (let i = 0; i < shiftedAlphabet.length; i = i + 1) {
    let shiftedKey = i + key;
    if (shiftedKey + 1 > alphabet.length) {
      shiftedKey = shiftedKey - alphabet.length;
    }

    shiftedAlphabet[i] = alphabet[shiftedKey];
  }

  return shiftedAlphabet;
}

function encrypt(message, alphabet, shiftedAlphabet) {
  const msgArr = message.split("");

  for (let i = 0; i < msgArr.length; i = i + 1) {
    msgArr[i] = shiftedAlphabet[alphabet.indexOf(msgArr[i])];
  }

  return msgArr.join("");
}

function decrypt(message, alphabet, shiftedAlphabet) {
  const msgArr = message.split("");

  for (let i = 0; i < msgArr.length; i = i + 1) {
    msgArr[i] = alphabet[shiftedAlphabet.indexOf(msgArr[i])];
  }

  return msgArr.join("");
}

const shiftedAlphabet = createShiftedAlphabet(2, ALPHABET);

const e = encrypt("hello from giacomo pasin", ALPHABET, shiftedAlphabet);
console.log(e);
console.log(decrypt(e, ALPHABET, shiftedAlphabet));
