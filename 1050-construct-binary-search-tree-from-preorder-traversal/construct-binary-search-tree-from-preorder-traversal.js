
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = function (preorder) {
    return helper(preorder, 0, preorder.length);
};

const helper = (preorder, startIndex, endIndex) => {

    if (startIndex >= endIndex) return null;

    let rootValue = preorder[startIndex];
    let rootNode = new TreeNode(rootValue);

    let i = startIndex + 1;
    while (i <= endIndex - 1 && preorder[i] < rootValue) {
        i++;
    }

    rootNode.left = helper(preorder, startIndex + 1, i);
    rootNode.right = helper(preorder, i, endIndex);

    return rootNode;
}