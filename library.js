const myLibrary = [];

//form inputs
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookLength = document.getElementById('pages');
const bookRead = document.getElementById('read');
const newBookForm = document.getElementById('newBook');

const modal = document.querySelector("dialog");
const addNew = document.querySelector(".addBook").addEventListener("click", (e) => modal.showModal());
const create = document.querySelector(".create").addEventListener("click", (e) => { 
                                                                                    e.preventDefault(); 
                                                                                    addBookToLibrary(bookTitle.value, bookAuthor.value, bookLength.value, bookRead.value);
                                                                                    modal.close();
                                                                                });

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this. pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    // refresh table with new value
    showLibrary();
    newBookForm.reset();
    return
}

function showLibrary() {
    
}