/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length <= 0) return 0;
    let setData = new Set(nums);
    let longest = 0;
    for (let i in nums) {
        if (!setData.has(nums[i] - 1)) {
            let length = 0;
            while (setData.has(nums[i] + length)) {
                length += 1;

            }
            longest = Math.max(length, longest);
        }
    }
    return longest;
};