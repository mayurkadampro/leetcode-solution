/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let count = 0; // Initialize the count of unique elements to 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 2]) {
            nums[count] = nums[i];
            count++;
        }
    }
    return count;
};