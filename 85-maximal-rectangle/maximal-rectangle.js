/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    if (!matrix.length) return 0;
    let ans = 0;
    const hist = new Array(matrix[0].length).fill(0);
    for (const row of matrix) {
        for (let i = 0; i < row.length; ++i) {
            hist[i] = row[i] === '0' ? 0 : hist[i] + 1;
        }
        ans = Math.max(ans, largestRectangleArea(hist));
    }
    return ans;
};

const largestRectangleArea = (heights) => {
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