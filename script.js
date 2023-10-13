// BUTTON HANDLING

const formContainer = document.getElementById("formContainer");

function toggleFormVisibility() {
    formContainer.classList.toggle("toggle-invis");
}


// BOOK OBJECT HANDLING
const myLibrary = [];

function Book() {
    this.author = author
    this.title = title
    this.numOfPages = numOfPages
    this.wasRead = wasRead
    this.image = image
}

function addBookToLibrary() {
  // do stuff here
}

myLibrary.forEach((book) => {
    console.log(book.title);
});

// GETTING INPUT HANDLING

form = document.getElementById("addBookForm");
form.addEventListener('submit', function (e) {

    e.preventDefault();

    const newBookAuthor = document.getElementById('author').value;
    const newBookTitle = document.getElementById('title').value;
    const newBookNumOfPages = document.getElementById('numOfPages').value;
    const newBookWasRead = document.getElementById('wasRead').checked;
    const newBookImage = document.getElementById('bookImage').files[0];

    // Add the book to the MyLibrary object

    const newBook = Object.create(Book);
    newBook.author = newBookAuthor;
    newBook.title = newBookAuthor;
    newBook.numOfPages = newBookNumOfPages;
    newBook.wasRead = newBookWasRead;
    newBook.image = newBookImage;

    myLibrary.push(newBook);

    console.log(myLibrary);
    
})