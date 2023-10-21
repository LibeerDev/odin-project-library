// Load the library from localStorage when the page loads
window.addEventListener('load', () => {
    const savedLibrary = localStorage.getItem("myLibrary");
    if (savedLibrary) {
        myLibrary = JSON.parse(savedLibrary);
        renderLibrary();
    }
    else {
        let myLibrary = [];
    }
});

// BUTTON HANDLING

const formContainer = document.getElementById("formContainer");

function toggleFormVisibility() {
    formContainer.classList.toggle("hidden");
}

function Book(author, title, numOfPages, wasRead, image) {
    this.author = author
    this.title = title
    this.numOfPages = numOfPages
    this.wasRead = wasRead
    this.image = image
}

const bookImageInput = document.querySelector('#bookImage')

bookImageInput.addEventListener('change', function () {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        localStorage.setItem('bookImage', reader.result);
    });
    reader.readAsDataURL(this.files[0]);
});


// Handling submit button functionability

const form = document.getElementById("addBookForm");

form.addEventListener('submit', function (e) {

    e.preventDefault();

    const newBookAuthor = document.getElementById('author').value;
    const newBookTitle = document.getElementById('title').value;
    const newBookNumOfPages = document.getElementById('numOfPages').value;
    const newBookWasRead = document.getElementById('wasRead').checked;
    const newBookImage = localStorage.getItem('bookImage');

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
        // load the library from the json
        // $ form.reset();
    }

    addBookToLibrary();
    renderLibrary();
    saveLibrary()

    })


function saveLibrary() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function renderLibrary() {
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
                        <input type="checkbox" name="wasRead" id="wasRead" ${book.wasRead ? 'checked' : ''} onchange="updateReadStatus(${index})">
                    </div>
                </div>
                <div class="book-right center">
                    <img src="${book.image}" alt="">
                </div>
                <button data="${index}" class="removeBookButton" onclick="removeBook(${index})">Remove</button>
            `;
        bookContainer.appendChild(bookCard);

    });
}

// Function to update the 'wasRead' status in localStorage
function updateReadStatus(index) {
    myLibrary[index].wasRead = !myLibrary[index].wasRead; // Toggle the status
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary)); // Update localStorage
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    renderLibrary();
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}
