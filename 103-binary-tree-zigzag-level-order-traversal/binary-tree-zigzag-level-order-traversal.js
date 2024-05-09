/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    // handle edge case
    if (root == null) return [];

    // create result and queue, and flag for zigzag level
    let queue = [root]
    let result = [];
    let leftToRight = true;

    // loop while queue is not empty
    while (queue.length > 0) {


        // calc number of nodes at queue level
        let len = queue.length;

        // create level size array
        let level = [];

        // loop until all nodes at current level has traversed
        for (let i = 0; i < len; i++) {

            // pop from left of queue (FIFO)
            let node = queue.shift();

            // push or unshift values to sub-array depending on traversal order
            if (leftToRight) level.push(node.val);
            else level.unshift(node.val);

            // push left and right child nodes of current node (if exist)
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // switch direction, and push sub-array to output array
        leftToRight = !leftToRight;
        // finally push each level values into final result
        result.push(level);
    }
    return result;
};