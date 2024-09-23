// https://leetcode.com/problems/climbing-stairs

/*
3 steps, possible options = [1,2]
- 1 -> 2
        - 1 -> 1
              - 1 = 0 (possible way!)
              - 2 = -1 (<0 so stop)
        - 2 -> 0 (possible way!)
- 2 -> 1

We can abstract this by saying:
numWaysToClimbNSteps = numWaysToClimbNSteps(n-1) +numWaysToClimbNSteps(n-2)
*/

var climb = (n) => {
  // return early cases
  if (n === 0) return 0
  if (n === 1) return 1
  if (n === 2) return 2

  // "base cases"
  const dp = [1,2]

  for (let i = 2; i < n; i++){
    // use formula to calculate values
    dp[i] = dp[i-1] + dp[i-2]
  }

  // return last entry
  return dp[n-1]
}

