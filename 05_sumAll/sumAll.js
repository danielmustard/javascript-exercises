const sumAll = function(value1, value2) {
    let overallAddition = 0;
    if (Number.isInteger(value1) == true && Number.isInteger(value2) == true){
       for (let i = value1; i <= value2; i++){
        overallAddition += i;
       } 
       return overallAddition;
    }else{
        return ('ERROR')
    }

};


// Do not edit below this line
module.exports = sumAll;
