
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
    if (!lists) return [];

    const minPriorityQueue = new MinPriorityQueue({ priority: x => x.val });

    for (const head of lists) {
        if (head) {
            minPriorityQueue.enqueue(head);
        }
    }

    let dummyNode = new ListNode(-1, null);
    let current = dummyNode;

    while (!minPriorityQueue.isEmpty()) {
        const { val, next } = minPriorityQueue.dequeue().element;

        current.next = new ListNode(val, next);
        current = current.next;

        if (next) {
            minPriorityQueue.enqueue(next);
        }

    }

    return dummyNode.next;
};