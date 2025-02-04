const {readFile, writeFile } = require('./fileManager.cjs')
// import { readFile, writeFile } from "fs";
// import  people  from "./data.js";
// import { log } from "console";

// function calculatAgeAverage() {
//     const totalAge = people.reduce((sum, person) => sum + person.age, 0);
//     return totalAge / people.length;
  
    // }
// console.log("Average Age:", calculatAgeAverage());


readFile('Hello World.txt', (err, data) => {
    if (err){
        console.log('error reading file',err);
    } else {
        console.log(data);
    }

    writeFile('Bye World.txt',"I wrote that",(err)=>{
        if (err){
            console.log('error',(err));
        }else{
            console.log("succes");
            
        }
    })
})