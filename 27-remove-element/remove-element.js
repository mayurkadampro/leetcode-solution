/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // let count = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] !== val) {
    //         nums[count] = nums[i];
    //         count++;
    //     }
    // }
    // return count;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (nums[left] === val) {
            nums[left] = nums[right];
            right--;
        }
        else {
            left++;
        }
    }

    return left;
};