// https://leetcode.com/problems/longest-increasing-subsequence


/* Dynamic programming
dp array contains the length of longest subsequence ending at that number
dp[0] = 1
for i = 1 -> nums.length
dp[i] = Math.max(dp[i], 1 + (dp[indices of numbers that are less than current number]))

return  Math.max(...dp) NOT necesarily last entry
 
*/

var lengthOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(1)
    
    for (let i = 1; i < nums.length; i++){
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp)
};


// This also works but is less space efficient becuase we are creating an array to hold the possible subsequence lengths instead of just overwriting an entry in dp array
var lengthOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(1)
    
    for (let i = 1; i < nums.length; i++){
        const possibleSubsequenceLengths = []
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                possibleSubsequenceLengths.push(dp[j])
            }
        }
        const maxSubsequenceLength = possibleSubsequenceLengths.length ? Math.max(...possibleSubsequenceLengths) : 0
        dp[i] = 1 + maxSubsequenceLength
    }

    return Math.max(...dp)
};
