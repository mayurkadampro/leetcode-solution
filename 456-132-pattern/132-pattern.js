/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    // initialize minimum value to -Infinity
    let min = -Infinity;

    // initialize a empty array stack
    const stack = [];

    // Run a Loop from last to first index of array nums
    for (let i = nums.length - 1; i >= 0; i--) {

        // If nums[i] is greater than the top element of stack, then pop the element from array stack
        while (nums[i] > stack[stack.length - 1]) {
            min = stack.pop();
        }

        // If min is greater than nums[i] then return true
        if (nums[i] < min) {
            return true
        }

        // Otherwise, push nums[i] into array stack
        stack.push(nums[i])

    }

    // If the above condition is not satisfied then return false.
    return false;
};