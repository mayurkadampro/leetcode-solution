/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    if (nums.length < 1) return nums;
    let minVal = nums[0];
    let maxVal = nums[0];

    for (let value of nums) {
        if (value < minVal) {
            minVal = value;
        } else if (value > maxVal) {
            maxVal = value;
        }
    }

    for (let i = maxVal; i >= 0; i--) {
        if (maxVal % i === 0 && minVal % i === 0) return i;
    }
};



