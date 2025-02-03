const products = require("./products.js");

function findProduct(name) {
    return products.find(product => product.name === name);
}

console.log(findProduct("Laptop"));
