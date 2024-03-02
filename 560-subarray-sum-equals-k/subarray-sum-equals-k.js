/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let count = 0;
    let sum = 0;
    let kMap = new Map();
    kMap.set(0, 1);

    for (let value of nums) {
        sum += value;
        if (kMap.has(sum - k)) {
            count += kMap.get(sum - k);
        }
        kMap.set(sum, (kMap.get(sum) || 0) + 1);
    }
    return count;
};