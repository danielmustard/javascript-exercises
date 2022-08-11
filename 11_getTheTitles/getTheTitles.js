const getTheTitles = function(books) {
    bookTitles = [];

  //For each item within the passed in array we get the book title and add it to our own array called [bookTitles]
  books.forEach(book => {
      //we add each book title to our array
    bookTitles.push(book.title);
  });
  //we return the array once the for each loop is done
  return bookTitles;

};

// Do not edit below this line
module.exports = getTheTitles;
