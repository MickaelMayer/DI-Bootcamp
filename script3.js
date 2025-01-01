// 🌟 Exercise 3 : Transform the sentence
// Instructions
// Add this sentence to your HTML file then follow the steps :


// In the JS file:

// Declare a global variable named allBoldItems.

// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// Create a function called highlight() that changes the color of all the bold text to blue.

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

let allBoldItems = ''

function getBoldItems(){
    allBoldItems = document.querySelectorAll('p strong')
    console.log(allBoldItems);
}

function highlight(){
    getBoldItems()
    allBoldItems.forEach(item =>{
        item.style.color = 'blue'

    })
}

function returnItemsToDefault(){
    getBoldItems()
    allBoldItems.forEach(item =>{
        item.style.color = 'black'

    })
}
getBoldItems()

const paragraph = document.querySelector('p')
paragraph.addEventListener('mouseover',highlight)
paragraph.addEventListener('mouseout',returnItemsToDefault)