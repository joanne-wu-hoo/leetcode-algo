// https://leetcode.com/problems/coin-change/description/?envType=study-plan-v2&envId=top-interview-150

// https://www.youtube.com/watch?v=H9bfqozjoqs&ab_channel=NeetCode

/* BFS w/ backtracking - queue - FIFO - push/shift
each entry in queue
- currentAmount, coins, coinCount, minCoinCount = Infinity

if at any point the cointCount is greater than minCoinCount OR currentAmount < 0, abandon
if currentAmount = 0, update minCoinCount

at end return minCoinCount (or -1 if its Infinity)
*/
var coinChange = function(coins, amount) {
    if (amount === 0) return 0
    if (coins.every(val => val > amount)) return -1 // if array is sorted can just take first value, also not sure if this is nec
    
    let minCoinCount = Infinity;
    let queue = [[amount, 0]]

    while (queue.length) {
        let [curAmount, numCoins] = queue.shift()
        if (curAmount < 0) {
            continue
        } else if (numCoins > minCoinCount) {
            continue
        } else if (curAmount === 0) {
            minCoinCount = Math.min(numCoins, minCoinCount)
        } else {
            coins.forEach(coin => queue.push([curAmount - coin, numCoins+1]))
        }

    }

    return minCoinCount === Infinity ? -1 : minCoinCount
};

/* Dynamic programming
return early cases
- if every coin amount is greater than amount, return -1
- if amount is 0, return 0

dp array where each entry = minimum number of coins needed to sum up to value
dp[0] = 0
for i = 1 -> amount, fill in dp array
dp[i] = 1 + min(dp[i-coin1], dp[i-coin2], etc...)

return dp at amount

*/

var coinChange = function(coins, amount) {
    if (amount === 0) return 0
  
    let dp = new Array(amount+1).fill(Infinity)
    dp[0] = 0

    for (let i = 1; i <= amount; i++) {
        let minCoins = []
        for (let coinVal of coins) {
            if (i - coinVal >= 0) {
                minCoins.push(dp[i-coinVal])
            }
        }
        dp[i] = 1 + Math.min(...minCoins)
    }


    return dp[amount] === Infinity ? -1 : dp[amount]
}
