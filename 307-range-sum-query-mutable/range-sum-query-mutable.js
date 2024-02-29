/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.numLength = nums.length;
    this.segTree = new Array(this.numLength * 2);
    this.build(nums);
};

NumArray.prototype.build = function (nums) {
    let numLength = this.numLength;
    let j = 0;
    for (var i = numLength; i < numLength * 2; i++) {
        this.segTree[i] = nums[j];
        j++;
    }
    for (i = numLength - 1; i > 0; i--) {
        this.segTree[i] = this.segTree[i * 2] + this.segTree[i * 2 + 1];
    }
}

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
    let numLength = this.numLength;
    index += numLength;
    this.segTree[index] = val;
    while (index > 1) {
        let left = index, right = index;
        if (index % 2 === 0) {
            right = index + 1;
        } else {
            left = index - 1;
        }
        index = Math.floor(index / 2);
        this.segTree[index] = this.segTree[left] + this.segTree[right];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    let numLength = this.numLength;
    left += numLength
    right += numLength;
    let sum = 0;
    while (left <= right) {
        if (left % 2 === 1) {
            sum += this.segTree[left];
            left++;
        }
        if (right % 2 === 0) {
            sum += this.segTree[right];
            right--;
        }
        left = Math.floor(left / 2);
        right = Math.floor(right / 2);
    }
    return sum;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */