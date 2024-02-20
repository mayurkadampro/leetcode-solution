/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [];
    permuteRec(nums, 0, result);
    return result;
};

function permuteRec(nums, index, result) {
    if (index >= nums.length) {
        result.push(nums.slice())
        return;
    }
    for (let i = index; i < nums.length; i++) {
        [nums[index], nums[i]] = [nums[i], nums[index]];
        permuteRec(nums, index + 1, result);
        [nums[index], nums[i]] = [nums[i], nums[index]];
    }
}