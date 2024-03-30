/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    generateSubsetsWithDup(nums, [], 0, result);
    return result;
};


var generateSubsetsWithDup = (nums, currentSet, index, result) => {
    result.push(currentSet.slice());
    for (let i = index; i < nums.length; i++) {
        if (i > index && nums[i] === nums[i - 1]) continue;
        currentSet.push(nums[i]);
        generateSubsetsWithDup(nums, currentSet, i + 1, result);
        currentSet.pop();
    }
}