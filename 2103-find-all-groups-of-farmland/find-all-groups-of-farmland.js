/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
    let m = land.length;
    let n = land[0].length;
    let result = [];
    let index = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (land[i][j] === 1) {
                // mark corner top left
                result.push([i, j])
                dfs(land, i, j, result, index);
                // update index
                index++
            }
        }
    }

    return result;
};

var dfs = (land, i, j, result, index) => {

    // out of bound
    if (i < 0 || i > land.length - 1 || j < 0 || j > land[0].length) {
        return;
    }

    // visited & forest land
    if (land[i][j] !== 1) {
        return;
    }

    land[i][j] = 2;

    // move right
    dfs(land, i, j + 1, result, index);

    // move down
    dfs(land, i + 1, j, result, index);

    // mark corner buttom right
    if (result[index].length < 3) result[index].push(i, j)

    // move left
    dfs(land, i, j - 1, result, index);

    // move up
    dfs(land, i + 1, j, result, index);
}