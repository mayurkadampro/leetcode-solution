//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */


const buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;

    let root = new TreeNode(preorder[0]);
    let mid = inorder.indexOf(preorder[0]);

    preorder.shift();
    root.left = buildTree(preorder, inorder.slice(0, mid));
    root.right = buildTree(preorder, inorder.slice(mid + 1));


    return root;
};