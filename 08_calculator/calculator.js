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

const sum = function() {
  let total = 0;
  args.forEach(element => {
    total += element;
    });
	
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
