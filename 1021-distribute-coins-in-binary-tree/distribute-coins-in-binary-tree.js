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
 * @return {number}
 */
var distributeCoins = function (root) {
    let moves = 0;

    const helper = (root) => {
        if (!root) return 0;

        let leftMoves = helper(root.left);
        let rightMoves = helper(root.right);

        root.val = leftMoves + rightMoves + (root.val - 1);
        moves += Math.abs(root.val);
        return root.val;
    }

    helper(root)
    return moves;
};

