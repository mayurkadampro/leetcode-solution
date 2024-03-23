/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    // return nums.concat(nums)
    // return [...nums, ...nums]

    let result = [];
    for (let i = 0; i < nums.length; i++) {
        result[i] = nums[i];
        result[nums.length + i] = nums[i];
    }
    return result;
};