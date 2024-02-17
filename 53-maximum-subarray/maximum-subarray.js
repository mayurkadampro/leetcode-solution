/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length === 1) return nums[0];

    // Initialize the max sum...
    let maxSum = nums[0];
    let currSum = 0;
    // Traverse all the element through the loop...
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(0, nums[i - 1]) + nums[i];
        if (nums[i] > maxSum) {
            maxSum = nums[i];
        }
    }
    return maxSum;
};