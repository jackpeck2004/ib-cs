// The arguments of the function are known as Formal Parameter
// from the keyword function to the opening curly brace this is
// called the signiture

function add(a, b) {
  const result = a + b;
  return result;
}

// When you call/invoke the functions, the arguments become
// the actual parameters
const result = add(5, 4);
console.log(result);
