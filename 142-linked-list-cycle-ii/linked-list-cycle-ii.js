/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }

    if (fast == null || fast.next == null) return null;

    while (head != slow) {
        head = head.next;   // moving head by 1...
        slow = slow.next;   // moving slow by 1 as well...
    }
    return head; // Or return slow, they both will return the tail where cycle starts...
};