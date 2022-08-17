const findTheOldest = function(people) {
  /*

So we need to reduce the array so each object is sorted by oldest to youngest

To do this we calculate age of each object 

YearOfDeath - YearOfBirth = AgeOfPerson

One of the objects is still alive so we must calculate how old they would be today, to get todays year we can do 

const year = new Date().getFullYear();
*/
const currentYear = new Date().getFullYear();
const sortedPeople = people.sort((a,b) =>{

  //with the or operator in this calculation we are basically saying if a.yearOfDeath has no value, use the current year instead!
  aAge = (a.yearOfDeath || currentYear) - a.yearOfBirth;
  
  bAge = (b.yearOfDeath || currentYear) - b.yearOfBirth;

  if (aAge < bAge){
    return 1; 
  }else{
    return -1;
  } 
});

//we are returning index 0 of array as the sort function will always ensure that the value at index 0 is the oldest person
return (sortedPeople[0]);

};


// Do not edit below this line
module.exports = findTheOldest;
