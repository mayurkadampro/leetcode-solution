/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    let result = "";
    for (let c of s) {
        if (result.length && Math.abs(c.charCodeAt() - result.slice(-1).charCodeAt()) === 32) {
            result = result.slice(0, result.length - 1);
        } else {
            result += c;
        }
    }
    return result;
};