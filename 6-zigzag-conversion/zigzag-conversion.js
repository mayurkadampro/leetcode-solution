/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    const rows = []; // where string in each row stored
    let row = 0, step = 1;

    for (let i = 0; i < s.length; i++) {
        rows[row] = rows[row] ? rows[row] + s[i] : s[i]; // add the char to current row string

        row += step;  // update the row
        if (row === numRows - 1 || row === 0) step *= -1; // if it hit the border, turn the direction
    }

    return rows.join('') // join all the rows and return
};