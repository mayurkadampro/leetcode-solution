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
 * @return {number[]}
 */
var rightSideView = function (root) {
    // DFS Solution
    // if (!root) return [];
    // let res = [];
    // pre(root, 0);
    // return res;

    // function pre(node, h) {
    //     if (!node) return;
    //     res[h] = node.val;
    //     pre(node.left, h + 1);
    //     pre(node.right, h + 1);
    // }

    // BFS SOLUTION
    if (!root) return [];
    const q = [root];
    const result = [];
    while (q.length) {
        const size = q.length;
        result.push(q[size - 1].val);
        for (let i = 0; i < size; i++) {
            const node = q.shift();
            node.left && q.push(node.left);
            node.right && q.push(node.right);
        }
    }
    return result;
};