/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length === 1) return nums[0];
    let maxSum = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > maxSum) {
            maxSum = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
};