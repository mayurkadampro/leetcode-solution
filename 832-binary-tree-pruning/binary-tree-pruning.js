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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
    return helper(root);
};

const helper = (root) => {
    if (root === null) return null;
    if (root.left) root.left = helper(root.left);
    if (root.right) root.right = helper(root.right);
    if (!root.left && !root.right && root.val === 0) return null;
    return root;
}