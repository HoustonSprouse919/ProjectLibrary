let myLibrary = [];
function book(title, author, pages, read){
    this.title = title
    this.author = author
    this.page = pages
    this.readStatus = read
    
}
book.prototype.info = function(){
    return(this.title+" by "+this.author+", "+this.page +" pages, "+this.readStatus+" read");
}

function addBookToLibrary(book){
    myLibrary.push(book)
}
let bookList = document.createElement("ul");

function displayBooks(){
const container = document.querySelector('#container'); 
for(var i = 0; i< myLibrary.length; i++){ //run amount times //goes into container
const content = document.createElement('div');  //creates divs called content
content.classList.add('content')
content.textContent= myLibrary[i].info()
container.appendChild(content);
    }
}
function addNew(){
    var newTitle = prompt("please input title");
    var newAuthor = prompt("please input author name");
    var newPages = prompt("please input number of page");
    var newReadStatus = prompt("please input if you have or haven't read");
    var bookNum = "book"+myLibrary.length
    bookNum = new book(newTitle, newAuthor, newPages, newReadStatus,bookNum);
    addBookToLibrary(bookNum)
}

const book1= new book("houston's book", "Houston", "55", "has not");
const book2= new book("Chainsaw man", "Fujimoto", "Alot", "has");


book1.info()
addBookToLibrary(book1)
addBookToLibrary(book2)
console.log(myLibrary)
displayBooks();