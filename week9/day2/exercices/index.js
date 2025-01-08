// exercices 1

// #1
// funcOne(); // Alerts: "inside the funcOne function 3"
// With const: Throws a TypeError due to reassignment.

// #2
// funcThree(); // Alerts: "inside the funcThree function 0"
// funcTwo(); // Updates global `a` to 5.
// funcThree(); // Alerts: "inside the funcThree function 5"
// With const: Throws a TypeError due to reassignment.

// #3
// funcFour(); // Sets `window.a` to "hello".
// funcFive(); // Alerts: "inside the funcFive function hello"

// #4
// funcSix(); // Alerts: "inside the funcSix function test"
// With const: Still works, alerts "inside the funcSix function test".

// #5
// First alert: "in the if block 5"
// Second alert: "outside of the if block 2"
// With const: Same behavior, no reassignment issues.


// exercices 2

// function winBattle(){
//     return true;
// }



const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);


// exercices 3 
const isString = value => typeof value === 'string';

console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0])); 


// exe4 
const sum = (a,b) => a+b

console.log(sum(10,44));


// exe5

function convertToGrams(weightInKg) {
    return weightInKg * 1000;
}

console.log(convertToGrams(5)); 


const convertToGramsExpression = function(weightInKg) {
    return weightInKg * 1000;
};

console.log(convertToGramsExpression(5)); 


const convertToGramsArrow = weightInKg => weightInKg * 1000;
console.log(convertToGramsArrow(5)); 


// exe6
(function(numberOfChildren, partnerName, geographicLocation, jobTitle){
    const sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`

    const par = document.getElementById("exe")
    par.innerHTML = sentence
})("a","b",'c','d')


// exe7






// exe8
function makeJuice(size) {
    function addIngredients(ing1, ing2, ing3) {
        document.body.innerHTML = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, and ${ing3}.`;
    }
    addIngredients('apple', 'banana', 'orange');
}
makeJuice('large');



function makeJuice(size) {
    const ingredients = [];
    
    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {
        document.body.innerHTML = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
    }

    addIngredients('apple', 'banana', 'orange');
    addIngredients('pineapple', 'mango', 'strawberry');
    displayJuice();
}
makeJuice('large');