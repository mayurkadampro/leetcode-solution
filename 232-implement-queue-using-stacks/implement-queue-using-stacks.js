
var MyQueue = function () {
    this.inputStack = [];
    this.outputStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    while (this.outputStack.length > 0) {
        this.inputStack.push(this.outputStack.pop());
    }
    this.inputStack.push(x);
    while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop());
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    return this.outputStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.outputStack[this.outputStack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.outputStack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */