// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

var searchRange = function(nums, target) {
    if (nums.length <1) return [-1,-1];
    return [findStart(nums,target), findEnd(nums, target)]
};

var findStart = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right){
        let mid = Math.floor((left+right)/2);

        if (nums[mid] === target && nums[mid-1] !== nums[mid]){
            return mid;
        } else if (target <= nums[mid]){
            right = mid-1;
        } else {
            left = mid+1;
        }
    }
    
    return -1;
}

var findEnd = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right){
        let mid = Math.floor((left+right)/2);

        if (nums[mid] === target && nums[mid+1] !== nums[mid]){
            return mid;
        } else if (target >= nums[mid]){
            left = mid+1;
        } else {
            right = mid-1;
        }
    }
    
    return -1;
}




/**
Two different binary searches
- One to find the start
- One to find the end

For both binary searches, start with L=0, R=end
While L <= R
M = L+R/2 (round up)
- if val at M > target, shift L so R = M-1
- if val at M < target, shift R, so L = M+1

Finding start
- if val at M = target
- is val to the left different? If so, return the index
- otherwise, we're still in the middle and we need to move left? so R = M-1
- if you can't find it return -1    

Finding end
- if val at M = target
- is val to the right different? If so, return the index
- otherwise, we're still in the middle and we need to move right? so L = M+1
- if you can't find it return -1    


**/
