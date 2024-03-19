/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
    // Prefix sum O(n) time and O(1) space.
    const res = [];
    const xorResults = [];
    xorResults[0] = arr[0];

    for (let i = 1; i < arr.length; i++) {
        xorResults.push(arr[i] ^ xorResults[i - 1]);
    }

    for (const [start, end] of queries) {
        res.push(xorResults[start] ^ xorResults[end] ^ arr[start]);
    }

    return res;


    // straight forward solution which costs O(mn) time and O(1) space.
    // const ret = new Uint16Array(queries.length);
    // for (let i = 0; i < queries.length; ++i) {
    //     let val = 0;
    //     for (let j = queries[i][0]; j <= queries[i][1]; ++j) {
    //         val ^= arr[j];
    //     }
    //     ret[i] = val;
    // }
    // return ret;
};