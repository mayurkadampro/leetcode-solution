/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    let result = [];
    for (let c of s) {
        if (result.length && Math.abs(c.charCodeAt() - result[result.length - 1].charCodeAt()) === 32) {
            result.pop();
        } else {
            result.push(c);
        }
    }
    return result.join('');
};