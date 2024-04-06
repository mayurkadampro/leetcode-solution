/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === "(" || char === "*") {
            stack.push("(");
        } else if (char === ")") {
            if (stack.length < 1) {
                return false;
            } else {
                stack.pop();
            }
        }
    };

    stack = [];
    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];
        if (char === ")" || char === "*") {
            stack.push(")");
        } else if (char === "(") {
            if (stack.length < 1) {
                return false;
            } else {
                stack.pop();
            }
        }
    };

    return true;
};