/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
    let count = 0;
    let sum = 0;
    let kMap = new Map();
    kMap.set(0, 1);

    for (let value of nums) {
        sum += value;
        let reminder = sum % k;
        if (reminder < 0) {
            reminder += k;
        }
        if (kMap.has(reminder)) {
            count += kMap.get(reminder);
        }
        kMap.set(reminder, (kMap.get(reminder) || 0) + 1);
    }
    return count;
};