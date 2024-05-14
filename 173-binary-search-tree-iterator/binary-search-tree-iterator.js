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
 */

class BSTIterator {
    constructor(root) {
        this.stack = [];
        this._pushLeftNodes(root);
    }

    hasNext() {
        return this.stack.length > 0;
    }

    next() {
        const node = this.stack.pop();
        this._pushLeftNodes(node.right);
        return node.val;
    }

    _pushLeftNodes(node) {
        while (node) {
            this.stack.push(node);
            node = node.left;
        }
    }
};