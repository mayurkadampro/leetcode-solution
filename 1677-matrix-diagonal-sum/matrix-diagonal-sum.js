/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    // Count row length
    let row = mat.length - 1;

    // Count column length;
    let col = mat[0].length - 1;

    // Single variable needed to store the sum count
    let sum = 0;

    // loop over matrix each row, while loop try to sum both primary & secondary diagonal values
    for (let i = 0; i <= row; i++, col--) {

        // it will sum the equal row and column values ex, 00, 11, 22, 33 
        sum += mat[i][i];

        // it will sum the opposite row and column values ex 02, 11, 21
        sum += mat[i][col];
    }

    // Once we have sum of all primary & secondary diagonal values we check if given materix is even or odd
    // To check even or odd we increment row by 1 just to get actual length of row.
    // instead of increment you can use mat.length or mat[0].length also
    row += 1;

    // If row is even than we don't need to minus middle number, which is common in both primary & secondary elements.
    // If row is odd than we have common value in both primary & secondary elements.
    return row % 2 === 0 ? sum : sum - mat[Math.floor(row / 2)][Math.floor(row / 2)];
};