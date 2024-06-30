class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
        this.freq = 1;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node(null, null);
        this.tail = new Node(null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    insertHead(node) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }

    removeNode(node) {
        const next = node.next;
        const prev = node.prev;
        prev.next = next;
        next.prev = prev;
    }

    removeTail() {
        const node = this.tail.prev;
        this.removeNode(node);
        return node.key;
    }

    isEmpty() {
        return this.head.next.val === null;
    }
}


/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
    this.freqMap = new Map();
    this.nodeMap = new Map();
    this.capacity = capacity;
    this.curSize = 0;
    this.leastFreq = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
    const node = this.nodeMap.get(key);
    if (!node) return -1;

    this.freqMap.get(node.freq).removeNode(node);

    if (node.freq === this.leastFreq && this.freqMap.get(node.freq).isEmpty()) {
        this.leastFreq += 1;
    }

    node.freq += 1;

    if (!this.freqMap.get(node.freq)) {
        this.freqMap.set(node.freq, new DoublyLinkedList());
    }

    this.freqMap.get(node.freq).insertHead(node);
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */

LFUCache.prototype.put = function (key, value) {
    if (this.capacity === 0) return;
    let node = this.nodeMap.get(key);
    if (!node) {
        this.curSize += 1;
        if (this.curSize > this.capacity) {
            let tailKey = this.freqMap.get(this.leastFreq).removeTail();
            this.nodeMap.delete(tailKey);
            this.curSize -= 1;
        }
        let newNode = new Node(key, value);

        if (!this.freqMap.get(1)) {
            this.freqMap.set(1, new DoublyLinkedList())
        }

        this.freqMap.get(1).insertHead(newNode);
        this.nodeMap.set(key, newNode);
        this.leastFreq = 1;
    } else {
        node.val = value;
        this.freqMap.get(node.freq).removeNode(node);

        if (node.freq === this.leastFreq && this.freqMap.get(node.freq).isEmpty()) {
            this.leastFreq += 1;
        }

        node.freq += 1;

        if (!this.freqMap.get(node.freq)) {
            this.freqMap.set(node.freq, new DoublyLinkedList());
        }

        this.freqMap.get(node.freq).insertHead(node);
    }
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */