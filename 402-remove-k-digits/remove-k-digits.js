/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    let digitStack = [num[0]];

    for (let i = 1; i < num.length; i++) {
        while (digitStack.length && k > 0 && digitStack[digitStack.length - 1] > num[i]) {
            digitStack.pop();
            k--;
        }
        digitStack.push(num[i]);
    }

    // remove all remaining large numbers
    while (digitStack.length && k > 0) {
        digitStack.pop()
        k--
    }

    // remove all remaining large numbers
    while (digitStack.length && digitStack[0] === '0') {
        digitStack.shift();
    }

    return digitStack.length ? digitStack.join('') : '0';
};