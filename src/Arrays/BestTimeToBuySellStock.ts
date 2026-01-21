/*
121. Best Time to Buy and Sell Stock
Solved
Easy
Topics
premium lock icon
Companies
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


Constraints:
1 <= prices.length <= 105
0 <= prices[i] <= 104

Runtime 2 ms Beats 78.49%
Memory 66.00 MB Beats 52.01%

 */

function maxProfit(prices: number[]): number {
	// buy once and sell once and get max profit
	let minPrice = Infinity, maxProfit=0, profit=0;

	// prices array is empty then return 0
	if(!prices.length){
		return 0
	}

	for(let price of prices){
		// If price is less than minPrice then update the new minimum price to it.
		if(price < minPrice) {
			minPrice = price;
		}

		// Calculate current profit by substracting
		profit = price - minPrice;

		// Update the maxPrice
		if(profit > maxProfit){
			maxProfit = profit
		}
	}
  return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]))//5
console.log(maxProfit([2,1,5,8]))//7
console.log(maxProfit([7,6,4,3,1]))//0
