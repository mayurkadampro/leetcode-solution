/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const powerset = [];
    generatePowerset(powerset, [], 0, nums);
    return powerset;
};
var generatePowerset = (powerset, path, index, nums) => {
    powerset.push(path);
    for (let i = index; i < nums.length; i++) {
        generatePowerset(powerset, [...path, nums[i]], i + 1, nums);
    }
}