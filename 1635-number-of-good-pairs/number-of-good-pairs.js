/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    // 1st solution time O(N^2) space O(1)
    // let pairNum = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length; j++){
    //         if(i < j && nums[i] === nums[j]){
    //             pairNum += 1;
    //         }
    //     }
    // }
    // return pairNum;

    // 2nd solution time O(N) space O(N)
    const map = {}
    let count = 0;
    for (const number of nums) {
        if (map[number]) {
            count += map[number];
            map[number] += 1;
        } else {
            map[number] = 1;
        }
    }
    return count
};