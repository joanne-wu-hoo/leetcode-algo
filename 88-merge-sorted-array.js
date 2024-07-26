// https://leetcode.com/problems/merge-sorted-array/

/*
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] 
*/


var merge = function(nums1, m, nums2, n) {
    m--
    n--

    while (m + n >= -1) {
        let insertIndex = m + n + 1
        if ( (nums1[m] > nums2[n] ) || n < 0) {
            nums1[insertIndex] = nums1[m]
            m--
        } else {
            nums1[insertIndex] = nums2[n]
            n--
        }
    }
};

/*
start from the last number of both arrays & compare the two values
initialize insertIndex at the end of nums1

if the value for nums2 is >= nums1, insert nums2 at insertIdx
else insert nums1 at insertIdx

*/
