function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a, b) => a - b);

  let cost = 0;

  while (arr.length > 1) {
    let first = arr.shift();
    let second = arr.shift();

    let sum = first + second;
    cost += sum;

    // insert in sorted order
    let i = 0;
    while (i < arr.length && arr[i] < sum) i++;
    arr.splice(i, 0, sum);
  }
	return cost;
  
}

module.exports=mincost;
