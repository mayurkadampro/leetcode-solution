/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {

    let height = grid.length;
    let width = grid[0].length;
    let result = 0;

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {

            if (grid[row][col] === 1) {

                // TOP
                if (row > 0 && grid[row - 1][col] === 0 || row === 0) {
                    result++;
                }

                // Bottom
                if (row < height - 1 && grid[row + 1][col] === 0 || row === height - 1) {
                    result++;
                }

                // left
                if (col > 0 && grid[row][col - 1] === 0 || col === 0) {
                    result++;
                }

                // RIGHT
                if (col < width - 1 && grid[row][col + 1] === 0 || col === width - 1) {
                    result++;
                }



            }


        }
    }
    return result;
};