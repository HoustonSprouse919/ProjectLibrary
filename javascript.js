let myLibrary = []; //array to hold all of our books
function book(title, author, pages, read){ //constructor for new book objects
    this.title = title
    this.author = author
    this.page = pages
    this.readStatus = read
    addBookToLibrary(this)
}
book.prototype.info = function(){ //function in all books to return the info
    return(this.title+" by "+this.author+", "+this.page +" pages, "+this.readStatus+" read");
}

function addBookToLibrary(book){ //takes a book object and adds it to end of myLibrary array
    myLibrary.push(book)
}

function displayBooks(){ //this is here to show all of our books on the page using dom manipulation
const container = document.querySelector('#container'); //selects container we are using
container.replaceChildren();  //clears the container every time we call it so no duplicates
for(var i = 0; i< myLibrary.length; i++){ 
const content = document.createElement('div'); 
content.classList.add('content')
content.textContent= myLibrary[i].info() //adds book info
let button = document.createElement("BUTTON"); //creates button
let text = document.createTextNode("Change read Status"); //adds text to buttons
button.appendChild(text);
let button2 = document.createElement("BUTTON"); //creates button
let text2 = document.createTextNode("Remove this book"); //adds text to buttons
button2.appendChild(text2);
button2.setAttribute("id", i);
button.setAttribute("id", i); //supposed to be id for each button but its the same for all of them
console.log(button.id)
button.addEventListener("click", function(){ //when button is clicked toggles between read and not read
     if(myLibrary[button.id].readStatus == "has"){
        myLibrary[button.id].readStatus = "has not"
     } else{
        myLibrary[button.id].readStatus = "has"
     }
     displayBooks();
  });

  button2.addEventListener("click", function(){ //removes book from list
    myLibrary.splice(button.id,1)
    displayBooks();
 });
container.appendChild(content);
content.appendChild(button);
content.appendChild(button2);
    }
}
function addNew(title, author, pages, readStatus){ //ask user for info on new book
    new book(title, author, pages, readStatus);
    displayBooks();
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

new book("houston's book", "Houston", "55", "has not");
new book("Chainsaw man", "Fujimoto", "Alot", "has");
new book("The Hatchet", "Gray Paulsen", "300", "has");


console.log(myLibrary)
displayBooks();