/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const binarySearch = function (nums, target, isSearchingLeft) {
        let ans = -1;
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                ans = mid;
                if (isSearchingLeft) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }
        return ans;
    }

    const leftBinarySearch = binarySearch(nums, target, true);
    const rightBinarySearch = binarySearch(nums, target, false);
    return [leftBinarySearch, rightBinarySearch];
};