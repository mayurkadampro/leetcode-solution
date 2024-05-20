/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    return findSum(nums, 0, 0);
};

const findSum = (nums, currIdx, currNum) => {
    if (currIdx === nums.length) {
        return currNum;
    }

    let includeInXor = findSum(nums, currIdx + 1, currNum ^ nums[currIdx]);
    let excludeInXor = findSum(nums, currIdx + 1, currNum);

    return includeInXor + excludeInXor;
}