/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let minIndexToWin = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + nums[i] >= minIndexToWin) {
            minIndexToWin = i
        }
    }
    return minIndexToWin === 0;
};