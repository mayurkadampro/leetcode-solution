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
    let stack = [];

    while (current) {
        if (current.child) {
            if (current.next) stack.push(current.next);
            current.next = current.child;
            current.child.prev = current;
            current.child = null;
        } else if (current.next === null && stack.length !== 0) {
            current.next = stack.pop();
            current.next.prev = current;
        }
        current = current.next;
    }
    return head;
};