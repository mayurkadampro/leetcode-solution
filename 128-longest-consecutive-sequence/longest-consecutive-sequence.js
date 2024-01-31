/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let numsSet = new Set(nums);
    let longest = 0;
    for (let i = 0; i < nums.length; i++) {
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