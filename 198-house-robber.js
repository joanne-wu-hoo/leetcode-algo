// https://leetcode.com/problems/house-robber/description/

// Recursive (top-down)
var rob = (nums, i=nums.length-1) => {
    if (i < 0) return 0
    return Math.max(nums[i] + rob(nums, i-2), rob(nums, i-1))
}

// Recursive + memo (top-down)
var rob = (nums, i=nums.length-1, memo={}) => {
    if (i < 0) return 0
    if (i in memo) return memo[i]
    const result = Math.max(nums[i] + rob(nums, i-2), rob(nums, i-1))
    memo[i] = result
    return result
}

// Iterative (bottom-up)
var rob = (nums) => {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])

    // memo stores the maximum robbed amount from robbing houses from 0 -> current house index
    const memo = [nums[0], Math.max(nums[0], nums[1])]

    for (let i = 2; i < nums.length; i++) {
        // rob current house + maximum of robbing all houses i-2 down OR get maximum of robbing all houses i-1 down
        const result = Math.max(nums[i] + memo[i-2], memo[i-1])
        memo.push(result)
    }

    return memo[nums.length-1]
}

// Top-down = take big problem and keep breaking into smaller problems
// Bottom-up = start with sub problem and build up 
