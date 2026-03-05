/*
1025. Divisor Game
Easy
Alice and Bob take turns playing a game, with Alice starting first.

Initially, there is a number n on the chalkboard. On each player's turn,
that player makes a move consisting of:

Choosing any integer x with 0 < x < n and n % x == 0.
Replacing the number n on the chalkboard with n - x.
Also, if a player cannot make a move, they lose the game.

Return true if and only if Alice wins the game, assuming both players play optimally.

Example 1:
Input: n = 2
Output: true
Explanation: Alice chooses 1, and Bob has no more moves.

Example 2:
Input: n = 3
Output: false
Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.

Constraints:
1 <= n <= 1000

solution 1
Runtime 5 ms Beats 2.13% O(n^2)
Memory 56.01 MB Beats 10.64% O(n)

solution 2
Runtime 0 ms Beats 100.00% O(1)
Memory 55.95 MB Beats 10.64% O(1)
 */

function divisorGame(n: number): boolean {
  //function canDivide(num:number, y:number):boolean{
  //  while(y>0) {
  //    if(num%y === 0){
  //      return true;
  //    }
  //    y--;
  //  }
  //  return false
  //}

  //let x=n-1, res=0;
  //while(x>0){
  //  if(canDivide(n, x)){
  //    res++
  //  } else {
  //    res--;
  //  }
  //  x--
  //}

  //return res%2!==0;

  //Solution 2 pattern analysis
  return n%2===0
};

console.log(divisorGame(1))//false
console.log(divisorGame(2))//true
console.log(divisorGame(3))//false
console.log(divisorGame(4))//true
console.log(divisorGame(5))//false
console.log(divisorGame(6))//true
console.log(divisorGame(7))//false
console.log(divisorGame(8))//true