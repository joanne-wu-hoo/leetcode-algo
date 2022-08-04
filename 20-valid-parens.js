// https://leetcode.com/problems/valid-parentheses/

const parenPairs = {
    "(": ")",
    "[": "]",
    "{": "}"
}

/*
iterate thru the string and keep track of the parens we've seen with a stack
at each value, check if the current paren closes the last paren in the stack
- YES --> remove the last entry of the stack
- NO --> add the cur paren to the stack

at the end if the stack is empty, return true; otherwise, return false
*/

var isValid = function(s) {
    let seenParens = [];
    
    for (let paren of s){
        const lastSeenParen = seenParens[seenParens.length-1];
        if (parenPairs[lastSeenParen] === paren) {
            seenParens.pop();
        } else {
            seenParens.push(paren);
        }
    }
    
  
    return seenParens.length === 0;
}
