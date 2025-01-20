// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const data = { name, lastName };
  const jsonData = JSON.stringify(data);

  document.getElementById('output').textContent = jsonData;
})



