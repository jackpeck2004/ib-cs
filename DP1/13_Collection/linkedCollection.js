class Collection {
    constructor() {
        this._next = null;
        this._value = 0;
        this._current = this
    }

    hasNext() {
        if(this._current._next._next) {
            return true;
        } 

        return false;
    }

    // returns current value at cursor and moves the cursor by one forward
    next() {
        const value = this._current._value
        this._current = this._next;

        return value;
    }
}

module.exports = Collection