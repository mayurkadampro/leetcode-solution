/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    return [binarySearch(nums, target, true), binarySearch(nums, target, false)]
};


const binarySearch = (nums, target, isFirstSearch) => {
    let left = 0;
    let right = nums.length - 1;
    let ans = -1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            ans = mid;
            if (isFirstSearch) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }

    return ans;
}