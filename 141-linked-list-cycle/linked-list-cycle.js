/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // Two Pointer
    // let slow = head;
    // let fast = head;

    // while (fast !== null && fast.next !== null) {
    //     slow = slow.next;
    //     fast = fast.next.next;
    //     if (slow === fast) return true;
    // }
    // return false;

    // One Pointer
    let fast = head;

    while(fast && fast.next){
        head = head.next;
        fast = fast.next.next;
        if(head === fast) return true;
    }
    return false;
};