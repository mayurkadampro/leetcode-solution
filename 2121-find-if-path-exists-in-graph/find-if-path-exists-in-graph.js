/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
    if (n === 1) return true; // Special case where there is only one vertex
    let visited = new Array(n).fill(false);
    visited[source] = true;
    let flag = true;
    while (flag) {
        flag = false;
        for (const edge of edges) {
            if (visited[edge[0]] !== visited[edge[1]]) {
                visited[edge[0]] = true;
                visited[edge[1]] = true;
                flag = true;
            }
            if (visited[destination]) return true;
        }
    }
    return false;
};