/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    const ans = {};
    for (let e of this) {
        const key = fn((e))
        // ans[key] ||= [];
        ans[key] =ans[key]||[]  // this can be written as ans[key] ||=[] 
        ans[key].push(e)
    }
    return ans
    // By REDUCE METHOD
    // return this.reduce((acc, item) => {
    //     let key = fn(item);
    //     console.log(key);

    //     if (!acc[key]) {
    //         acc[key] = [];
    //     }

    //     acc[key].push(item);
    //     return acc;
    // }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */