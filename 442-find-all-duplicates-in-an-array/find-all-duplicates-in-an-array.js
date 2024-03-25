/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const num = Math.abs(nums[i]);
        const idx = num - 1;
        if (nums[idx] < 0) {
            result.push(num);
        }
        nums[idx] = -nums[idx];
    }
    return result;
};