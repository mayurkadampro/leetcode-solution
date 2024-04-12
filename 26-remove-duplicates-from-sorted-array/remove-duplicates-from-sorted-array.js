/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let count = 1; // Initialize the count of unique elements to 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[count - 1]) {
            nums[count] = nums[i];
            count++;
        }
    }
    return count;

    // for (let i = 0; i < nums.length;) {
    //     if (nums[i] === nums[i + 1]) {
    //         nums.splice(i, 1)
    //     } else {
    //         i++
    //     }
    // }
};