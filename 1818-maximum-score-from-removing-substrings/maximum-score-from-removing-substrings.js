/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
    let result = 0;
    let stack = [];

    if (x >= y) {
        result += calAB(s, x, stack);
        let str = stack.join("");
        result += calBA(str, y, []);
    } else {
        result += calBA(s, y, stack);
        let str = stack.join("");
        result += calAB(str, x, []);
    }

    return result;
};

const calAB = (s, x, stack) => {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (stack.length && stack[stack.length - 1] === "a" && s[i] === "b") {
            stack.pop();
            count++;
        } else {
            stack.push(s[i]);
        }
    }

    return count * x;
}

const calBA = (s, y, stack) => {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (stack.length && stack[stack.length - 1] === "b" && s[i] === "a") {
            stack.pop();
            count++;
        } else {
            stack.push(s[i]);
        }
    }
    return count * y;
}