const myLibrary = [];

// Get the dialog element
const dialog = document.getElementById('bookDialog');
// Get the button that opens the dialog
const openDialogBtn = document.getElementById('openDialog');

// form element
const form = document.getElementById('bookForm');
// close dialog button X
const closeDialogBtn = document.getElementById("close-button")
// submit button within form
const submitForm = document.getElementById('submitBtn');

// container for books
const libraryGrid = document.getElementById("library-grid")
const book = document.getElementsByClassName("book")


class Book {

    constructor(title, author, pages, read) {
        this.title = title;
        this.pages = pages;
        this.read = read;
        this.author = author;
    }


    // returns all the information in the book object
    get info() {
        let strRead;

        if (this.read) {
            strRead = 'already read';
        } else {
            strRead = 'not read yet';
        }
        return `${this.title} by ${this.author}, ${this.pages} pages, ${strRead}`;
    }

}

// Take user input and store book into array myLibrary
function addBookToLibrary() {
    event.preventDefault();

    // pull from html fields to create new book objects
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    // Display Form Data
    console.log('Title:', title);
    console.log('Author:', author);
    console.log('Pages:', pages);
    console.log('Read:', read);

    // close dialog and reset the form for new sumissions
    dialog.close();
    form.reset();

    // put those books in the array
    myLibrary.push(new Book(title, author, pages, read));
}

// creates and populates a div for a new book
function createBookDiv(book, index) {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    bookDiv.id = `book-${index}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '╳';
    deleteBtn.className = 'deleteBtn';
    bookDiv.appendChild(deleteBtn);

    const titleP = document.createElement('p');
    titleP.textContent = book.title;
    bookDiv.appendChild(titleP);

    const authorP = document.createElement('p');
    authorP.textContent = `By ${book.author}`;
    bookDiv.appendChild(authorP);

    const pagesP = document.createElement('p');
    pagesP.textContent = `${book.pages} Pages`;
    bookDiv.appendChild(pagesP);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `bookRead-${index}`;
    checkbox.name = `bookRead-${index}`;
    checkbox.value = '0';
    checkbox.checked = book.read;
    bookDiv.appendChild(checkbox);

    const label = document.createElement('label');
    label.htmlFor = `bookRead-${index}`;
    label.textContent = 'Read?';
    bookDiv.appendChild(label);

    return bookDiv;
}

function displayBooks() {
    // Select the library grid element
    const libraryGrid = document.getElementById('library-grid');

    // clears everything in the div to be readded so no duplicates
    libraryGrid.innerHTML = "";

    // Loop through each book in the myLibrary array
    myLibrary.forEach((book, index) => {
        // creates the div and fills it with book info
        const bookDiv = createBookDiv(book, index);
        libraryGrid.appendChild(bookDiv);

        console.log(book.info);

        // Add event listener to the checkbox
        const checkbox = bookDiv.querySelector(`#bookRead-${index}`);
        checkbox.addEventListener('change', (i) => {
            book.read = i.target.checked;
        });

        const deleteBtn = bookDiv.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks();
        });
    });

    addBookButton(libraryGrid);
}

function addBookButton(libraryGrid) {
    const openDialogBtn = document.createElement('button');
    openDialogBtn.textContent = '＋';
    openDialogBtn.id = 'openDialog';

    libraryGrid.appendChild(openDialogBtn);

    // Add an event listener to the button to open the dialog
    openDialogBtn.addEventListener('click', () => {
        dialog.showModal();
    });
}

function formValidation() {
// Checks that none of the forms fields are empty
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');

    if (!title.checkValidity()) {
        document.getElementById('title-error').innerHTML = inpObj.validationMessage;
  }
    if (!author.checkValidity()) {
        document.getElementById('author-error').innerHTML = inpObj.validationMessage;
  }
    if (!pages.checkValidity()) {
        document.getElementById('pages-error').innerHTML = inpObj.validationMessage;
  }

}

// adds a new book to the library once submitted
submitForm.addEventListener('click', () => {
    formValidation();
    addBookToLibrary();
    displayBooks();
});

// closes the dialog and resets the form
closeDialogBtn.addEventListener('click', () => {
    form.reset();
    dialog.close();
});


//creates an example book to display on the screen
function exampleBook() {
    myLibrary.push(new Book('The Lord of the Rings', 'J.R.R. Tolkien', 432, true));
    displayBooks();
}

// on page load, create example book
window.onload = function () {
    exampleBook();
};