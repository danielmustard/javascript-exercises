const repeatString = function(word, number) {
    if (number >= 0){
        return word.repeat(number);
    }else{
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
