/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Brute Force | TC - O(N * K) | SC - O(1)
// const maxSlidingWindow = function (nums, k) {
//     let left = 0;
//     let right = k - 1;
//     let maxArr = [];
//     while (right < nums.length) {
//         maxArr.push(Math.max(...nums.slice(left, right + 1)));
//         left++;
//         right++;
//     }
//     return maxArr;
// };

// Monotonic deque | TC - O(N) | SC - O(1)
const maxSlidingWindow = function (nums, k) {
    let deque = []; // stores *indices*
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        // Pop Smaller element from right
        while (deque && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }

        deque.push(i);
        /**
         * once the window fully overlaps the array, we can start register
         * the maximum values in each iteration. 
         */
        // remove first element if it's outside the window
        if (deque[0] === i - k) {
            deque.shift();
        }
        // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    return result;
}

