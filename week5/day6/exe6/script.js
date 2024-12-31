// 🌟 Exercise 6 : Change the navbar
// Instructions
// Create a new structured HTML file and a new Javascript file
/* <div id="navBar">
    <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">My Friends</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">My Pics</a></li>
    </ul>
</div> */



// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
document.getElementById("navBar").setAttribute('id','socialNetworkNavigation')


// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
let newLi = document.createElement('li')
// Create a new text node with “Logout” as its specified text.
let newTextNode = document.createTextNode('Logout')
// Append the text node to the newly created list node (<li>).
newLi.appendChild(newTextNode)
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
document.querySelector('#socialNetworkNavigation ul').appendChild(newLi)
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
let ul = document.querySelector('#socialNetworkNavigation ul')
let firstLi = ul.firstElementChild
let lastLi = ul.lastElementChild
console.log('First link text:', firstLi.textContent);
console.log('Last link text:', lastLi.textContent);




// Exercise 7 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty section:
// <section class="listBooks"></section>

// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
let books = [
    {
        title : 'Lubavitcher Rebbe Memories',
        author : 'Previous Rebbe',
        image : 'https://store.kehotonline.com/mobile/prodinfo.asp?number=EFR-LUBA.SB',
        alreadyRead : true,
    },
    {
        title : 'Yehidouyot',
        author : 'Halperin',
        image : 'https://chabadshop.com/products/%D7%99%D7%97%D7%99%D7%93%D7%95%D7%99%D7%95%D7%AA',
        alreadyRead : true,
    }
]
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

let displayInScrenn = document.querySelector(".listBooks")

books.forEach(book => {
    let newDiv = document.createElement('div');
    newDiv.textContent = `the title is ${book.title} written by ${book.author}`;
    displayInScrenn.appendChild(newDiv)
    
    let BookImage = document.createElement('img')
    BookImage.style.width= '100px'
    BookImage.src = book.image
    newDiv.appendChild(BookImage)

    if (book.alreadyRead === true){
        newDiv.style.color = 'red'
    }
        
});