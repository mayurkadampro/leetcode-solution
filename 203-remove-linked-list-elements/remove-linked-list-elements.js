/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (!head) return null;

    let current = head;
    let prev = null;
    while (current) {
        if (prev && current.val === val) {
            prev.next = current.next;
        } else {
            prev = current;
        }
        current = current.next;
    }

    return head.val == val ? head.next : head;





















    // if (!head) return head;
    // let dummy = head;
    // let current = head;
    // let prev = dummy;

    // while (current != null) {
    //     if (current.val === val) {
    //         prev.next = current.next;
    //     } else {
    //         prev = current;
    //     }
    //     current = current.next;
    // }
    // return dummy.val === val ? dummy.next : dummy;
};