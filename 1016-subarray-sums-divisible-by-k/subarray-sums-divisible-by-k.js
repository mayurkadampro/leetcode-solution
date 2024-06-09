/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
    // Initialize the sum, count as zero
    let sum = 0;
    let count = 0;

    // Initialize map to store the first occurrence of remainders
    const kMap = new Map();
    kMap.set(0, 1); // Initialize the map with remainder 0 at index -1.


    for (let value of nums) {
        sum += value; // Increment the sum by the current element.

        // Calculate the remainder of the sum with respect to k.
        const remainder = sum % k;

        // Adjust remainder to be non-negative.
        const adjustedRemainder = remainder < 0 ? remainder + k : remainder;

        // If the remainder has been seen before.
        if (kMap.has(adjustedRemainder)) {
            count += kMap.get(adjustedRemainder);
        }

        // Store the first occurrence of the remainder.
        kMap.set(adjustedRemainder, (kMap.get(adjustedRemainder) || 0) + 1);

    }
    return count;
};