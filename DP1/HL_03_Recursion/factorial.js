/* PSEUDO-CODE:
 * method factorial(x)
 *   if(x=1) then
 *     return 1;
 *   end if
 *   return factorial(x-1)*x;
 * end method
 */

function factorial(x) {
  if (x === 1) {
    return 1;
  }
  return factorial(x - 1) * x;
}

const result = factorial(5);
console.log(result);
