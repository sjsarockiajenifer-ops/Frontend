let numbers = [10, 20, 30, 40, 50];
const data=numbers.map((e,i)=>{
    return e*2;
})
console.log(data);

let number = [10, 15, 20, 25, 30, 35, 40];
const sum=number.filter((e,i)=>{
    if(e%2===0){
        return e;
    }
})
console.log(sum);

let num = [10, 25, 35, 50, 60];
const fin=num.find((e,i)=>{
    if(e>30){
        return e;
    }
})
console.log(fin);

let students = [
    { id: 1, name: "Arun", mark: 75 },
    { id: 2, name: "Priya", mark: 90 },
    { id: 3, name: "Kumar", mark: 65 }
];
let result = students.find(function(student) {
    return student.id === 2;
});
console.log(result);

let employees = [
{ name: "Arun", salary: 25000 },
{ name: "Priya", salary: 45000 },
{ name: "Kumar", salary: 30000 },
{ name: "Ravi", salary: 50000 }
];
const highsalary=employees.filter((e,i)=>{
    if(e.salary>30000){
        return e;
    }
})
console.log(highsalary);

let employee = [
{ name: "Arun", salary: 25000 },
{ name: "Priya", salary: 45000 },
{ name: "Kumar", salary: 30000 },
{ name: "Ravi", salary: 50000 }
];
const names=employee.map((e,i)=>{
    return e.name;
})
console.log(names);

let prices = [100, 200, 300, 400];
const total=prices.reduce((acc,curr)=>{
    return acc+curr;
})
console.log(total);

let marks = [75, 80, 35, 90, 65];
const resultof=marks.every((e,i)=>{
    return e>=35;
})
console.log(resultof);

let skills = ["HTML","CSS","JavaScript","React"];
for(let skill of skills){
    console.log(skill);
}


let student = {
name: "Arun",
age: 21,
course: "JavaScript",
city: "Chennai"
};
for(let key in student){
    console.log(key+":"+student[key]);
}