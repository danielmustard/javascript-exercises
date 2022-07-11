const leapYears = function(year) {

    if (year % 100 == 0 && year % 400 == 0){ //if year can be devided by 100 and 400 then it is a leap year
        return true;
    }else if (year % 100 == 0){ //Any year that can be devided by 100 is not a leap year.......
        return false;
    }else if (year % 4 == 0){ //if year can be devided by four after above checks are done then it is a leap year.
        return true;
    }else{ //in any other cases where above rules cannot be met we can just return false! 
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
