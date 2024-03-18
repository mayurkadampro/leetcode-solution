/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
    let total = 0;
    const n = nums.length;

    // for each bit position find different bits
    for (let i = 0; i < 32; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            count += (nums[j] >> i) & 1;
        }
        total += count * (n - count);
    }
    return total;
};