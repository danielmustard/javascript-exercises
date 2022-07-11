const ftoc = function(f) {
  
  celciusValue = (f-32) * 5/9;
  return parseFloat(celciusValue.toFixed(1));
};
//parse float means the float value will not be included if the 
const ctof = function(c) {
  fahrenheitValue = (c * 9/5) + 32;
  return parseFloat(fahrenheitValue.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
