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
 * @param {number} targetSum
 * @return {number}
 */

var pathSum = function (root, targetSum) {
    let total = 0;

    const helper = (root, targetSum) => {
        if (!root) return root;
        findPathSum(root, targetSum);
        helper(root.left, targetSum);
        helper(root.right, targetSum);
    }

    const findPathSum = (root, targetSum) => {
        if (!root) return root;

        if (root.val === targetSum) {
            total++;
        }

        return findPathSum(root.left, targetSum - root.val) || findPathSum(root.right, targetSum - root.val);
    }

    helper(root, targetSum);
    return total;
};



