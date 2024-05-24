/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    const sortedArr = nums.sort((a, b) => a - b);

    for (i = 0; k > 0;) {
        if (i + 1 === nums.length || nums[i] <= nums[i + 1]) {
            nums[i] = -nums[i]
            k--
            continue
        }
        nums[i + 1] = -nums[i + 1];
        k--
        i++
    }

    return sortedArr.reduce((acc, cur) => acc += cur, 0)
};