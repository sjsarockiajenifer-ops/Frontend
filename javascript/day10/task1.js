let salary = 20000;
salary=25000;
console.log(salary);

const country = "India";
console.log("my country is:",country);

let name = "Arun";
let age = 25;
console.log(`my name is: ${name}, i am ${age} years old`);

let price = 500;
let quantity = 4;
let total=price*quantity;
console.log(`total:${total}`);

function greet(name="guest"){
    console.log(`hello ${name}`)
}
greet("Arun");
// greet();

const colors = ["Red", "Green", "Blue"];
const[firstcolor,secondcolor,thirdcolor]=colors;
console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);

const student = {
name: "Arun",
age: 20,
city: "Chennai"};
const{name,age,city}=student;
console.log(name);
console.log(age);
console.log(city);


const numbers = [10, 20, 30];
const num=[40,50];
add=[...numbers,...num];
console.log(add);

function showNumbers(...numbers){
    console.log(numbers);
}
// showNumbers(10, 20, 30, 40);

const add=(a,b)=>{
    return a+b;
}
console.log(add(10,20));