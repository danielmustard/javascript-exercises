const sumAll = function(value1, value2) {
    if (value1 > 0 && value2 > 0 && Number.isInteger(value1) == true && Number.isInteger(value2) == true){ //checking value entered it greater that 0 and that it is a integer
        let total = 0;
        if (value1 < value2){ //if first value is less that second value we add up from first value
            for (let i = value1; i <= value2; i++){
                total += i;
               }
            } else if(value1 > value2){ //opposite of above if statment 
                for (let i = value2; i <= value1; i++){
                    total += i;
                   }
            }
        return total;
    }else{
        return ('ERROR');
    }
};


// Do not edit below this line
module.exports = sumAll;


// let overallAddition = 0;
// if(value1 > 0 || value2 > 0){
//     return ('ERROR');        
// }else if (Number.isInteger(value1) == true && Number.isInteger(value2) == true){
//    for (let i = value1; i <= value2; i++){
//     overallAddition += i;
//    } 
//    return overallAddition;
// }else{
//     return ('ERROR')
// }