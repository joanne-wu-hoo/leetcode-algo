// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/*
sliding window
start left and right pointer at 0
set to keep track of seen letters (will this include value at right or no?)
maxLength

while right < s.length 
    while set has right letter
       remove left most letter
       left++
       
    otherwise,
    add letter to set
    recalc maxLength (Math.max(maxLenth, set size)
    increase right

return maxLength

*/

var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) return s.length

  let maxLength = -Infinity
  let left = 0
  let right = 0
  let seen = new Set() // NOT including val at right

  while (right < s.length) {
    while (seen.has(s[right])){
        seen.delete(s[left])
        left++
    } 
    seen.add(s[right])
    maxLength = Math.max(maxLength, seen.size)
    right++
  }

  return maxLength === -Infinity ? 0 : maxLength
};
