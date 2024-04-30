/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (list, left, right) {
    const dummy = new ListNode(0, list);
    let head = dummy;
    let curr = 1;

    while (curr < left) {
        curr++;
        head = head.next
    };

    let tail = head.next;


    while (left < right) {
        left++;
        const next = tail.next;
        tail.next = next.next;
        next.next = head.next;
        head.next = next;
    }

    return dummy.next;
};
