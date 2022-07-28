// https://leetcode.com/problems/first-bad-version/


/*
binary search
M = floor(L+R/2)
- if val@M is good, go R: L = mid + 1
- if val@M is bad
   - if this the first bad version? (check if val@(M-1) is good), if so, return M
   - otherwise go L: R = mid - 1

*/


var solution = function(isBadVersion) {
    return function(n) {
        let left = 0;
        let right = n;
        
        while (left <= right){
            let mid = Math.floor((left+right)/2);
            
            if (isBadVersion(mid)){
                // if this the first bad version? if so return mid
                if (!isBadVersion(mid-1)) return mid;
                // other, we want to go left
                right = mid - 1;
            } else {
                // otherwise, if version is good, go right
                left = mid + 1;
            }
        }
        
    }
}
