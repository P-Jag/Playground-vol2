const add = require("./components/add");
const { multiply, description } = require("./components/multiply");

const result = add(5, 5, 5);
const result2 = multiply(5, 5, 2);
console.log(result, result2, description);
