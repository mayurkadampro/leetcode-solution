/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const idStack = [];
    const ans = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        const temp = temperatures[i];
        while (idStack.length && temp > temperatures[idStack[idStack.length - 1]]) {
            const lastId = idStack.pop();
            ans[lastId] = i - lastId;
        }
        idStack.push(i);
    }
    return ans;
};