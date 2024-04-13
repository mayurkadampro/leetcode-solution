/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let stack = [];
    let leftStack = [];
    findLeftSmaller(heights, stack, leftStack);

    stack = [];
    let rightStack = [];
    findRightSmaller(heights, stack, rightStack);

    let max = -Infinity;

    //Area = right - left - 1 (length) * heights[i](breadth)
    let area;

    for (let i = 0; i < heights.length; i++) {
        area = (rightStack[heights.length - i - 1] - leftStack[i] - 1) * heights[i];
        max = Math.max(area, max);
    }
    return max;
};

const findLeftSmaller = (heights, stack, leftStack) => {
    for (let i = 0; i < heights.length; i++) {
        while (stack.length !== 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            leftStack.push(-1);
        }
        else {
            leftStack.push(stack[stack.length - 1]);
        }
        stack.push(i);
    }
}

const findRightSmaller = (heights, stack, rightStack) => {
    for (let i = heights.length - 1; i >= 0; i--) {
        while (stack.length !== 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            rightStack.push(heights.length);
        }
        else {
            rightStack.push(stack[stack.length - 1]);
        }
        stack.push(i);
    }
}