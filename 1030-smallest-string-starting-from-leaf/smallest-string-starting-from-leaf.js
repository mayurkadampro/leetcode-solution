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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
    let arr = [];
    helper(root, '', arr);
    arr.sort();
    return arr[0];
};

const helper = (node, val, arr) => {
    if (!node) return;
    let newStr = String.fromCharCode(node.val + 97) + val;
    if (!node.left && !node.right) {
        arr.push(newStr);
        return;
    }
    helper(node.left, newStr, arr);
    helper(node.right, newStr, arr);
}