const reverseString = function(inputString) {
    //first we must split name so each letter is a member of array 
    const splitString = inputString.split('')
    //the split name now holds the value like this, for example name 'dan' ['d', 'a', 'n']
    //Now we reverse the array
    const reverseString = splitString.reverse()
    
    //Now the array looks like this, for example name 'dan' ['n','a','d']
    
    //we can then return the array as a normal string with the .join function 

    return reverseString.join('');
    
};

// Do not edit below this line
module.exports = reverseString;
