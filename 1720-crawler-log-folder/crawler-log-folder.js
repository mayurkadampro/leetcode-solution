/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    const stack = [];

    for (const action of logs) {
        if (action === "../") {
            stack.pop();
        } else if (action === "./") {
            continue;
        } else {
            stack.push(action);
        }
    }

    return stack.length;
};