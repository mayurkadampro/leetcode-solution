/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    let current = head;
    let stack = [];  //store all rest part of linkedlist nodes when has child

    while (current) {
        if (current.child) {
            if (current.next) stack.push(current.next); //must check cur.next is null or not before added to stack
            current.next = current.child;
            current.next.prev = current; // because it is doubly linkedlist
            current.child = null; //already assigned to next so now no child anymore. se

        } else if (!current.next && stack.length != 0) {
            current.next = stack.pop();
            current.next.prev = current; // because it is doubly linkedlist
        }
        current = current.next;
    }
    return head; //return reference of head
};