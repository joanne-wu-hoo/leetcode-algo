// https://leetcode.com/problems/remove-duplicates-from-sorted-array

var removeDuplicates = function(nums) {
    let seen = new Set()
    let insertIdx = 0

    for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i]
        if (!seen.has(curNum)) {
            seen.add(curNum)
            nums[insertIdx] = curNum
            insertIdx++
        }
    }

    return insertIdx
};
