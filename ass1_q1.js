//define books and authors
var books = [
    { title: "Data Structures and Algorithm Analysis in C++",
      publisher: "Pearson",
      authors: [
       {firstName: "Mark", lastName: "Weiss" }]
      },

    { title: "Foundations of Finance",
      publisher: "Pearson",
      authors: [
       {firstName: "Arthur", lastName: "Keown" },
       {firstName: "John", lastName: "Martin" }]
      },

    { title: "Literature for Composition",
      publisher: "Longman",
      authors: [
       {firstName: "Sylvan", lastName: "Barnet" },
       {firstName: "William", lastName: "Cain" },
       {firstName: "William", lastName: "Burto" }]
      }
 ];

function outputBooks() {
  //add 'let' so that each scope has it's own variable
    for (let i=0; i<books.length; i++) {
       document.write("<h2>" + books[i].title + "</h2>");
       document.write("<strong>" + books[i].publisher + "</strong>"+ "<br>" + "<br>");
       outputAuthors(books[i]);
    }
    
 
 function outputAuthors(book) {
    for (let i=0; i<book.authors.length; i++) {
      document.write("Author's Name: ");
      document.write(book.authors[i].firstName + ' ' + book.authors[i].lastName + "<br>");
      
    }
 }
}
 outputBooks();