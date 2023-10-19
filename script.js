// BUTTON HANDLING

const formContainer = document.getElementById("formContainer");

function toggleFormVisibility() {
    formContainer.classList.toggle("toggle-invis");
}


// BOOK OBJECT PROTOTYPE
let myLibrary = [];

function Book() {
    this.author = author
    this.title = title
    this.numOfPages = numOfPages
    this.wasRead = wasRead
    this.image = image
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

    // Add book to Library

    function addBookToLibrary() {
        // Add the book to the MyLibrary object

        const newBook = Object.create(Book);
        newBook.author = newBookAuthor;
        newBook.title = newBookTitle;
        newBook.numOfPages = newBookNumOfPages;
        newBook.wasRead = newBookWasRead;
        newBook.image = newBookImage;
        
        myLibrary.push(newBook);

        // $ form.reset();
    }

    addBookToLibrary();
    updateLibrary();

    })

function updateLibrary() {
    const bookContainer = document.getElementById('book-container');
    bookContainer.innerHTML = '';

    myLibrary.forEach((book, index) => {
        // Display the book
        const bookCard = document.createElement('div');
        bookCard.classList.add('book');
        bookCard.setAttribute('id', 'book');
    
        bookCard.innerHTML = `
                    <div style="font-weight: 600;" class="book-left">
                    <p class="author">${book.author}</p>
                    <p style="font-style: italic;" class="title">${book.title}</p>
                    <p class="num-of-pages">${book.numOfPages} <span> pages</span></p>
                    <div>
                        <label for="Read?">Read?</label>
                        <input type="checkbox" name="wasRead" id="wasRead" ${book.wasRead ? 'checked' : ''}>
                    </div>
                </div>
                <div class="book-right center">
                    <img src="${URL.createObjectURL(book.image)}" alt="">
                </div>
                <button data="${index}" class="removeBookButton" onclick="removeBook(${index})">Remove</button>
            `;
        bookContainer.appendChild(bookCard);
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    updateLibrary();
}