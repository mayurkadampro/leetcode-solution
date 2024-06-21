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
var deleteDuplicates = function (head) {
    if (!head) return null;

    let current = head;
    let prev = null;

    while (current) {
        if (prev && prev.val === current.val) {
            prev.next = current.next
        } else {
            prev = current;
        }
        current = current.next;
    }
    return head;
};