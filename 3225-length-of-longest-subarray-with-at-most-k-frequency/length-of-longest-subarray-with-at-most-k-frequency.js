/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
    let ans = 0;
    let count = {};
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        let n1 = nums[right]
        count[n1] = (count[n1] || 0) + 1
        while (count[n1] > k) {
            let n2 = nums[left]
            count[n2]--
            left++
        }
        ans = Math.max(ans, right - left + 1);
        right++
    }
    return ans;
};