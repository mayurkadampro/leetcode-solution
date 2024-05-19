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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum, result = []) {
    helper(root, targetSum, [], result);
    return result;
};

const helper = (root, targetSum, currentSum, result) => {
    if (!root) return root;
    if (root.val === targetSum && (!root.left && !root.right)) {
        result.push([...currentSum, root.val]);
        return;
    }
    currentSum.push(root.val);
    helper(root.left, targetSum - root.val, currentSum, result);
    helper(root.right, targetSum - root.val, currentSum, result);
    currentSum.pop();
    return root;
}