// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

let star = "*"
let count = 1

while (count < 6 ){
    console.log(star);
    star += "*"
    count++
}

for (let i = 1; i <6; i++){
    let star = ""
    for (let a = 1; a <= i; a++){
        star+= "*"
    }
    console.log(star);
    
}

