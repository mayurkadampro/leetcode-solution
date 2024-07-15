/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
    const map = new Map() // used to build tree
    const set = new Set() // save all child nodes

    // PHASE 1: create tree + conserve parent nodes
    for (let [parent, child, isLeft] of descriptions) {
        if (!map.has(parent)) map.set(parent, new TreeNode(parent))
        if (!map.has(child)) map.set(child, new TreeNode(child))

        // conserve parent node
        set.add(child);

        if (isLeft) {
            map.get(parent).left = map.get(child);
        } else {
            map.get(parent).right = map.get(child);
        }
    }

    // PHASE 2: find the root
    for (let [parent] of descriptions) {
        if (!set.has(parent)) {
            return map.get(parent)
        }
    }
};