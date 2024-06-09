/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
    const stack = [0];

    for (let char of s) {
        if (char === "(") {
            stack.push(0);
        } else {
            let current = stack.pop();
            if (current === 0) {
                stack[stack.length - 1] += 1
            } else {
                stack[stack.length - 1] += current * 2
            }
        }
    }

    return stack[0]
};