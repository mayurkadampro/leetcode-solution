/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {

    // Brute Force SC - O(N), TC - O(N^2)
    // let result = new Array(temperatures.length).fill(0);
    // for (let i = 0; i < temperatures.length - 1; i++) {
    //     for (let j = i + 1; j < temperatures.length; j++) {
    //         if (temperatures[i] < temperatures[j]) {
    //             result[i] = j - i;
    //             break
    //         }
    //     }
    // }
    // return result;

    // Monotonic Decreasing Stack
    let n = temperatures.length;
    let result = new Array(n).fill(0);
    let stack = [];

    for (let i = 0; i < n; i++) {
        const temp = temperatures[i];
        while (stack.length && temp > temperatures[stack[stack.length - 1]]) {
            const lastId = stack.pop();
            result[lastId] = i - lastId;
        }
        stack.push(i);
    }

    return result;
};
