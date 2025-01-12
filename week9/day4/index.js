// 🌟 Exercise 1 : Colors
// Instructions
// Using this array :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.


colors.forEach((color,index) => console.log(`${index+1} color is ${color}`));

colors.forEach((color,index) => color === 'violet' ? console.log('yeah') : console.log('no'));



// 🌟 Exercise 2 : Colors #2
// Instructions
// Using these arrays :

const colors1 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

// const suffix = (num) => {
//     const ordinal = ["th","st","nd","rd"];

//     return num % 10 === 1? `${num}st` :
//      num  % 10=== 2 ? `${num}nd` :

//      num % 10 === 3 ? `${num}th`:
// };

// (function(){
//     colors1.map(color,index => console.log(`${suffix(index+1)} choice is ${color}`))
// })()

// Exercise 3 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];



// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
// ------2------
// const country = "USA";
// console.log([...country]);


// ['U', 'S', 'A']

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);


// [undefined, undefined]














// 🌟 Exercise 4 : Employees
// Instructions
// Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

const welcomeStudents =  users.map(user =>`hello ${user.firstName}`)

console.log(welcomeStudents);

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.
const fsresident = users.filter((user) => user.role === 'full stack residemt')

// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
const fslName = fsresident.map((user)=> user.lastName)

console.log(fslName);



// Using this array const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];