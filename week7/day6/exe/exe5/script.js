// 🌟 Exercise 5 : Users
// Instructions
// Create a new structured HTML file and a new Javascript file

// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>





// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
console.log(document.getElementById('container'));
// Change the name “Pete” to “Richard”.
document.querySelectorAll('.list')[0].querySelectorAll('li')[1].textContent = "Richard"
console.log(document.querySelectorAll('.list')[0].querySelectorAll('li')[1]);
// Delete the second <li> of the second <ul>.
document.querySelectorAll('.list')[1].querySelectorAll('li')[1].remove()
console.log(document.querySelectorAll('.list')[1].querySelectorAll('li'));
// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
const lists = document.querySelectorAll('.list');
lists.forEach((ul) => {
    ul.querySelector('li').textContent='Mickael'
})

// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.
const addToUl = document.querySelectorAll('.list');
lists.forEach((ul) => {
    ul.classList.add('student_list');
});
console.log(addToUl); // 
const div1 = document.querySelectorAll('.list')[0]
div1.classList.add('university','attendence')
console.log(div1);

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
// Change the font size of the whole body.

const styleContainer = document.getElementById('container')
styleContainer.style.backgroundColor = 'light blue'
styleContainer.style.padding = '10px'
console.log(styleContainer);




// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
