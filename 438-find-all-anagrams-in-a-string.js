// https://leetcode.com/problems/find-all-anagrams-in-a-string/

/*
create fc of target string
sliding window
left, right = 0

while right < s.length
- update fc to account for right most letter (if letter is in the fc)
- if the letter does NOT exist in FC, then we can skip the letter left = right+1
- while count for the right most letter is <0, then we need to minimize the window 
  - increase the count for the left letter fc[s[left]]++
  - left++
- if right-left+1 = p.length then push left index into result
- expand window
*/

var findAnagrams = function(s, p) {
    let fc = getFrequencyCount(p);
    const anagramStartIdxs = [];
    let left = 0;
    let right = 0;
    let fcCopy = {...fc}
    
    while (right < s.length){
        let cur = s[right];
        
        if (fcCopy[cur] !== undefined) fcCopy[cur]--;
                
        // if we're at a letter that is not in target, we can skip it and reset the fc
        if (fcCopy[cur] === undefined) {
            left = right+1;
            fcCopy = {...fc}
        } 

        // if we've encountered too many of a letter, we need to minimize the window
        while (fcCopy[cur] < 0){
            fcCopy[s[left]]++;
            left++;
        }
        
        if (right-left+1 === p.length) anagramStartIdxs.push(left);
        right++;
    }
    
    return anagramStartIdxs;
}



var getFrequencyCount = (str) => {
    let fc = [];
    
    for (let letter of str){
        fc[letter] = (fc[letter] || 0) + 1;
    }
    
    return fc;
}
