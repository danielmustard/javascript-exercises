const palindromes = function (input) {

    //for this we will put each letter of the string into an array, we will then reverse the array and compare it to the original array, if they match its a palidrome
  
    let inputArray = input.split(''); //here we have split the input up into an array
    let revArray = input.split('').reverse(); // this is our inputted array but reversed
  
    if (JSON.stringify(inputArray) === JSON.stringify(revArray)){ //we cannot compare two arrays as if they were strings so we need to use JSON.sringify to make the array behave like a string so we can compare them.
      return true;
    }else if (JSON.stringify(inputArray) != JSON.stringify(revArray)){
      return false;
    }else {
      return ('ERROR');
    }
};

// Do not edit below this line
module.exports = palindromes;
