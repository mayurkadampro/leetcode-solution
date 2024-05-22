
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists === null || lists.length === 0) return null;

    const queue = new MinPriorityQueue({ priority: x => x.val });
    for (const head of lists) {
        if (head) {
            queue.enqueue(head)
        }
    }

    let dummyNode = new ListNode()
    let current = dummyNode;

    while (!queue.isEmpty()) {
        const { val, next } = queue.dequeue().element;

        current.next = new ListNode(val)
        current = current.next;

        if (next) {
            queue.enqueue(next)
        }
    }

    return dummyNode.next;
};