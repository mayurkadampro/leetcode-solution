/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    // 1st solution by reverse linkedlist
    // let current = reverseList(head);
    // let index = 0;
    // let result = 0;
    // while (current) {
    //     let val = current.val;
    //     result += Math.pow(2, index) * val;
    //     current = current.next;
    //     index++;
    // }

    // return result;

    // 2nd solution by cal length
    let current = head;
    let length = 0;
    let result = 0;

    while (current) {
        current = current.next;
        length++;
    }

    current = head
    while (current) {
        result += (2 ** --length) * current.val
        current = current.next;
    }

    return result;
};

var reverseList = function (head) {
    let prev = null;
    let curr = head;
    let next = null;

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    head = prev;
    return prev;
};