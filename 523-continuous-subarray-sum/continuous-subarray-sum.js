/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    // Initialize the sum and a map to store the first occurrence of remainders
    let sum = 0;
    const kMap = new Map();
    kMap.set(0, -1); // Initialize the map with remainder 0 at index -1.

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]; // Increment the sum by the current element.

        // Calculate the remainder of the sum with respect to k.
        const remainder = sum % k;

        // Adjust remainder to be non-negative.
        const adjustedRemainder = remainder < 0 ? remainder + k : remainder;

        // If the remainder has been seen before.
        if (kMap.has(adjustedRemainder)) {
            // Check if the subarray length is at least 2.
            if (i - kMap.get(adjustedRemainder) > 1) {
                return true; // Valid subarray found.
            }
        } else {
            // Store the first occurrence of the remainder.
            kMap.set(adjustedRemainder, i);
        }
    }

    return false;
};