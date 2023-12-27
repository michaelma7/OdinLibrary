//form inputs
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookLength = document.getElementById('pages');
const bookRead = document.getElementById('read');

//other DOM cache
const newBookForm = document.getElementById('newBook');
const table = document.querySelector('.library');
const rows = document.querySelector('.rows');
const modal = document.querySelector("dialog");

//event listeners
const addNew = document.querySelector(".addBook").addEventListener("click", (e) => modal.showModal());
const create = document.querySelector(".create").addEventListener("click", (e) => { 
                                                                                    e.preventDefault(); 
                                                                                    myLibrary.addBookToLibrary(bookTitle.value, bookAuthor.value, bookLength.value, bookRead.value);
                                                                                    modal.close();
                                                                                });

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library {
    constructor() {
        this.shelf = [];
    }

    addBookToLibrary() {
        let newBook = new Book(title, author, pages, read);
        this.shelf.push(newBook);
        newBookForm.reset();
        displayLibrary();
    }

    changeReadStatus(index) {
        let current = this.shelf[index].read
        if(current === 'Yes') {
            this.shelf[index].read = 'No';
        } else {
            this.shelf[index].read = 'Yes';
        };
        displayLibrary();
    }

    removeBook(index) {
        this.shelf.splice(index, 1);
        displayLibrary();
    }
}

function displayLibrary() {
    rows.replaceChildren();
    myLibrary.shelf.forEach(book=> {
        let row = rows.insertRow();
        let title = row.insertCell();
        let author = row.insertCell();
        let page = row.insertCell(); 
        let read = row.insertCell();
        let action = row.insertCell();
        title.innerHTML = book.title;
        author.innerHTML = book.author;
        page.innerHTML = book.pages;
        read.innerHTML = book.read;
        action.innerHTML = "<button class='status' name='" + (myLibrary.shelf.length-1) + "'>Set Read</button> <button class='delete' id='" 
                            + (myLibrary.shelf.length-1) + "'>Remove</button>";
        let button = document.querySelector('.status').addEventListener('click', (e) => {myLibrary.changeReadStatus(e.target.name);});
        let remove = document.getElementById(`${myLibrary.shelf.length-1}`).addEventListener('click', (e) => {myLibrary.removeBook(e.target.id);});  
    });
}

const myLibrary = new Library();