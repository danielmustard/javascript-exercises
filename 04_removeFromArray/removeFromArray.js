const removeFromArray = function(array, ...args) {
    let updatedArray = array; 

    args.forEach(removeElement); //for each arugument passed in to remove, we run the remove element function. 

    function removeElement(element){
        const indexToRemove = updatedArray.indexOf(element); // we select the index of the current element we are looking at and then slice that index
                                                            //with the code below
        if (indexToRemove > -1){
            let splicedIndex = updatedArray.splice(indexToRemove, 1);
        };
    
    }
    return updatedArray;
};




// Do not edit below this line
module.exports = removeFromArray;
