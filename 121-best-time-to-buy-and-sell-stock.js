// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

var maxProfit = function(prices) {
    let maxProfit = 0
    let left = 0
    let right = 1

    while (right < prices.length) {
        let profit = prices[right] - prices[left]
        maxProfit = Math.max(maxProfit, profit)

        if (prices[left] > prices[right]) {
            left = right
            right++
        } else {
            right++
        }
    }

    return maxProfit
}

/*
brute force
- keep track of max profit (initialize to 0)
- start with first value, calculate the profit if we were to sell on every value to the right, while updating max profit
- repeat process with second value all the way to the last value
- at the end, return max profit

can we optimize?
- keep track of max profit (initialize to 0)
- initialize left pointer at 0, right pointer at 1
- calculate the profit & update max profit

while right < length
if left > right, then left = right, right++
if left <= right, then right++


*/
