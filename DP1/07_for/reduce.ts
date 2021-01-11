function reduce<T>(
  array: any[],
  reducer: (acc: T, item: T) => T,
  startingAcc: T
): T {
  let acc = startingAcc;
  for (let i = 0; i < array.length; i = i + 1) {
    const item = array[i];
    acc = reducer(acc, item);
  }
  return acc;
}

function sumReducer(acc: number, item: number): number {
  const result = acc + item;
  return result;
}

const array = [1, 2, 3, 4];

const sum = reduce(array, sumReducer, 0);
console.log(sum, 'typescript');
