// https://leetcode.com/problems/valid-parentheses/

/*
Whenever we encounter an open paren, add to the stack
Whenever we encounter a close paren, pop last item off of stack 
- if the parens do NOT match, return false
- otherwise, keep going

at the end if the stack is empty, return true; otherwise, return false
*/

var PAREN_PAIRS = {
    "{": "}",
    "(": ")",
    "[": "]"
}

var OPEN_PARENS = Object.keys(PAREN_PAIRS)
var CLOSE_PARENS = Object.values(PAREN_PAIRS)

var isValid = function(s) {
    const seenParens = []
    
    for (let paren of s) {
        if (OPEN_PARENS.includes(paren)) {
            seenParens.push(paren)
        } else {
            const lastSeenParen = seenParens.pop()
            if (PAREN_PAIRS[lastSeenParen] !== paren) return false
        }
    }

    // if there are any unmatched parens at the end, invalid string
    return seenParens.length === 0
};


