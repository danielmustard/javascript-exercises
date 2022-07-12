const add = function(...args) {
  let total = 0;
  args.forEach(element => {
      total += element;   
  });
  return total;  
};

const subtract = function(...args) {
  return args[0] - args[1];    
};

const sum = function(args) {
  let total = 0;
    args.forEach(element => {
      //console.log(element)
      total += element;
      });
      return total;
	
};

const multiply = function(args) {
  const arrayLenght = args.length;
  let total = 1; 
  for (var i =0; i < arrayLenght; i++){
    total *= args[i];
  }
  return total;
};

const power = function(value1, value2) {
  return value1 ** value2;
};

const factorial = function(value) {
  //const arrayLenght = args.length;
  let total = 1; 
  for (var i = value; i >= 1 ; i--){
    total *= i;
  }
  return total;
};  

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
