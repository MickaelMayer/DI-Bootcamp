// 🌟 Exercise 1 : List of people
// Instructions
const people = ["Greg", "Mary", "Devon", "James"];
people.shift()

// Part I - Review about arrays
// Write code to remove “Greg” from the people array.

// Write code to replace “James” to “Jason”.
people[3]="Jason"
console.log(people);

// Write code to add your name to the end of the people array.
people.push("Mickael")
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people[0]);

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
const peopleSliced = people.slice(1,3)
console.log(peopleSliced);

// Write code that gives the index of “Foo”. Why does it return -1 ?
const indexFoo = people.indexOf("Foo")
console.log((indexFoo));

// Create a variable called last which value is the last element of the array.
const last = people[people.length - 1];
console.log((last));

// Hint: What is the relationship between the index of the last element in the array and the length of the array?


// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for (const person of people){
    console.log((person));
    
}
// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
for (const person of people){
    if (person == "Devon"){
        console.log((person));
        break;
    } 
}
// Hint: take a look at the break statement in the lesson.


// 🌟 Exercise 2 : Your favorite colors
// Instructions
// Create an array called colors where the value is a list of your five favorite color
const colors = ["blue","red","yellow","green","violet"]


//  Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
const suffixes = ["st", "nd", "rd"]; 
for (let i = 0; i < colors.length; i++) {
  const position = i + 1; 
  let suffix = "th"; 
  
  if (position <= 3) {
    suffix = suffixes[position - 1];
  }

  console.log(`My ${position}${suffix} choice is ${colors[i]}`);
}

// 🌟 Exercise 3 : Repeat the question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)



// let userNumber
// do{
//     userNumber = prompt("enter a number")
// }while(Number(userNumber)<10)



// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?


// 🌟 Exercise 4 : Building Management
// Instructions:
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
// Console.log the number of floors in the building.
console.log(building.numberOfFloors);

// Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan);



// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

const totalRent = sarahRent + danRent;

if (totalRent > danRent){
    building.numberOfRoomsAndRent.dan[1]= 1200
    console.log(building.numberOfRoomsAndRent.dan[1]);
    
}else{
    console.log("no need to update");

}


// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.


// Exercise 6 : Rudolf
// Instructions
// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'reindeer'
// }
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”


// Exercise 7 : Secret Group
// Instructions
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”