/**
 * @param {number[][]} land
 * @return {number[][]}
 */

// DFS
// var findFarmland = function (land) {
//     let m = land.length;
//     let n = land[0].length;
//     let result = [];
//     let index = 0;

//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (land[i][j] === 1) {
//                 // mark corner top left
//                 result.push([i, j])
//                 dfs(land, i, j, result, index);
//                 // update index
//                 index++
//             }
//         }
//     }

//     return result;
// };

// var dfs = (land, i, j, result, index) => {

//     // out of bound
//     if (i < 0 || i > land.length - 1 || j < 0 || j > land[0].length) {
//         return;
//     }

//     // visited & forest land
//     if (land[i][j] !== 1) {
//         return;
//     }

//     land[i][j] = 2;

//     // move right
//     dfs(land, i, j + 1, result, index);

//     // move down
//     dfs(land, i + 1, j, result, index);

//     // mark corner buttom right
//     if (result[index].length < 3) result[index].push(i, j)

//     // move left
//     dfs(land, i, j - 1, result, index);

//     // move up
//     dfs(land, i + 1, j, result, index);
// }

// Greedy 
var findFarmland = function (land) {
    const n = land.length;
    const m = land[0].length;
    var res = [];

    function bottomRight(x1, y1) {
        var x2 = x1;
        var y2 = y1;

        for (var i = x1; i < n && land[i][y1] == 1; i++) {
            x2 = i;
        }

        for (var j = y1; j < m && land[x1][j] == 1; j++) {
            y2 = j;
        }

        return [x1, y1, x2, y2];
    }

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (land[i][j] == 1
                && (i == 0 || land[i - 1][j] == 0)
                && (j == 0 || land[i][j - 1] == 0)) {

                res.push(bottomRight(i, j));
            }
        }
    }

    return res;
};