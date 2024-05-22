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
var sumNumbers = function (root) {
    let answer = 0;

    const helper = (root, numSoFar) => {
        if (!root) return root;

        let newNumber = numSoFar * 10 + root.val;
        if (root.left === null && root.right === null) {
            answer += newNumber;
            return
        }
        helper(root.left, newNumber);
        helper(root.right, newNumber);
    }

    helper(root, 0);
    return answer;
};

