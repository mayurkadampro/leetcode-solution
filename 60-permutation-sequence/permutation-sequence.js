/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let factorial = [1];
    let nums = [];
    let result = "";

    for (let i = 1; i <= n; i++) {
        factorial[i] = i * factorial[i - 1];
        nums.push(i);
    }

    k--;
    while (nums.length > 0) {
        const availableLen = nums.length - 1;
        let swapValue = Math.floor(k / factorial[availableLen]);
        result += nums[swapValue]
        nums.splice(swapValue, 1);
        const remainder = k % factorial[availableLen];
        k = k % factorial[availableLen];
    }
    return result;
};