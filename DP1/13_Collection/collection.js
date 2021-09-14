class Collection {
    constructor() {
        this._cursor = 0;
        this._size = 0;
        this._capacity = 0;
        this._values = null;
    }

    // returns nothing
    hasNext() {
        if (this._cursor < this._size) {
            return true;
        } 

        return false;
    }

    // returns nothing
    next() {
        const value = this._values[this._cursor];
        this._cursor += 1;
        return value;
    }

    // returns nothing
    addItemAtEnd(item) {

        if(this._capacity === 0) {
            // initialize values as array
            this._values = new Array(1)

            // increment the capacity to 1
            this._capacity += 1;
        } else if(this._capacity <= this._size) {
            // double the capacity
            this._capacity *= 2;

            // create new values with new capacity
            const newValues = new Array(this._capacity);

            // copy existing values to the new values array
            for(let i = 0; i < this._size; i += 1) {
                newValues[i] = this._values[i];
            }

            // replace old values with the new array
            this._values = newValues;

        }

        // add the item as the last element of values
        this._values[this._size] = item;
        
        // increment the size at the correct size
        this._size += 1;
    }

    removeItemFromEnd() {
        // set the value removed to null
        this._values[this._size - 1] = null;

        // decrease the size
        this._size -= 1;

        if (this._size === this._capacity / 2) {
            // half the capacity
            this._capacity /= 2;

            // create a new array of the new capacity
            const newValues = new Array(this._capacity);

            // copy values to the new values
            for (let i = 0; i < this._capacity; i += 1) {
                newValues[i] = this._values[i];
            }

            // replace values with newValues
            this._values = newValues;

        }
    }

    print() {
        // this._cursor = 0;
        console.log(this._values)
        // while(this.hasNext()) {
        //     const a = this.next()
        //     console.log(a)
        // }
    }
}

module.exports = Collection