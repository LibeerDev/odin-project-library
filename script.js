    // create index for the book
    let bookIndex = 0;

// BUTTON HANDLING

const formContainer = document.getElementById("formContainer");

function toggleFormVisibility() {
    formContainer.classList.toggle("toggle-invis");
}


// BOOK OBJECT PROTOTYPE
const myLibrary = [];

function Book() {
    this.author = author
    this.title = title
    this.numOfPages = numOfPages
    this.wasRead = wasRead
    this.image = image
    this.index = index
}



// Handling submit button functionability

const form = document.getElementById("addBookForm");
form.addEventListener('submit', function (e) {

    e.preventDefault();

    const newBookAuthor = document.getElementById('author').value;
    const newBookTitle = document.getElementById('title').value;
    const newBookNumOfPages = document.getElementById('numOfPages').value;
    const newBookWasRead = document.getElementById('wasRead').checked;
    const newBookImage = document.getElementById('bookImage').files[0];
    const newBookIndex = index;

    // Add book to Library

    function addBookToLibrary() {
        // Add the book to the MyLibrary object

        const newBook = Object.create(Book);
        newBook.author = newBookAuthor;
        newBook.title = newBookAuthor;
        newBook.numOfPages = newBookNumOfPages;
        newBook.wasRead = newBookWasRead;

        newBook.image = newBookImage;

        myLibrary.push(newBook);
        // $ form.reset();
    }

    addBookToLibrary();

    // Display the book
    const book = document.getElementById('book');
    const bookContainer = document.getElementById('book-container');

    const bookCard = document.createElement('div');
    bookCard.classList.add('book');
    bookCard.setAttribute('id', 'book');
    bookCard.setAttribute('bookindex', `${bookIndex}`);
    // increment the index
    bookIndex += 1;

    bookCard.innerHTML = `
                <div style="font-weight: 600;" class="book-left">
                <p class="author">${newBookAuthor}</p>
                <p style="font-style: italic;" class="title">${newBookTitle}</p>
                <p class="num-of-pages">${newBookNumOfPages} <span> pages</span></p>
                <div>
                    <label for="Read?">Read?</label>
                    <input type="checkbox" name="wasRead" id="wasRead" ${newBookWasRead ? 'checked' : ''}>
                </div>
            </div>
            <div class="book-right center">
                <img src="${URL.createObjectURL(newBookImage)}" alt="">
            </div>
            <button class="removeBookButton" onclick="removeButton(this.parentElement, this.parentElement.getAttribute('bookIndex'))">Remove</button>
        `;
    bookContainer.appendChild(bookCard);
});

function removeButton(parentElement, index) {
    // remove the book from the Library object
    
    
    // remove the book from the DOM
    parentElement.remove();
    console.log(myLibrary);
}