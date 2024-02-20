/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let index = -1;
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            index = i-1;
            break;
        }
    }
    if (index === -1) { // array is in descending order
        nums.reverse();
        return;
    }
    for (let i = nums.length - 1; i > index; i--) {
        if (nums[i] > nums[index]) {
            swap(nums, i, index);
            break;
        }
    }
    for (let i = index + 1, j = nums.length - 1; i < j; i++, j--) {
        swap(nums, i, j);
    }

};

function swap(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}
