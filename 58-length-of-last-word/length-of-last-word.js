/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // 1st solution
    // let arr = s.trim().split(" ");
    // return arr[arr.length-1].length;

    // 2nd solution
    // return s.trim().split(" ").pop().length;

    // 3rd solution
    return s.trim().split(' ').at(-1).length;
};