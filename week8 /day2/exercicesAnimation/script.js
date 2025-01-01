// 🌟 Exercise 1: Timer
// Instructions
// Using this HTML code:




// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
setTimeout(() => {
    alert("Hello World");
}, 2000);

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
setTimeout(() => {
    const container = document.getElementById('container');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "Hello World";
    container.appendChild(newParagraph);
}, 2000);

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
const container = document.getElementById('container');
let intervalId;

function addParagraph() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "Hello World";
    container.appendChild(newParagraph);

    if (container.children.length >= 5) {
        clearInterval(intervalId); 
    }
}

intervalId = setInterval(addParagraph, 2000);

const button = document.getElementById('stopButton'); 
button.addEventListener('click', () => {
    clearInterval(intervalId); 
});
