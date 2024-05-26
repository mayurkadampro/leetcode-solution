
var MedianFinder = function () {
    this.minHeap = new MinPriorityQueue();
    this.maxHeap = new MaxPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if (this.maxHeap.isEmpty() || num < this.maxHeap.front().element) {
        this.maxHeap.enqueue(num);
    } else {
        this.minHeap.enqueue(num);
    }

    if (this.maxHeap.size() - this.minHeap.size() > 1) {
        this.minHeap.enqueue(this.maxHeap.dequeue().element);
    } else if (this.minHeap.size() - this.maxHeap.size() > 1) {
        this.maxHeap.enqueue(this.minHeap.dequeue().element);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (this.minHeap.size() > this.maxHeap.size()) {
        return this.minHeap.front().element;
    } else if (this.minHeap.size() < this.maxHeap.size()) {
        return this.maxHeap.front().element;
    } else {
        return (this.minHeap.front().element + this.maxHeap.front().element) / 2;
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */