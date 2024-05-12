/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
    let arr1 = [];
    let arr2 = [];
    traversal(root1, arr1);
    traversal(root2, arr2);
    arr1 = [...arr1, ...arr2].sort((a, b) => a - b);
    return arr1;
};

// inorder traversal
const traversal = (node, arr) => {
    if (!node) return;
    traversal(node.left, arr);
    arr.push(node.val);
    traversal(node.right, arr);
}