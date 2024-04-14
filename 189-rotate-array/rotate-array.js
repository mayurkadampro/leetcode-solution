/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // 1st solution
    // if (nums === null || nums.length === 0) {
    //     return;
    // }
    // k = k % nums.length;
    // if (k === 0) {
    //     return;
    // }
    // nums.reverse();
    // reverse(nums, 0, k - 1);
    // reverse(nums, k, nums.length - 1);

    // 2nd soluution
    const len = nums.length
    k = (k % len)

    let end = nums.splice(len - k)

    nums.splice(0, 0, ...end)
};

const reverse = (arr, start, end) => {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
};