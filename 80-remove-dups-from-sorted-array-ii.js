// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

/* increment thru numbers
- keep track of idx indiciating where next valid number should be placed
- also keep track of the number of times we've seen the number (frequency counter)
- if we've seen a number <= 2 times, update val at idx with that number
- if we've seen the number > 2 times, do nothing
*/

var removeDuplicates = function(nums) {
    let insertIdx = 0;
    let countOfSeenValues = {};
    
    nums.forEach(num => {
        countOfSeenValues[num] = (countOfSeenValues[num] || 0) + 1;
        if (countOfSeenValues[num] <= 2) {
            nums[insertIdx] = num;
            insertIdx++;
        }
    });
    
    return insertIdx;
};

