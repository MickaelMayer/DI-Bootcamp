import  people  from "./data.js";

function calculatAgeAverage() {
    const totalAge = people.reduce((sum, person) => sum + person.age, 0);
    return totalAge / people.length;
  
    }
console.log("Average Age:", calculatAgeAverage());