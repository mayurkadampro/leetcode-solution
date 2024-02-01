/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // HashMap Solution
    // let uniqueMap = new Map();
    // for(let i=0; i<nums.length; i++){
    //     let diff = target - nums[i];
    //     if(uniqueMap.has(diff)){
    //         return [uniqueMap.get(diff), i]
    //     }
    //     uniqueMap.set(nums[i], i);
    // }
    // return [];

    // Two Pointer

    // Create an array of objects {value, index} to keep track of the original indices
    const numsWithIndices = nums.map((num, index) => ({ value: num, index }));

    // Sort the array of objects based on the values
    numsWithIndices.sort((a, b) => a.value - b.value);

    // Initialize two pointers
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const sum = numsWithIndices[left].value + numsWithIndices[right].value;
        if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        } else {
            return [numsWithIndices[left].index, numsWithIndices[right].index]
        }
    }
    return [];
};