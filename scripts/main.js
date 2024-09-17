const myLibrary = [];

// Get the dialog element
const dialog = document.getElementById('bookDialog');
// Get the button that opens the dialog
const openDialogBtn = document.getElementById('openDialog');
// form element
const form = document.getElementById('bookForm');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;


    // TODO place this function in Boko prototype
    this.info = function () {
        if (this.read) {
            strRead = 'already read'
        } else {
            strRead = 'not read yet'
        }
        return `${title} by ${author}, ${pages} pages, ${strRead}`
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
    console.log('Pages:', pages);
    console.log('Read:', read);
    console.log('Author:', author);

    // close dialog and reset the form for new sumissions
    dialog.close();
    form.reset();

    // put those books in the array
    myLibrary.push(new Book(title, author, pages, read));

}

// loops through array and displays each book
function displayBooks() {

}

// Add an event listener to the button to open the dialog
openDialogBtn.addEventListener('click', () => {
    dialog.showModal();
});

const submitForm = document.getElementById('submitBtn');

// adds a new book to the library once submitted
submitForm.addEventListener('click', addBookToLibrary)