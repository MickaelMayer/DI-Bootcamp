
// 🌟 Exercise 1 : Change the article
// Instructions
// Copy the code below, into a structured HTML file:

// Using a DOM property, retrieve the h1 and console.log it.

// Using DOM methods, remove the last paragraph in the <article> tag.

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
const firstH1 = document.querySelector('h1')

console.log(firstH1);


const deleteLastArticle = document.querySelector('article')
const lastParagraph = deleteLastArticle.lastChild

deleteLastArticle.removeChild(lastParagraph)

const h2 = document.querySelector('h2')
h2.addEventListener('click', function(){
    h2.style.backgroundColor = 'red'
})

const h3  = document.querySelector('h3')

h3.addEventListener('click', function(){
    h3.style.display = "none"
})

const button = document.createElement('button');
button.textContent = 'Make Bold';

document.querySelector('article').appendChild(button)

button.addEventListener('click', function(){
    const paragraph = document.querySelectorAll('p')
    paragraph.forEach(p => {
        p.style.fontWeight = 'bold'
    });
})


