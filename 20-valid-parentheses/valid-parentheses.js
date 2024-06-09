/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let openToClose = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    for (let value of s) {
        if (openToClose[value]) {
            stack.push(value);
        } else {
            if (stack.length === 0 ||
                (value === ')' && stack[stack.length - 1] !== '(') ||
                (value === '}' && stack[stack.length - 1] !== '{') ||
                (value === ']' && stack[stack.length - 1] !== '[')) {
                return false;
            }
            stack.pop();
        }
    }

    return !stack.length;
};