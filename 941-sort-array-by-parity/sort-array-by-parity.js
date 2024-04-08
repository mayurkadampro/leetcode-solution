/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let i = 0, j = 0;

    while (i < nums.length) {
        if (nums[i] % 2 === 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j++
        } else {
            i++
        }
    }
    return nums;
};