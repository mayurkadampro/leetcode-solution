/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    let memo = {};
    return generatePowerset(nums, target, memo);
};

var generatePowerset = (nums, target, memo) => {
    if (target == 0) return 1;
    if (target < 0) return 0;
    if (target in memo) return memo[target];
    let res = 0
    for (const val of nums) {
        res += generatePowerset(nums, target - val, memo);
    }
    memo[target] = res
    return res
}