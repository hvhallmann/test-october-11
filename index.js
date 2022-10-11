function solution(coins) {
  let currentSum = 1;

  for (let index = 0; index < coins.length; index++) {
    const element = coins[index];

    if (currentSum < coins[index]) {
      return currentSum;
    }
    currentSum += element;
  }

  return currentSum;
}
// 1st case
const coins = [5, 7, 1, 1, 2, 3, 22]; // 20
//2ndcase
// const coins = [1, 1, 1, 1, 1]; // 6
// 3rd case
// const coins = [1, 5, 1, 1, 1, 10, 15, 20, 100]; // 55
// 4th case
// const coins = [1, 2, 5]; // 4

// O(log(n))
coins.sort((a, b) => a - b);

// O(n * log(n)) => n = number of coins
const sol = solution(coins);

console.log("solotion: ", sol);
