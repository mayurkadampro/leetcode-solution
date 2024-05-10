
//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    // Base case: if the tree is empty...
    if (root == null) {
        return root;
    }

    // Call the function recursively for the left subtree...
    invertTree(root.left);
    // Call the function recursively for the right subtree...
    invertTree(root.right);

    let curr = root.left;
    root.left = root.right;
    root.right = curr;
    return root;
};