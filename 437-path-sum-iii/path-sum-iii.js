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
 * @param {number} targetSum
 * @return {number}
 */

// Brute Force
// var pathSum = function (root, targetSum) {
//     let total = 0;

//     const helper = (root, targetSum) => {
//         if (!root) return root;
//         findPathSum(root, targetSum);
//         helper(root.left, targetSum);
//         helper(root.right, targetSum);
//     }

//     const findPathSum = (root, targetSum) => {
//         if (!root) return root;

//         if (root.val === targetSum) {
//             total++;
//         }

//         return findPathSum(root.left, targetSum - root.val) || findPathSum(root.right, targetSum - root.val);
//     }

//     helper(root, targetSum);
//     return total;
// };

// With HashpMap Gain
var pathSum = function (root, targetSum) {
    let total = 0;
    let sumMap = new Map();
    sumMap.set(0, 1);

    const helper = (root, currSum) => {
        if (!root) return root;

        currSum += root.val;
        if (sumMap.has(currSum - targetSum)) {
            total += sumMap.get(currSum - targetSum);
        }
        sumMap.set(currSum, (sumMap.get(currSum) || 0) + 1);
        helper(root.left, currSum);
        helper(root.right, currSum);
        sumMap.set(currSum, sumMap.get(currSum) - 1)
    };

    helper(root, 0);
    return total;
};





