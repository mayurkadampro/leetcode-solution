/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {

    let count = 0;
    let freq = new Map();

    // iterate over array to count freq
    for (let i = 0; i < nums.length; i++) {
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
    }

    //search solutions
    freq.forEach((value, key) => {
        if (k === 0) {
            if (value > 1) count++;
        } else if (freq.has(parseInt(key) - k)) {
            count++;
        }
    });

    return count;
};