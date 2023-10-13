const myLibrary = [];

const addNew = querySelector(".addBook").addEventListener("click", (e) => modalPopup());

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this. pages = pages;
    this.read = read;
}

function addBooktoLibrary() {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    // refresh table with new value
}

function showLibrary() {
    
}