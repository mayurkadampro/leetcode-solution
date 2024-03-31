/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const result = [];
    generatePowerset(nums, [], 0, result);
    return result;
};

// Iterative Solution
// var generatePowerset = (nums, currentSet, startIndex, result) => {
//     result.push([]);
//     for (let num of nums) {
//         currentSet = [];
//         for (let entry of result) {
//             currentSet.push([...entry, num])
//         }
//         result.push(...currentSet)
//     }
// }

// Include-Exclude Pattern
// https://leetcode.com/problems/subsets/solutions/4765571/beats-100-0ms-include-exclude-pattern
// var generatePowerset = (nums, currentSet, index, result) => {
//     if (index === nums.length) {
//         result.push(currentSet.slice());
//         return;
//     }

//     // include current element in set
//     currentSet.push(nums[index]);
//     generatePowerset(nums, currentSet, index + 1, result);
//     currentSet.pop();

//     // exclude the current element in set
//     generatePowerset(nums, currentSet, index + 1, result);
// }

// Recursion (BackTracking)
var generatePowerset = (nums, currentSet, startIndex, result) => {
    result.push([...currentSet]);
    for (let i = startIndex; i < nums.length; i++) {
        currentSet.push(nums[i]);
        generatePowerset(nums, currentSet, i + 1, result);
        currentSet.pop();
    }
}