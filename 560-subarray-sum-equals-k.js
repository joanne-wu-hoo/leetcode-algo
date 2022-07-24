// https://leetcode.com/problems/subarray-sum-equals-k/

// sliding window DOESN'T work for negative numbers

// sum [i,j] = sum[0,j] - sum[0,i]
// we want to know are there any numbers where sum[0,j] - sum[0,i] = target? 
// so we can go thru the array create a map where key = sum of values up to and including the number, value = number of times we've been able to create that sum
// (initialize map with 0 => 1 to capture cases like [3,4], 7 where we need to use all the numbers)
// at each number we also ask does the map contain the value of current sum-target? if so, increment count by the # of times we've been able to create that sum

var subarraySum = function(nums, k) {
    const map = new Map([[0, 1]]);
    let sum = 0;
    let count = 0;
    for (let num of nums) {
        sum = sum + num;
        count += (map.get(sum - k) || 0);
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    
    return count;
};

// detailed explanation here: https://leetcode.com/problems/subarray-sum-equals-k/discuss/408341/Javascript-Brute-Force-and-HashMap-Solution-w-Explanation
