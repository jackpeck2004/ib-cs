/*
 * method foo(x)
 *   if (x = 2)
 *     return x
 *   endif
 *   return foo(x/2)
 * end method
 *
 * foo(2.5) = foo(1.25) = infinite recursion
 */

/*
 * method foo(x,y)
 *   if (x = 0) then
 *     return y
 *   end if
 *   return foo(x-1, y) *2
 * end method
 */

function foo(x, y) {
  if (x === 0) {
    return y;
  }
  return foo(x - 1, y) * 2;
}

const result = foo(4, 2);
console.log(result);
