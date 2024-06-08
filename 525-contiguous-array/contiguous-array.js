/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    if (nums.length === 1) return 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums[i] = -1;
        }
    }

    let kMap = new Map();
    kMap.set(0, -1);

    let sum = 0;
    let maxLen = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (kMap.has(sum)) {
            let lastVal = kMap.get(sum);
            maxLen = Math.max(maxLen, i - lastVal);
        } else {
            kMap.set(sum, i);
        }
    }

    return maxLen;
};