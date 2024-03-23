/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let n = nums.length; // size of array.
    let pre = 1, suff = 1;
    let ans = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        if (pre === 0) pre = 1;
        if (suff === 0) suff = 1;
        pre *= nums[i];
        suff *= nums[n - i - 1];
        ans = Math.max(ans, Math.max(pre, suff));
    }
    return ans;
};