/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const result = [];
    generatePowerset(nums, [], 0, result);
    return result;
};

// Include-Exclude Pattern
// https://leetcode.com/problems/subsets/solutions/4765571/beats-100-0ms-include-exclude-pattern
var generatePowerset = (nums, currentSet, index, result) => {
    if (index === nums.length) {
        result.push(currentSet.slice());
        return;
    }

    // include current element in set
    currentSet.push(nums[index]);
    generatePowerset(nums, currentSet, index + 1, result);
    currentSet.pop();

    // exclude the current element in set
    generatePowerset(nums, currentSet, index + 1, result);
}