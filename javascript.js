let myLibrary = [];
function book(title, author, pages, read){
    this.title = title
    this.author = author
    this.page = pages
    this.readStatus = read
    addBookToLibrary(this)
}
book.prototype.info = function(){
    return(this.title+" by "+this.author+", "+this.page +" pages, "+this.readStatus+" read");
}

function addBookToLibrary(book){
    myLibrary.push(book)
}
let bookList = document.createElement("ul");

function displayBooks(){
const container = document.querySelector('#container'); //selects container we are using
container.replaceChildren();  //clears the container every time we call it so no duplicates
for(var i = 0; i< myLibrary.length; i++){ 
const content = document.createElement('div'); 
content.classList.add('content')
content.textContent= myLibrary[i].info() //adds book info
let button = document.createElement("BUTTON"); //creates button
let text = document.createTextNode("Change read Status"); //adds text to buttons
button.appendChild(text);
button.setAttribute("id", i); //supposed to be id for each button but its the same for all of them
console.log(button.id)
button.addEventListener("click", function(){
     if(myLibrary[button.id].readStatus == "has"){
        myLibrary[button.id].readStatus = "has not"
     } else{
        myLibrary[button.id].readStatus = "has"
     }
     displayBooks();
  });
container.appendChild(content);
content.appendChild(button);
    }
}
function addNew(){
    let newTitle = prompt("please input title");
    let newAuthor = prompt("please input author name");
    let newPages = prompt("please input number of page");
    let newReadStatus = prompt("please input if you have or haven't read");
    new book(newTitle, newAuthor, newPages, newReadStatus);
    displayBooks();
}

new book("houston's book", "Houston", "55", "has not");
new book("Chainsaw man", "Fujimoto", "Alot", "has");
new book("The Hatchet", "Gray Paulsen", "300", "has");


console.log(myLibrary)
displayBooks();