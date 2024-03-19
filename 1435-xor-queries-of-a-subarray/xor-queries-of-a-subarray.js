/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
    // Prefix sum O(n) time and O(1) space.
    const prefix = [];
    prefix[0] = arr[0];

    for (let i = 1; i < arr.length; i++) {
        prefix.push(arr[i] ^ prefix[i - 1]);
    }

    const res = [];
    for (const [start, end] of queries) {
        res.push(prefix[start] ^ prefix[end] ^ arr[start]);
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