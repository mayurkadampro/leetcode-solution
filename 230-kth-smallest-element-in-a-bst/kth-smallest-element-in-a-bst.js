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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let res = [];
    helper(root, k, res);
    return res[k - 1];
};

const helper = (root, k, res) => {
    if (root.left) helper(root.left, k, res);
    res.push(root.val);
    if (root.right) helper(root.right, k, res);
}