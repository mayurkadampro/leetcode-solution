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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */

class Node {
    constructor(data) {
        this.val = data;
        this.left = null;
        this.right = null;
    }
}


var addOneRow = function (root, val, depth, currentDepth = 1) {
    if (!root) {
        return;
    }
    if (depth === 1) {
        const newNodeForLeft = new Node(val);
        newNodeForLeft.left = root;
        return newNodeForLeft;
    } else if (depth - 1 === currentDepth) {
        const newNodeForLeft = new Node(val);
        newNodeForLeft.left = root.left;
        const newNodeForRight = new Node(val);
        newNodeForRight.right = root.right;
        root.left = newNodeForLeft;
        root.right = newNodeForRight;
        return root;
    }
    addOneRow(root.left, val, depth, currentDepth + 1);
    addOneRow(root.right, val, depth, currentDepth + 1);
    return root;
};