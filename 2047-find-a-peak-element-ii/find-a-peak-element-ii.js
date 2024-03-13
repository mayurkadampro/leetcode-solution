/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
    let left = 0;
    let right = mat[0].length - 1;


    while (left <= right) {
        //mid col
        let midCol = left + Math.floor((right - left) / 2);

        //find max value of mid col and update its row
        let localPeakRow = findMax(mat, midCol);

        if (mat[localPeakRow][midCol + 1] && mat[localPeakRow][midCol + 1] > mat[localPeakRow][midCol]) { //the local peak on the right
            left = midCol + 1
        } else if (mat[localPeakRow][midCol - 1] && mat[localPeakRow][midCol - 1] > mat[localPeakRow][midCol]) { //the local peak on the left
            right = midCol - 1
        } else { //gotcha
            return [localPeakRow, midCol]
        }
    }
    return [1, -1]; // Return this outside the while loop
};

function findMax(mat, midCol) {
    let localPeakRow = 0;
    for (let row = 0; row < mat.length; row++) {
        localPeakRow = mat[localPeakRow][midCol] >= mat[row][midCol] ? localPeakRow : row
    }
    return localPeakRow;
}