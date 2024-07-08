/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
    let circle = new Array(n);
    for (let i = 0; i < circle.length; i++) {
        circle[i] = i + 1;
    }

    let currIdx = 0;
    while (circle.length > 1) {
        currIdx = (currIdx + k - 1) % circle.length;
        circle.splice(currIdx, 1);
    }

    return circle[0];
};