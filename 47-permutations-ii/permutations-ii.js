/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let result = [];
    let visited = new Array(nums.length).fill(false);
    nums.sort((a, b) => a - b);
    permutations([], nums, result, visited);
    return result;
};

function permutations(current, remaining, result, visited) {
    if (remaining.length === current.length) {
        result.push(current.slice());
        return;
    }

    // Loop through remaining elements
    for (let i = 0; i < remaining.length; i++) {

        // check for visited
        if (visited[i] || i > 0 && remaining[i] === remaining[i - 1] && !visited[i - 1]) {
            continue;
        }

        // Mark ith index as true visited
        visited[i] = true;

        // Insert the iTH element onto the end of current
        current.push(remaining[i]);

        // Recurse with inserted element removed
        permutations(current, remaining, result, visited);

        // Remove last inserted element for next iteration
        current.pop();

        // After pop Mark ith index as false visited
        visited[i] = false;

    }
}