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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
    let count = 0;

    const helper = (node) => {
        if (!node) return [];
        if (!node.left && !node.right) return [1];

        // Recursively count leaves in the left subtree.
        let leftLeaves = helper(node.left);
        // Recursively count leaves in the right subtree.
        let rightLeaves = helper(node.right);

        for (let left of leftLeaves) {
            for (let right of rightLeaves) {
                /*
                If the sum of the number of leaves in the left and right subtrees is less than or equal 
                to distance, increment count.
                */
                if (left + right <= distance) {
                    count++;
                }
            }
        }

        return leftLeaves.concat(rightLeaves).map(leaf => leaf + 1).filter(leaf => leaf < distance);
    }

    helper(root);
    return count;
};

