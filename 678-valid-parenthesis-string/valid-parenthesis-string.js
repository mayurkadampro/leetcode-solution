/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    // let stack = [];
    // for (let i = 0; i < s.length; i++) {
    //     const char = s[i];
    //     if (char === "(" || char === "*") {
    //         stack.push("(");
    //     } else if (char === ")") {
    //         if (stack.length < 1) {
    //             return false;
    //         } else {
    //             stack.pop();
    //         }
    //     }
    // };

    // stack = [];
    // for (let i = s.length - 1; i >= 0; i--) {
    //     const char = s[i];
    //     if (char === ")" || char === "*") {
    //         stack.push(")");
    //     } else if (char === "(") {
    //         if (stack.length < 1) {
    //             return false;
    //         } else {
    //             stack.pop();
    //         }
    //     }
    // };

    // return true;

    // Gready solution
    let left_min = 0;
    let left_max = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            left_min++;
            left_max++;
        }
        if (s[i] == ')') {
            left_min--;
            left_max--;

        }
        if (s[i] == '*') {
            left_min--;
            left_max++;

        }
        if (left_max < 0) {
            return false;
        }
        if (left_min < 0) {
            left_min = 0;
        }
    }
    return left_min === 0;
};