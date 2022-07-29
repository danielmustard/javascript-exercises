const palindromes = function (input) {
  // \W is used to find any none word characters, so we can use this to sanitize our input.
  const noChar = /[\W_]/g;
  //Removing any none characters
  const sanitizedInput = input.toLowerCase().replace(noChar,"");
  //Reversing the input string 
  let revString = sanitizedInput.split('').reverse().join('') // this is our input reversed

  //console.log(sanitizedInput);
  //console.log(revString);

  if (revString === sanitizedInput){
    return true;
  }else if (revString != sanitizedInput){
    return false;
  }else{
    return 'ERROR'
  };
};

// Do not edit below this line
module.exports = palindromes;
