/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    // count row length
    let row = mat.length - 1;

    // count column length;
    let col = mat[0].length - 1;

    // sum variable needed to store the sum count
    let sum = 0;

    // loop over matrix each row, while loop try to sum both primary & secondary diagonal values
    for (let i = 0; i <= row; i++, col--) {

        // it will sum the equal row and column values ex, 00, 11, 22, 33 
        sum += mat[i][i];

        // it will sum the opposite row and column values ex 02, 11, 21
        // we need to decrement col value as we move further, which we are doing in for loop
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

var diagonalSum = function (mat) {
    // count row length
    let row = mat.length - 1;

    // count column length;
    let col = mat[0].length - 1;

    // sum variable needed to store the sum count
    let sum = 0;

    // equalIndex variable needed to store sum of common odd matrix common values 
    let equalIndex = 0;

    // loop over matrix each row, while loop try to sum both primary & secondary diagonal values
    for (let i = 0; i <= row; i++, col--) {

        // if execute with same index
        // else execute for different index
        if (i === col) {
            equalIndex += mat[i][i];
        } else {
            // it will sum the equal row and column values ex, 00, 11, 22, 33 
            sum += mat[i][i];

            // it will sum the opposite row and column values ex 02, 11, 21
            // we need to decrement col value as we move further, which we are doing in for loop
            sum += mat[i][col];
        }
    }

    // at the end for odd matrix it will sum the value and for even it will sum with 0 value;
    return sum + equalIndex;
};