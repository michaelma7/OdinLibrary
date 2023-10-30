const myLibrary = [];

//form inputs
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookLength = document.getElementById('pages');
const bookRead = document.getElementById('read');


const newBookForm = document.getElementById('newBook');
const table = document.querySelector('.library');
const rows = document.querySelector('.rows');
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
    this.pages = pages;
    this.read = read;
}

function displayLibrary() {
    rows.replaceChildren();
    myLibrary.forEach(book=> {
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
        action.innerHTML = "<button class='status' name='" + (myLibrary.length-1) + "'>Set Read</button> <button class='delete' id='" 
                            + (myLibrary.length-1) + "'>Remove</button>";
        let button = document.querySelector('.status').addEventListener('click', (e) => {changeReadStatus(e.target.name);});
        let remove = document.getElementById(`${myLibrary.length-1}`).addEventListener('click', (e) => {removeBook(e.target);});  
    });
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    newBookForm.reset();
    displayLibrary();
}

function changeReadStatus(index) {
    let current = myLibrary[index].read;
    if (current === 'Yes') {
        myLibrary[index].read = 'No';
    } else {
        myLibrary[index].read = 'Yes';
    };
    //refresh display. can i do it without deleting everything?
    displayLibrary(); 
}

function removeBook(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}