/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    // let row = matrix.length - 1;
    // let col = matrix[0].length - 1;
    // let lo = matrix[0][0];
    // let hi = matrix[row][col];

    // while (lo < hi) {
    //     let mid = lo + Math.floor((hi - lo) / 2);
    //     let count = 0;
    //     for (let i = 0; i < matrix.length; i++) {
    //         for (let j = 0; j < matrix.length; j++) {
    //             if (matrix[i][j] <= mid) count++;
    //             else break;
    //         }
    //     }
    //     if (count < k) {
    //         lo = mid + 1;
    //     } else {
    //         hi = mid;
    //     }
    // }

    // return lo;
};

var kthSmallest = function (matrix, k) {
    let R = matrix.length;
    let C = matrix[0].length;
    let N = R * C;
    let start = matrix[0][0];
    let end = matrix[R - 1][C - 1];
    let medianIdx = k - 1;

    while (start <= end) {
        let assumedMedian = Math.floor(start + (end - start) / 2);
        let noOfElements = findSmallerElement(matrix, assumedMedian);

        if (noOfElements <= medianIdx) {
            start = assumedMedian + 1;
        } else {
            end = assumedMedian - 1;
        }
    }
    return start;
}


const findSmallerElement = (matrix, assumedMedian) => {
    let noOfSmallerElements = 0;
    for (let i = 0; i < matrix.length; i++) {
        let start = 0;
        let end = matrix[i].length - 1;

        while (start <= end) {
            let mid = Math.floor(start + (end - start) / 2);
            if (matrix[i][mid] <= assumedMedian) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        noOfSmallerElements += start;
    }
    return noOfSmallerElements;
}