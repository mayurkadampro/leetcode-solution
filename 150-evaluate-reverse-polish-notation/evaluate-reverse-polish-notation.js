/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    // Monotonic Stack solution
    let stack = [];
    for (const token of tokens) {
        if (token.length === 1 && token.charCodeAt(0) < 48) {
            const integer2 = stack.pop();
            const integer1 = stack.pop();
            stack.push(resolves(integer1, integer2, token));
        } else {
            stack.push(parseInt(token));
        }
    }
    return stack.pop();
};

var resolves = function (a, b, Operator) {
    if (Operator === '+') return a + b;
    else if (Operator === '-') return a - b;
    else if (Operator === '*') return a * b;
    return Math.trunc(a / b);
}