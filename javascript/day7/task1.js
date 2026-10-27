let arr=["apple","orange","mango","banana","grapes"]
console.log(arr)
console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

let colors = ["Red", "Blue", "Green", "Yellow"];
colors[1]="black";
console.log(colors)

let arr1=["arun","kumar","priya","ravi","divya"]
for(let a=0;a<=arr1.length;a++){
    console.log(arr1[a])
}

let marks = [80, 70, 90, 60, 85];
let total=0;
for(let x=0;x<marks.length;x++){
    total=total+marks[x];
}
console.log("total=",total)

let numbers = [2, 4, 6, 8, 10];
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]*2)
}

let obj={name:"aro",age:20,course:"full stack",city:"chennai"};
console.log("name:",obj.name)
console.log("course:",obj.course)

let obj1={name:"arun",salray:"25000",role:"developer"};
console.log(obj1)
obj1.salray=30000;
console.log(obj1)

let product={name:"laptop",price:"50000"};
console.log(product)
product.brand="dell";
console.log(product)
console.log(product.name,product.price,product.brand)

let car = {brand: "Toyota",model: "Fortuner",year: 2025};
for (let key in car) {
    console.log(key, car[key]);
}

let students = [{ name: "Arun",mark: 80},
                {name: "Priya",mark: 90},
                {name: "Kumar",mark: 75}];
for(let d=0;d<students.length;d++){
    console.log(students[d].name,students[d].mark)
}