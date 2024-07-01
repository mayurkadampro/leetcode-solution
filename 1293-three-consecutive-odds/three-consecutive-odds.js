/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    let count = 1;
    for (let value of arr) {
        if (value % 2 !== 0) {
            count++;
        } else if (count <= 3) {
            count = 1;
        }
    }

    console.log(count)
    count--;
    return count >= 3 ? true : false;
};