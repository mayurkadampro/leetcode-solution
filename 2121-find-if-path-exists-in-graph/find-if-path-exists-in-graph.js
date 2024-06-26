/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
    // 1st solution
    // if (n === 1) return true; // Special case where there is only one vertex
    // let visited = new Array(n).fill(false);
    // visited[source] = true;
    // let flag = true;
    // while (flag) {
    //     flag = false;
    //     for (const edge of edges) {
    //         if (visited[edge[0]] !== visited[edge[1]]) {
    //             visited[edge[0]] = true;
    //             visited[edge[1]] = true;
    //             flag = true;
    //         }
    //         if (visited[destination]) return true;
    //     }
    // }
    // return false;

    // 2nd solution
    // Create a hashmap to be used as our adjacency list
    const graph = new Map();

    // Create a set to store our visited nodes
    const visited = new Set();

    // Build adjacency list (undirected)
    for (const [v, e] of edges) {
        if (graph.has(v)) {
            graph.get(v).push(e);
        } else {
            graph.set(v, [e]);
        }

        if (graph.has(e)) {
            graph.get(e).push(v);
        } else {
            graph.set(e, [v]);
        }
    }

    // Define a recursive DFS helper
    function dfs(v) {
        // Add to visited set
        visited.add(v);

        // Get adjacent vertices
        const edges = graph.get(v);

        // For all adjacent vertices, run DFS
        if (edges && edges.length > 0) {
            for (const e of edges) {
                if (!visited.has(e)) dfs(e);
            }
        }
    }

    // DFS from starting input node
    dfs(source);

    // Return true/false if our visited set has our end node
    return visited.has(destination);
};