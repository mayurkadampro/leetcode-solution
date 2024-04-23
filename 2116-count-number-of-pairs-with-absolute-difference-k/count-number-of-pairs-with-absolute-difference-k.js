/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {

    let count = 0;
    let freq = new Map();

    // iterate over array to count freq
    for (let i = 0; i < nums.length; i++) {
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
    }

    //search solutions
    for (let i = 0; i < nums.length; i++) {
        if (freq.has(parseInt(nums[i]) - k)) {
            count += freq.get(parseInt(nums[i]) - k);
        }
    };

    return count;
};