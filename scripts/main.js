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

}

// loops through array and displays each book
function displayBooks() {

}