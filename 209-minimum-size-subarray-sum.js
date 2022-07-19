// https://leetcode.com/problems/minimum-size-subarray-sum/

/*
sliding window
left=0
right=0
min=infinity
sum=0 // sum including right

while right < nums.length 
expand window if sum < target
minimize window if sum >= target

return min === infinity ? 0 : min

where to do the Math.min(min, right-left) calculation? and is it right-left+1 or right-left

*/

var minSubArrayLen = function(target, nums) {
    let min = Infinity;
    let left = 0;
    let right = 0;
    let sum = nums[0] // sum including right most number [left, right]
    
    while (right < nums.length){           
        if (sum < target) {
            right++;
            sum += nums[right];
        } else {
            // we have found a qualifying subarray
            min = Math.min(min, right-left+1);
            sum -= nums[left];
            left++;
        }
    }
    
    return min === Infinity ? 0 : min;
}
