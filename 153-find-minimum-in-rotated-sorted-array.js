// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

var findMin = function(nums) {
    if (nums.length === 1) return nums[0];
    if (nums[0] < nums[nums.length-1]) return nums[0];
    
    return findPivot(nums);
};

var findPivot = (nums) => {
    let left = 0;
    let right = nums.length-1;
    
    while (left <= right){
        let mid = Math.floor((left+right)/2);

        // check for pivot
        // - if mid is greater than mid+1, then return mid+1
        // - if mid is less than mid-1, then return mid
        if (nums[mid] > nums[mid+1]) return nums[mid+1];
        if (nums[mid] < nums[mid-1]) return nums[mid];
        
        // one of the sides is going to be sorted, pivot will NOT be in it
        if (nums[left] < nums[mid]){
            // if left is sorted, go right
            left = mid + 1;
        } else {
            // if right is sorted, go left
            right = mid - 1;
        }
    }
}
