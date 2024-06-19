/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    // 1st solution
    // // Find Mid Point;
    // let slow = head;
    // let fast = head;
    // while (fast && fast.next) {
    //     slow = slow.next;
    //     fast = fast.next.next;
    // }

    // //  Reverse list from mid point
    // let prev = null;
    // let next = slow;
    // while (slow != null) {
    //     next = slow.next;
    //     slow.next = prev;
    //     prev = slow;
    //     slow = next
    // }

    // let left = head;
    // let right = prev;
    // while (right != null) {
    //     if (left.val !== right.val) {
    //         return false;
    //     }
    //     left = left.next;
    //     right = right.next;
    // }
    // return true;

    // 2nd solution
    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        fast = fast.next.next;
        // reverse
        let temp = slow.next;
        slow.next = prev;
        prev = slow
        slow = temp;
    }

    // check linkedlist is even or odd and move slow pointer
    if (fast !== null) {
        slow = slow.next;
    }

    while (slow !== null) {
        if (prev.val !== slow.val) {
            return false
        }
        slow = slow.next;
        prev = prev.next;
    }

    return true;
};