/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let longest = 0;
    let numsSet = new Set(nums);
    for (let i in nums) {
        if (!numsSet.has(nums[i] - 1)) {
            let length = 0;
            while(numsSet.has(nums[i] + length)){
                length += 1;
            }
            longest = Math.max(length, longest);
        }
    }
    return longest;
};