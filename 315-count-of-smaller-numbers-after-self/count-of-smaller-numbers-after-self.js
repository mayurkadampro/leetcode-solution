/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
    if (nums == null || nums.length == 0) return [];  // Base Cases
    let result = new Array(nums.length).fill(0);     // ans array
    let idxArr = nums.map((num, idx) => ({ num, idx }));   // idxarr store element value and its index
    Divide(idxArr, 0, nums.length - 1, result);        // call mergeSort function 
    return result;                                   // return ans;
};

const Divide = (arr, start, end, result) => {
    if (start >= end) return;    // base case
    const mid = Math.floor(start + (end - start) / 2);  // calculate mid
    Divide(arr, start, mid, result);  // left side of array
    Divide(arr, mid + 1, end, result);  // right side of array
    Conquer(arr, start, mid, end, result)  // merge both side
}

const Conquer = (arr, start, mid, end, result) => {
    let merge = []   // store sorted element
    let leftIdx = start;  // index of first element of left side array
    let rightIdx = mid + 1; // index of first element of right side array
    let minCount = 0;     // track how mony smaller element found
    while (leftIdx <= mid && rightIdx <= end) {           // Run until both array have numbers
        if (arr[leftIdx].num <= arr[rightIdx].num) {  // if right number is greater than or equal to left number 
            result[arr[leftIdx].idx] += minCount;   // store the number of min number count which is face till now to its index
            merge.push(arr[leftIdx]);               // push smaller element in sorted array
            leftIdx++;                              // increse left count  
        } else {
            minCount++;                             // found a smaller number so increse the min count
            merge.push(arr[rightIdx]);              // push smaller element in sorted array
            rightIdx++;                             // increse right count
        }
    }
    // if left array still have numbers
    while (leftIdx <= mid) {
        result[arr[leftIdx].idx] += minCount;
        merge.push(arr[leftIdx]);
        leftIdx++;
    }
    // if right array still have numbers
    while (rightIdx <= end) {
        merge.push(arr[rightIdx]);
        rightIdx++;
    }
    // modify array
    for (let i = start; i <= end; i++) {
        arr[i] = merge[i - start]    // sort numbers in original array using merge sorted array 
    }
};