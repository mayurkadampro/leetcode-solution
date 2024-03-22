/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    // Base Case
    if (n === 0) return 1;
    if (x === 0) return 0;

    const half = myPow(x, Math.floor(Math.abs(n) / 2));
    let result = n % 2 == 0 ? half * half : half * half * x;
    return result = n >= 0 ? result : 1 / result;
};