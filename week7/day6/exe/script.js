// Create a function call displayNumbersDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

function displayNumbersDivisible(){
    let sum = 0 ;

    for (let i = 0; i<= 500; i++){
        if (i % 23 ===0 ){
            console.log(i);
            sum += i;
            
        }

    }
    console.log("sum", sum);
    

}

displayNumbersDivisible()
// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 
// 368 391 414 437 460 483
// Sum : 5313


// Bonus: Add a parameter divisor to the function.

// displayNumbersDivisible(divisor)

// Example:
// displayNumbersDivisible(3) : Console.log all the numbers divisible by 3, 
// and their sum
// displayNumbersDivisible(45) : Console.log all the numbers divisible by 45, 
// and their sum




// 🌟 Exercise 2 : Shopping List
// Instructions
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
const shoppingList = ['apple', 'banana', 'orange'];
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.
function myBill(){
    let total = 0
    for (let item of shoppingList){
        if (item in stock && stock[item]>0){
            total += prices[item]
            stock[item]--
        }
    }
    return total
}

myBill()

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1





// Exercise 3 : What’s in my wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01


function changeEnough(itemPrice, amountOfChange){
    const quarters = amountOfChange[0] * 0.25
    const dimes = amountOfChange[1] * 0.10
    const nickels = amountOfChange[2] * 0.05
    const pennies = amountOfChange[3] * 0.01

    const totalChange = quarters + dimes + nickels + pennies;

    if (totalChange >= itemPrice){
        return true
    }else{
        return false
    }
    
}

console.log(changeEnough(4.25, [25, 20, 5, 0]))
console.log(changeEnough(14.11, [2, 100, 0, 0]))




// 🌟 Exercise 4 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.


function hotelCost(){
    let askingForNight     
    do {
        askingForNight = prompt("How many nights will you stay at our hotel?");
        askingForNight = Number(askingForNight);
    } while (!Number.isInteger(askingForNight) || askingForNight <= 0); 

    const totalCost = askingForNight * 140;
    
    return totalCost;
    
    

}

function planeRideCost(){
    let askingForDestination
    do {
        askingForDestination = prompt("what is your destination?");
        if (askingForDestination) askingForDestination = askingForDestination.trim()
    } while (!askingForDestination);

    if (askingForDestination.toLowerCase() ==="london"){
        return 183
    }else if (askingForDestination.toLowerCase() === "paris"){
        return 220
    }else{
        return 300
    }
}

function rentalCarCost(){
    let askingForCar
    do {
        askingForCar = prompt("How long will you rent a car?");
        askingForCar = Number(askingForCar);
    } while (!Number.isInteger(askingForCar) || askingForCar <= 0);

    let totalCostCar = askingForCar * 40
    if (askingForCar > 10){
        totalCostCar = totalCostCar * 0.9 
    }
    return totalCostCar
}

function totalVacationCost(){
    const hotel = hotelCost()
    const plane = planeRideCost()
    const car = rentalCarCost()

    total = hotel + plane + car
    console.log(`the hotel cost is ${hotel}, the plane cost is ${plane} and the car cost is ${car} Total vacation cost: $${total}.` );
    
    
    return total
}

// totalVacationCost()



