/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // let fast = head, slow = head
    // for (let i = 0; i < n; i++) fast = fast.next;
    // if (!fast) return head.next

    // while (fast.next) fast = fast.next, slow = slow.next
    // slow.next = slow.next.next
    // return head;

    let len = 0;
    let current = head;

    while (current) {
        len++;
        current = current.next;
    }

    let matchIdx = len - (n - 1);
    let dummyNode = new ListNode(-1, null);
    dummyNode.next = head;
    let prev = dummyNode
    current = head;
    len = 0;
    while (current) {
        len++;
        if (len === matchIdx) {
            prev.next = current.next;
        } else {
            prev = current;
        }
        current = current.next;
    }

    return dummyNode.next;
};