class Collection {
    constructor() {
        this._cursor = 0;
        this._size = 6;
        this._values = [1, 2, 3, 4, 5, 6];
    }

    // bool
    hasNext() {
        if (this._cursor < this._size) {
            return true;
        } 

        return false;
    }

    // value
    next() {
        const value = this._values[this._cursor];
        this._cursor += 1;
        return value;
    }
}

module.exports = Collection