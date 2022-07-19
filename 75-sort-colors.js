// https://leetcode.com/problems/sort-colors/

/*
go thru and collect counts of 0's, 1's, and 2's
then go thru array again
- if zeroCount > 0, replace value with 0, etc.
- if oneCount > 0, replace value with 1, etc.

*/

var sortColors = function(nums) {
    let zeroCount = 0;
    let oneCount = 0;
    let twoCount = 0;
    
    nums.forEach(n => {
        if (n === 0) zeroCount++;
        if (n === 1) oneCount++;
        if (n === 2) twoCount++;
    });
    
    for (let i = 0; i < nums.length; i++){
        if (zeroCount){
            zeroCount--;
            nums[i] = 0;
        } else if (oneCount){
            oneCount--;
            nums[i] = 1;
        } else if (twoCount){
            twoCount--;
            nums[i] = 2;
        }
    }
    
    return nums;    
};
