/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function (arr1, arr2) {
    // Initialize arrays to store expressions
    let x1 = [], x2 = [], x3 = [], x4 = [], ans = [];
    // Iterate through elements in arr1 and arr2
    for (let i = 0; i < arr1.length; i++) {
        // Calculate and store expressions in corresponding arrays
        x1.push(arr1[i] + arr2[i] + i);
        x2.push(arr1[i] - arr2[i] + i);
        x3.push(-arr1[i] + arr2[i] + i);
        x4.push(-arr1[i] - arr2[i] + i);
    }
    // Calculate maximum absolute difference for each expression array
    ans.push(Math.max(...x1) - Math.min(...x1));
    ans.push(Math.max(...x2) - Math.min(...x2));
    ans.push(Math.max(...x3) - Math.min(...x3));
    ans.push(Math.max(...x4) - Math.min(...x4));
    // Return the overall maximum absolute difference
    return Math.max(...ans);
};