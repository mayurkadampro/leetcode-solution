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
    if (!head) return head;

    let current = head;
    let prev = null;
    let sum = 0;
    let dummyNode = new ListNode(0, null);
    let newNode = dummyNode;
    while (current) {
        if (current.val === 0) {
            if (sum != 0) {
                newNode.next = new ListNode(sum, current.next);
                newNode = newNode.next;
            }
            sum = 0;
        } else {
            sum += current.val;
        }
        prev = current;
        current = current.next;
    }

    return dummyNode.next;
};