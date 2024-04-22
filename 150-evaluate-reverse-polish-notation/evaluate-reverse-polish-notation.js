/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    // Monotonic Stack solution
    let stack = [];
    let operators = new Set();
    operators.add("+");
    operators.add("-");
    operators.add("*");
    operators.add("/");

    for (let i = 0; i < tokens.length; i++) {
        if (operators.has(tokens[i])) {
            let firstDigit = stack.pop();
            let secondDigit = stack.pop();

            stack.push(resolves(secondDigit, firstDigit, tokens[i]));

        } else {
            stack.push(parseInt(tokens[i], 10));
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