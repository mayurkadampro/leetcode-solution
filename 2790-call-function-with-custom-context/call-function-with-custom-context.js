/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function (context, ...args) {
    // return this.apply(context, args);
    // return this.bind(context)(...args);

    let func = Symbol(); // create unique key
    context[func] = this;
    return context[func](...args); // call function, add on any key-value pairs in context object

}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */