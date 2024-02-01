/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    // HashMap Solution
    // let storeMap = new Map();
    // for (let i = 0; i < nums.length; i++) {
    //     let diff = target - nums[i]
    //     if (storeMap.has(diff)) {
    //         return [storeMap.get(diff), i]
    //     }
    //     storeMap.set(nums[i], i);
    // }
    // return [];

    // Two pointer
    // Create an array of objects {value, index} to keep track of the original indices
    const numsWithIndices = nums.map((num, index) => ({ value: num, index }));
    // Sort the array of objects based on the values
    numsWithIndices.sort((a, b) => a.value - b.value);
    // Initialize two pointers
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const currentSum = numsWithIndices[left].value + numsWithIndices[right].value;
        if (currentSum === target) {
            // Return the original indices
            return [numsWithIndices[left].index, numsWithIndices[right].index];
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    // No solution found
    return [];
};