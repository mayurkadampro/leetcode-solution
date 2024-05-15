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

    if (!root) return root;
    root.left = helper(root.left);
    root.right = helper(root.right);

    return (root.val || root.left || root.right) ? root : null;
}