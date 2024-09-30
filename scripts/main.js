const myLibrary = [];

// Get the dialog element
const dialog = document.getElementById('bookDialog');
// Get the button that opens the dialog
const openDialogBtn = document.getElementById('openDialog');

// form element
const form = document.getElementById('bookForm');
// submit button within form
const submitForm = document.getElementById('submitBtn');

// container for books
const libraryGrid = document.getElementById("LibraryGrid")


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;


    // TODO place this function in Book prototype
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
    console.log('Author:', author);
    console.log('Pages:', pages);
    console.log('Read:', read);

    // close dialog and reset the form for new sumissions
    dialog.close();
    form.reset();

    // put those books in the array
    myLibrary.push(new Book(title, author, pages, read));

}

// loops through array and displays each book
function displayBooks() {
    // Select the library grid element
    const libraryGrid = document.getElementById('library-grid');

    // Clear the existing books in the library grid
    libraryGrid.innerHTML = '';

    // Loop through each book in the myLibrary array
    myLibrary.forEach((book, index) => {
        // Create a new div for the book
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        bookDiv.id = `book-${index}`;


        // TODO recreate with proper js
        // Add book details
        bookDiv.innerHTML = `
            <p>${book.title}</p>
            <p>By ${book.author}</p>
            <p>${book.pages} Pages</p>
            <input type="checkbox" id="bookRead-${index}" name="bookRead-${index}" ${book.read ? 'checked' : ''}>
            <label for="bookRead-${index}">Read?</label><br>
        `;

        // Add the book div to the library grid
        libraryGrid.appendChild(bookDiv);

        // Add event listener to the checkbox
        const checkbox = bookDiv.querySelector(`#bookRead-${index}`);
        checkbox.addEventListener('change', (e) => {
            book.read = e.target.checked;
        });
    });
}


// Add an event listener to the button to open the dialog
openDialogBtn.addEventListener('click', () => {
    dialog.showModal();
});

// adds a new book to the library once submitted
submitForm.addEventListener('click', () => {
    addBookToLibrary();
    displayBooks();
});