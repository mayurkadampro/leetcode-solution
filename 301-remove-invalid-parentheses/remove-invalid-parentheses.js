/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
    if (!s || s.length === 0) return [''];

    const result = new Set();
    let level = new Set([s]);

    while (true) {
        const valid = Array.from(level).filter(isValid);
        if (valid.length > 0) {
            valid.forEach(str => result.add(str));
            break;
        }

        const nextLevel = new Set();
        for (let str of level) {
            for (let i = 0; i < str.length; i++) {
                if (str[i] === '(' || str[i] === ')') {
                    const next = str.slice(0, i) + str.slice(i + 1);
                    nextLevel.add(next);
                }
            }
        }
        if (nextLevel.size === 0) break;
        level = nextLevel;
    }
    return Array.from(result);
};

const isValid = (str) => {
    let count = 0;
    for (let char of str) {
        if (char === '(') count++;
        else if (char === ')') count--;
        if (count < 0) return false;
    }
    return count === 0;
};