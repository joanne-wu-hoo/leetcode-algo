// https://leetcode.com/problems/move-zeroes/

/*
iterate thru array while keeping track of idx of last zero
if val is NOT zero,
swap val with val and idx of last zero
idx of last zero ++

if val is zero, just continue

*/
const moveZeroes = (nums) => {
    let idxOfLastZero = 0;
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== 0){
            [nums[idxOfLastZero],nums[i]] = [nums[i],nums[idxOfLastZero]];
            idxOfLastZero++;
        }
    }
    
    return nums;
}
