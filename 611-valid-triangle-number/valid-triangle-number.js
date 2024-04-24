/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    if (nums.length < 3) return 0;

    nums.sort((a, b) => a - b);
    let n = nums.length
    let count = 0;

    for (let i = n - 1; i >= 2; i--) {
        let left = 0
        let right = i - 1

        while (left < right) {
            if (nums[left] + nums[right] > nums[i]) {
                count += right - left;
                right -= 1;
            } else {
                left += 1
            }
        }
    }

    return count;
};