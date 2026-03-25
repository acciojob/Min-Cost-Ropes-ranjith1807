function minCost(arr) { 
  let cost = 0;
  arr.sort((a, b) => a - b);

  while (arr.length > 1) {
    
    let first = arr.shift();
    let second = arr.shift();

    let sum = first + second;
    cost += sum;

    arr.push(sum);
    arr.sort((a, b) => a - b);
  }

  return cost;
}
module.exports = { minCost };