
// Project Brief
// Welcome to Coloring Squares.

// Your task is to build a coloring game similar to the working project above.

// You will need to use HTML, CSS and JS to accomplish this task.

// A few things to think about…
// HTML, CSS:

// How will you make the grid of colors?
// How will you make the grid of blank squares?
// Hint… GRID :P
// JS:

// How does a user choose a color?
// How does drawing work? How can you tell when the user is clicking and dragging?
// Hint, look at the JS events mousedown, mouseup, and mouseover.
// Good luck!


const colors = [
    'red', 'blue', 'green', 'yellow', 'purple', 
    'orange', 'pink', 'brown', 'black', 'white', 
    'gray', 'cyan', 'magenta', 'lime', 'indigo', 
    'violet', 'gold', 'silver'
  ];

  const colorPalette = document.getElementById("color-palette")

  colors.forEach( color =>{
    const colorButton = document.createElement('div')
    colorButton.classList.add('color-button')
    colorButton.style.backgroundColor = color
    colorButton.addEventListener('click', () => {
        selectedColor = color
      });
      colorPalette.appendChild(colorButton);
    });