/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // Non Intuition solution
    // let a = headA, b = headB;
    // while (a !== b) {
    //     a = !a ? headB : a.next
    //     b = !b ? headA : b.next
    // }
    // return a;

    // Intuition solution
    let current = headA;
    let lenOfA = 0;
    while (current) {
        lenOfA++;
        current = current.next;
    }

    current = headB
    let lenOfB = 0;
    while (current) {
        lenOfB++;
        current = current.next;
    }

    let diff = Math.abs(lenOfA - lenOfB);
    if (lenOfA > lenOfB) {
        current = headA;
        while (diff > 0) {
            diff--;
            current = current.next;
        }

        while (current) {
            if(current === headB) return current;
            current = current.next;
            headB = headB.next;
        }

    } else {
        current = headB;
        while (diff > 0) {
            diff--;
            current = current.next;
        }

        while (current) {
            if(current === headA) return current;
            current = current.next;
            headA = headA.next;
        }
    }
};  
