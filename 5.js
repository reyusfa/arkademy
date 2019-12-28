function createMatrix(n) {
  let arr = new Array(n); // Create 1D Array
  
  // Create 2D Array
  for(let i = 0; i < n; i++) {
    arr[i] = new Array(n);
  }
  
  // Filling Array Value
  let num = 1;
  
  for(let y = 0; y < n; y++) {
    for(let x = 0; x < n; x++) {
      arr[y][x] = num++;
    }
  }
  
  //console.table(arr);
  for(let o = 0; o < arr.length; o++) {
    console.log(arr[o].join(' '));
  }
  
  // 
  let sum1 = 0;
  let sum2 = 0;
  
  for(let row = 0; row < arr.length; row++) {
    sum1 += arr[row][row];
    sum2 += arr[row][arr.length - row - 1];
  }
  
  console.log(`Total: ${sum1 * sum2}`);
}

// console log output
createMatrix(3); // return 1 2 3 ... Total: 225

