const removeFromArray = function(array, ...args) {
    
    for (const element of args){ //for each element within a possible array of arguments 

        const indexToRemove = array.indexOf(element); // we select the index of the current element we are looking at and then slice that index
                                                    //with the code below
        
        if (indexToRemove > -1){
            let splicedIndex = array.splice(indexToRemove, 1);
            console.log(array);
            return array;
        };
    };


  
};




// Do not edit below this line
module.exports = removeFromArray;
