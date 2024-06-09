/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let result = "";
    let count = 0;

    for (let value of s) {
        if (value === "(") {
            if (count) {
                result += value;
            }
            count++;
        } else {
            count--;
            if (count) {
                result += value;
            }
        }
    }

    return result;
};