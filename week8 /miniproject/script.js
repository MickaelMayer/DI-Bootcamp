
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
    })

    const emptyGrid = document.getElementById("empty-grid");

    
    const gridRows = 30; 
    const gridCols = 30; 
    
    for (let i = 0; i < gridRows * gridCols; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        emptyGrid.appendChild(gridSquare);
    }

    let selectedColor = null; 

  
    emptyGrid.addEventListener('mousedown', () => (isDrawing = true));
    emptyGrid.addEventListener('mouseup', () => (isDrawing = false));
    
    let isDrawing = false;
    
    document.querySelectorAll('.grid-square').forEach((square) => {
        square.addEventListener('mouseover', () => {
            if (isDrawing && selectedColor) {
                square.style.backgroundColor = selectedColor;
            }
        });
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = selectedColor;
        });
    });

    const colorButtons = document.querySelectorAll('.color-button');
    colorButtons.forEach((button) => {
        button.addEventListener('click', () => {
            colorButtons.forEach((btn) => btn.classList.remove('selected'));
            button.classList.add('selected');
            selectedColor = button.style.backgroundColor;
        });
    });

    document.getElementById('reset').addEventListener('click', () => {
        document.querySelectorAll('.grid-square').forEach((square) => {
            square.style.backgroundColor = 'white';
        });
    });



const words = ["hello","hey","hola"];

const isH =  words.some("H")
// Check if all the elements of the array start with the letter 'h'