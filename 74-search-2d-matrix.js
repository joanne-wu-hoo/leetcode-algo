// https://leetcode.com/problems/search-a-2d-matrix/

var searchMatrix = function(matrix, target) {
    for (let row of matrix){
        if (row[0] <= target && target <= row[row.length-1]){
            return binarySearch(row, target);
        }
    }
    
    return false;
}

const binarySearch = (nums, target) => {
    let left = 0;
    let right = nums.length-1;
    
    while (left <= right){
        let mid = Math.floor((left+right)/2);
        
        if (nums[mid] === target) return true;
        
        if (target < nums[mid]){
            right = mid-1;
        } else {
            left = mid+1;
        }
    }
    
    return false;
}


/*
go through each row
if target is between first and last entry, conduct a binary search
have binary search return true or false

*/
