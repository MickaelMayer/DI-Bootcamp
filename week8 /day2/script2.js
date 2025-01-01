// 🌟 Exercise 2 : Work with forms
// Instructions
// Copy the code below, into a structured HTML file:




// Retrieve the form and console.log it.
const form = document.querySelector('form')

console.log(form);

// Retrieve the inputs by their id and console.log them.
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const submmit = document.getElementById('submit')

console.log(fname,lname,submmit);

// Retrieve the inputs by their name attribute and console.log them.


// const fnameByAttribut = document.querySelector('name="firstname"')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const fname = document.getElementById('fname').value.trim()
    const lname = document.getElementById('lname').value.trim()

    if (fname === "" || lname === ''){
        alert('please fill out all fields')
        return
    }


    const usersAnswer = document.querySelector('.usersAnswer');
    usersAnswer.innerHTML = ''; 
    const li1 = document.createElement('li');
    li1.textContent = `First Name: ${fname}`;
    const li2 = document.createElement('li');
    li2.textContent = `Last Name: ${lname}`;
    usersAnswer.appendChild(li1);
    usersAnswer.appendChild(li2);
})
// When the user submits the form (ie. submit event listener)
// use event.preventDefault()
// get the values of the input tags,
// make sure that they are not empty,


// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>


