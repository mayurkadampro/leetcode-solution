/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) return head;

    let len = 1;
    let tail = head;

    while (tail && tail.next) {
        len++;
        tail = tail.next;
    }

    if (k % len === 0) return head;
    let rotation = len - k % len;

    let current = head;
    tail.next = head;

    for (let i = 0; i < rotation; i++) {
        tail = tail.next;
        head = tail.next;
    }

    tail.next = null;
    
    return head;
};