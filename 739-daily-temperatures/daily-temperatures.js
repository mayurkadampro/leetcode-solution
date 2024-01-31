/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let ans = new Array(temperatures.length).fill(0);
    let idStack = [];
    for(let i=0; i<temperatures.length; i++){
        while(idStack.length && temperatures[i] > temperatures[idStack[idStack.length-1]]){
            const lastIndex = idStack.pop();
            ans[lastIndex] = i - lastIndex;
        }
        idStack.push(i);
    }
    return ans
};