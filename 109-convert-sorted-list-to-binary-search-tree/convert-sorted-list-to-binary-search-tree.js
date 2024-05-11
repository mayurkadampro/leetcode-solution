/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = function (head) {
    return helper(head, null);
};

const getMiddle = (start, end) => {
    let slow = start;
    let fast = start;
    while (fast !== end && fast.next !== end) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

const helper = (start, end) => {
    if (start === end) return null;
    const mid = getMiddle(start, end);
    const node = new TreeNode(mid.val);

    node.left = helper(start, mid);
    node.right = helper(mid.next, end);
    return node;
}