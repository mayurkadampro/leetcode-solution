
//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function (inorder, postorder) {
    let len = inorder.length;
    return helper(inorder, postorder, 0, len - 1, 0, len - 1);
};

const helper = (inorder, postorder, inStart, inEnd, postStart, postEnd) => {
    if (inStart > inEnd) return null;

    let rootVal = postorder[postEnd];
    let root = new TreeNode(rootVal);

    let rootIndex = inStart;
    for (; rootIndex <= inEnd; rootIndex++) {
        if (inorder[rootIndex] === rootVal) break;
    }

    let leftTreeSize = rootIndex - inStart;
    let rightTreeSize = inEnd - rootIndex;

    root.left = helper(inorder, postorder, inStart, rootIndex - 1, postStart, postStart + leftTreeSize - 1);
    root.right = helper(inorder, postorder, rootIndex + 1, inEnd, postEnd - rightTreeSize, postEnd - 1);

    return root;


};