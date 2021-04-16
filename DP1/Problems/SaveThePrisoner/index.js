function saveThePrisoner(prisoners, candies, chair) {
  let prisoner = chair;
  for (let i = 0; i < candies - 1; i = i + 1) {
    prisoner++;

    if (prisoner > prisoners) {
      prisoner = 1;
    }
  }

  return prisoner;
}

// ("122129406");
/*
 *
 *x = int(input())
 *
 *for i in range(x):
 *    n,m,s = tuple(int(num) for num in input().split())
 *    m = m % n
 *    s -= 1
 *    s += m
 *    s -= 1
 *    s = s % n
 */

function saveThePrisoner2(prisoners, candies, chair) {
  /*
   *  let tmp = (candies % prisoners) + chair - 2;
   *
   *  tmp = tmp % prisoners;
   *
   *  return tmp;
   */

  let n = prisoners;
  let m = candies;
  let s = chair;

  m = m % n;
  s = -2 + m;
  s = s % n;
  return s + 1;
}

const t = "352926151 380324688 94730870".split(" ");

const a = t[0];
const b = t[1];
const c = t[2];

console.log(saveThePrisoner2(a, b, c));
