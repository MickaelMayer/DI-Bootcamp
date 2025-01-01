// 🌟 Exercice 4 : Volume of a sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
// <!doctype html> 
// <html lang="en"> 
//     <head> 
//         <meta charset="utf-8"> 
//         <title>Volume of a Sphere</title> 
//         <style>  
//             body {
//                 padding-top:30px;
//             } 

//             label,input {
//                 display:block;
//             }  
//         </style> 
//     </head> 
//     <body> 
//         <p>Input radius value and get the volume of a sphere.</p> 
//         <form  id="MyForm"> 
//             <label for="radius">Radius</label><input type="text" name="radius" id="radius" required> 
//             <label for="volume">Volume</label><input type="text" name="volume" id="volume"> 
//             <input type="submit" value="Calculate" id="submit">    
//         </form> 
//     </body> 
// </html> 

document.getElementById('MyForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
    const radiusInput = document.getElementById('radius');
    const volumeInput = document.getElementById('volume');

    const radius = parseFloat(radiusInput.value);

    if (isNaN(radius) || radius <= 0) {
        alert('Please enter a valid radius greater than 0.');
        return;
    }

    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    


    volumeInput.value = volume.toFixed(2); 
});
