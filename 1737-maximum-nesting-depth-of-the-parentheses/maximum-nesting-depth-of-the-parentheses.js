/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let result = 0;
    let count = 0;
    for(let c of s){
        if(c === "("){
            count += 1;
        }else if(c === ")"){
            count -= 1;
        }
        result = Math.max(count, result);
    }
    return result;
};