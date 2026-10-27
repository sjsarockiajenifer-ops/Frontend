let course=["javascript","dom","nodejs","html","css"];
let clickme=document.getElementById("clickme");
const arrayRendering=()=>{
    clickme.innerHTML="";
course.forEach((stu,i)=>{
    let list=document.createElement("list");
        list.textContent=stu;
        clickme.appendChild(list);
    })
}