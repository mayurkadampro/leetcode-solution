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
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    if (!root) return [];
    const q = [root];
    const result = [];
    while (q.length) {
        const size = q.length;
        result.push(q[size - 1].val);
        for (let i = 0; i < size; i++) {
            const node = q.shift();
            node.right && q.push(node.right);
            node.left && q.push(node.left);

        }
    }
    return result[result.length - 1];
};