/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let result = 0;
    let count = 0;
    for (let c of s) {
        if (c === "(") {
            count++;
            if (result < count) {
                result = count;
            }
        } else if (c === ")") {
            count--;
        }
    }
    return result;
};