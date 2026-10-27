let company = "ABC Technologies";
function showEmployee(){
    let employee = "Arun";
    console.log(employee);
    console.log(company);
}
showEmployee();
console.log(employee);


if (true) {
    var age = 25;
    const city = "Chennai";
    console.log(age);
console.log(city);

}
console.log(age);
console.log(city);


console.log(a);
var a=40;
let b=50;
console.log(b);
function greet(){
    console.log("welcome to javascript");
}
greet();

function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    }
    return count;
}
let counter=createCounter();
counter();
counter();
counter();

function add(a, b) {
    console.log(a + b);
}
function subtract(a, b) {
    console.log(a - b);
}
function calculate(a, b, callback) {
    callback(a, b);
}
calculate(20, 10, add);
calculate(20, 10, subtract);