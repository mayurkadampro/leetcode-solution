/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let stack = [];
    let splitArray = s.split("");

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === "(") {
            stack.push(i);
        } else if (char === ")") {
            if (stack.length === 0) {
                splitArray[i] = "";
            } else {
                stack.pop();
            }
        }
    }

    for (let i = 0; i < stack.length; i++) {
        const char = stack[i];
        splitArray[char] = "";
    }

    return splitArray.join("");
};