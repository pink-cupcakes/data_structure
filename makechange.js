(() => {
  const coins = [2, 5];
  const makeChange = (total, memo = {}) => {
    if (total <= 0) {
      return;
    }
    for (const coin of coins) {
      console.log(`The coin is: ${coin} and the total is: ${total}`);
      makeChange(total - coin, memo)
    }
  };
  makeChange(7);
})()