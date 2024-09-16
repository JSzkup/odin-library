const myLibrary = [];

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
    // pull from html fields to create new book objects

    // put those books in the array
    myLibrary.push(new Book(title, author, pages, read));

}

// loops through array and displays each book
function displayBooks() {

}

// Get the dialog element
const dialog = document.getElementById('bookDialog');

// Get the button that opens the dialog
const openDialogBtn = document.getElementById('openDialog');

// Add an event listener to the button to open the dialog
openDialogBtn.addEventListener('click', () => {
    dialog.showModal();
});