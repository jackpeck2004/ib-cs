/*
 * What we know about JavaScript:
 * let
 * const
 * data types (number, string, array)
 * if statement
 * while loop
 * for loop
 * function
 *
 * object [associative array]
 */

const array = [1, 2, 3];
const identityOne = {
  name: 'Giacomo',
  surname: 'Pasin',
  grades: [7, 7, 6, 4],
  address: {
    country: 'Italy',
    street: 'Via xxxx 21',
  },
  sayHello: function () {
    console.log('Hello', this.name);
  },
};

console.log(array[1]);
console.log(identityOne.name);
console.log(identityOne.surname);
console.log(identityOne.address.country);

identityOne.sayHello();
