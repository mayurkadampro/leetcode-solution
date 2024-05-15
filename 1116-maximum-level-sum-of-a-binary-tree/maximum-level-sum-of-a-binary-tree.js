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
var maxLevelSum = function (root) {
    if (!root) return 0;
    let maxSum = -Infinity;
    let maxLevel = 0;
    let currentLevel = 0;

    const q = [root];

    while (q.length) {
        currentLevel += 1;
        let currentLevelSum = 0
        const levelSize = q.length;
        for (let i = 0; i < levelSize; i++) {
            const currentNode = q.shift();
            currentLevelSum += currentNode.val
            if (currentNode.left) q.push(currentNode.left)
            if (currentNode.right) q.push(currentNode.right)

        }

        if (currentLevelSum > maxSum) {
            maxSum = currentLevelSum;
            maxLevel = currentLevel;
        }
    }
    return maxLevel;
};