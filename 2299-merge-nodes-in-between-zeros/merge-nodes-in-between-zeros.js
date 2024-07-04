/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
    if (!head) return null;
    let dummyNode = new ListNode(-1, null);
    let sumNode = dummyNode;
    let current = head.next;
    let sum = 0;

    while (current) {
        if (current.val === 0) {
            sumNode.next = new ListNode(sum, null);
            sumNode = sumNode.next;
            sum = 0;
        } else {
            sum = sum + current.val;
        }

        current = current.next;
    }
    return dummyNode.next;
};