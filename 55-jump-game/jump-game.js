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

// DP Top-down Memoization
// Time complexity : O(n^2)
// Space complexity : O(2n) = O(n).
// var canJump = function (nums) {
//     return helper(nums)
// }

// var helper = function (nums, position = 0, memo = []) {
//     // Base Case
//     if (position === nums.length - 1) {
//         return true;
//     }

//     // if its not valid return its false
//     if (memo[position] !== undefined) {
//         return memo[position];
//     }

//     let furthestJump = Math.min(position + nums[position], nums.length - 1);
//     for (let nextPosition = position + 1; nextPosition <= furthestJump; nextPosition++) {
//         if (helper(nums, nextPosition, memo)) {
//             memo[position] = true;
//             return true;
//         }
//     }
//     memo[position] = false;
//     return false;
// }