// const Collection = require("./linkedCollection")
const Collection = require("./collection");

const collection = new Collection();

collection.addItemAtEnd(1);
collection.addItemAtEnd(2);
collection.addItemAtEnd(2);

// collection.print()

console.log("size", collection._size);
console.log("capacity", collection._capacity);

// collection.removeItemFromEnd()
// collection.removeItemFromEnd()

// collection.print()

// console.log("size", collection._size)
// console.log("capacity", collection._capacity)

while (collection.hasNext()) {
  const a = collection.next();
  console.log(a);
}
