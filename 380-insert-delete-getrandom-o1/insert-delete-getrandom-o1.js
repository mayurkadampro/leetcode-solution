
var RandomizedSet = function () {
    this.list = [];
    this.randomSet = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.randomSet.has(val)) return false;

    this.list.push(val);
    this.randomSet.set(val, this.list.length - 1);
    return true;

};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.randomSet.has(val)) return false;

    const index = this.randomSet.get(val);


    this.list[index] = this.list[this.list.length - 1]; // swaping element
    this.list.pop(); // remove last element after swap

    this.randomSet.set(this.list[index], index);
    this.randomSet.delete(val);
    
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    const randomIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex];
};


/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */