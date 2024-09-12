function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        if (this.read) {
            strRead = 'already read'
        } else {
            strRead = 'not read yet'
        }
        return `${title} by ${author}, ${pages} pages, ${strRead}`
    }
}
