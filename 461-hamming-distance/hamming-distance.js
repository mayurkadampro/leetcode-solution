/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let value = x ^ y;
    let count = 0;

    while (value != 0) {
        count += 1;
        value = value & (value - 1);
    }
    return count;
};