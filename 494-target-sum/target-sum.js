/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    if (nums.length === 0) return 0;
    return helper(nums, 0, target);
};

const helper = (nums, i, target) => {
    if (i === nums.length - 1) {
        if (nums[i] === 0 && target === 0) return 2;
        return nums[i] === Math.abs(target) ? 1 : 0;
    }

    return helper(nums, i + 1, target - nums[i]) + helper(nums, i + 1, target + nums[i]);
}