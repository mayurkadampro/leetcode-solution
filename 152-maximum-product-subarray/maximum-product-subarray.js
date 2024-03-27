/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let n = nums.length - 1;
    let prefix = 1;
    let suffix = 1;
    let ans = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i <= n; i++) {
        if (prefix === 0) prefix = 1;
        if (suffix === 0) suffix = 1;

        prefix *= nums[i];
        suffix *= nums[n - i];

        ans = Math.max(ans, Math.max(prefix, suffix));
    }

    return ans;
};