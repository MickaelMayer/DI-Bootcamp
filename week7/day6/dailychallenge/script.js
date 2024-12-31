// Create an array which value is the planets of the solar system.

// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".

// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).

let planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "yellow", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "orange", moons: 79 },
    { name: "Saturn", color: "goldenrod", moons: 82 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
];

planets.forEach(planet => {
    let newDiv = document.createElement('div');
    newDiv.classList.add("planet");
    newDiv.style.backgroundColor = planet.color; 

    document.querySelector('section').appendChild(newDiv);


});



    
// Finally append each div to the <section> in the HTML (presented below).

// Bonus: Do the same process to create the moons.

// Be careful, each planet has a certain amount of moons. How should you display them?

// Should you still use an array for the planets ? Or an array of objects ?
