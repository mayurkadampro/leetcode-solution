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

    for (let i = n; i > 0; i--) {
        index = Math.ceil(k / factorial[i - 1]); // decide to use which permutation set
        result += nums[index - 1];
        nums.splice(index - 1, 1);
        k -= (factorial[i - 1] * (index - 1));
    }
    return result;
};