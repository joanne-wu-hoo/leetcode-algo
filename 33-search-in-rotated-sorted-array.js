// https://leetcode.com/problems/search-in-rotated-sorted-array/

var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    
    while (left <= right){
        let mid = Math.floor((left+right)/2);
        if (nums[mid] === target) return mid;
        
        // one of the halves is sorted
        
        // if left is sorted
        if (nums[left] <= nums[mid]){
            // check if target is in left half
            if (nums[left] <= target && target <= nums[mid]){
                // go left
                right = mid-1;
            } else {
                // go right
                left = mid+1;
            }
            
        } else {
            // otherwise right is sorted
            // check if target is in right half
            if (nums[mid] <= target && target <= nums[right]){
                // go right
                left = mid+1;
            } else {
                right = mid-1;
            }
        }
    }
    
    return -1;
}
