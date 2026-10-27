const num1=document.getElementById("num1");
const num2=document.getElementById("num2");
const result=document.getElementById("result")

document.getElementById("addition").addEventListener("click",()=>{
result.innerText=Number(num1.value) + Number(num2.value);
});

document.getElementById("subraction").addEventListener("click",()=>{
result.innerText=Number(num1.value) - Number(num2.value);
});

document.getElementById("multiplication").addEventListener("click",()=>{
result.innerText=Number(num1.value) * Number(num2.value);
});

document.getElementById("divition").addEventListener("click",()=>{
result.innerText=Number(num1.value) / Number(num2.value);
});