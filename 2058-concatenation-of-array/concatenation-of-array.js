/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    // return nums.concat(nums)
    // return [...nums, ...nums]
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        result[i] = nums[i];
        result[i + nums.length] = nums[i];
    }
    return result;
};