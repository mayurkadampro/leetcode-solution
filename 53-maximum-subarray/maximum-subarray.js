/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length === 1) return nums[0];

    // Initialize the max sum...
    let maxSum = nums[0];

    // Traverse all the element through the loop...
    for (let i = 1; i < nums.length; i++) {

        // nums[i] represents the largest sum of all subarrays ending with index i...
        // then its value should be the larger one between nums[i]...
        // nums[i-1] + nums[i] (largest sum plus current number with using prefix)...
        // calculate nums[0], nums[1]…, nums[n] while comparing each one with current largest sum...
        nums[i] = Math.max(0, nums[i - 1]) + nums[i];

        // if nums[i] > maxSum then maxSum = nums[i]
        if (nums[i] > maxSum) {
            maxSum = nums[i];
        }
    }
    return maxSum;
};