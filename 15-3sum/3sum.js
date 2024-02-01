/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const results = [];
    if (nums.length < 3) return results

    nums.sort((a, b) => a - b);


    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue

        // Two Pointer
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                results.push([nums[i], nums[left], nums[right]]);
                while (nums[left + 1] === nums[left]) left++;
                while (nums[right - 1] === nums[right]) right--;
                left++
                right--
            }
        }
    }
    return results
};