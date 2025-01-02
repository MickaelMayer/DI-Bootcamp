
// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.
function creatMadLibs(){
const form = document.querySelector('form')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const noun = document.getElementById('noun')
    const adjective = document.getElementById('adjective')
    const person = document.getElementById('person')
    const verb = document.getElementById('verb')
    const place = document.getElementById('place')


    if (noun.value.trim()===''|| adjective.value.trim()===''||person.value.trim()===''|| verb.value.trim()===''||
    place.value.trim()===''){
        alert('please fill out all the fields')
        return
    }

    const stroytemplate = `once upon a time , it was a ${noun.value}, who ${adjective.value} ${person.value}, he was always ${verb.value} at this ${place.value}`

    const story = stroytemplate

    const storyContainer = document.getElementById('story')

    storyContainer.textContent = story
});
}

creatMadLibs()