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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    let bstArr = [];
    let rangeSum = 0;
    inorderTraversal(root, bstArr);
    for (let value of bstArr) {
        if (value >= low && value <= high) {
            rangeSum += value;
        }
    }
    return rangeSum;
};

const inorderTraversal = (root, result) => {
    if (!root) return root;
    inorderTraversal(root.left, result);
    result.push(root.val);
    inorderTraversal(root.right, result);
}