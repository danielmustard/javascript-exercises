const fibonacci = function(num) {
    if (num < 0) return 'OOPS';
    //taking two off the input as we already have the first two numbers witnin the sequence inside our array.
  let seqNum = num - 2 
  //do the calculation and then load it into an array 

  let fib = [1, 1]; 

 for (let i = 0; i < seqNum; i++) {
  let nextItem = fib[i]+fib[i+1];
  
  // adding the new number in the sequence to the array
  fib.push(nextItem);
}

return fib.pop();

};

// Do not edit below this line
module.exports = fibonacci;
