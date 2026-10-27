let a=20;
let b=10;
console.log("addition:",a+b)
console.log("subraction:",a-b)
console.log("multiplication:",a*b)
console.log("division:",a%b)
console.log("remainder:",a/b)

let number=15;
if(number%2===0){
    console.log("given number is even")
}else{
    console.log("given number is odd")
}


let value=8;
if(value>0){
    console.log("positive")
}else  if(value<o){
    console.log("negative")
}else{
    console.log("zero")
}

let age=20;
if(age>=18){
    console.log("your eligible for vote")
}else{
    console.log("not eligible for vote")
}

let x=40;
let y=25;
if(x<y){
    console.log("biggest number is:",y)
}
else if(y<x){
    console.log("biggest number is:",x)
}
else{
    console.log("invalid")
}

let mark=78;
if(mark>=90){
    console.log("A grade")
}else if(mark>=75){
    console.log("B grade")
}else if(mark>=50){
    console.log("C grade")
}
else{
    console.log("fail")
}

for(let q=1;q<=20;q++){
    console.log(q)
}

for(let i=1;i<=50;i++){
    if(i%2==0){
        console.log(i);
    }
}

let val=5;
for(let s=1;s<=10;s++){
    console.log(s+"x"+val,"="+val*s);
}

let total = 0;
for (let i = 1; i <= 10; i++) {
    total = total + i;
}
console.log("Total =", total);