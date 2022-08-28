// https://leetcode.com/problems/valid-anagram/

// approach 1 
// - create 1 fc, simultaneously going thru s and t. increment counts for s, decrement counts for t.
// - at end, check that all values in fc are 0

var isAnagram = (s,t) => {
    if (s.length !== t.length) return false;
    
    let letterCount = {};
    for (let i = 0; i < s.length; i++){
        letterCount[s[i]] = (letterCount[s[i]] || 0) + 1;
        letterCount[t[i]] = (letterCount[t[i]] || 0) - 1;
    }
    
    return Object.values(letterCount).every(val => val === 0);
}

// -----------

// approach 2 - create a fc for each word
// then go thru s' fc, return false if
// t's fc does not have letter or the values do not match
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const sFC = createFrequencyCounter(s);
    const tFC = createFrequencyCounter(t);
    
    for (let letter in sFC){
        if (tFC[letter] === undefined) return false;
        if (tFC[letter] !== sFC[letter]) return false;
    }
    
    return true;
};

const createFrequencyCounter = (str) => {
    const fc = {};
    
    for (let letter of str){
        fc[letter] = (fc[letter] || 0) + 1;
    }
    
    return fc;
}
