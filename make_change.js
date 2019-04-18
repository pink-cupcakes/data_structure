(async () => {
  let total = process.argv[2]
  console.log(total)
  result = 0;
  const innerChange = async(innerTotal) => {
    let coins = [1, 5, 10, 25, 100, 500, 10000];
    // console.log('First inner total: ' + innerTotal)
    if (innerTotal === 0) {
      console.log('The inner total is ' + innerTotal);
      return 1;
    };
    if (innerTotal < 0) {
      // console.log('Should be 0')
      return 0;
    }
    for (let coin of coins) {
      console.log('The inner total is: ' + innerTotal + '. The coin is: ' + coin);
      let increment = await innerChange(innerTotal - coin);
      // console.log('The increment is: ' + increment)
      result += await increment;
      // console.log('The result is: ' + result);
    };
    return 0;
  };

  await innerChange(total);
  console.log('FINAL:' + result);
})()