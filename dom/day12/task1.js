let heading = document.getElementById("title");
heading.textContent = "Welcome to JavaScript";
heading.style.color = "blue";
heading.style.fontSize = "30px";

let headtitle=document.getElementsByClassName("head");
headtitle[0].style.color="red";
headtitle[1].style.backgroundColor="yellow";
headtitle[2].style.fontSize="25px";

let head1title=document.querySelector("#head1");
head1title.src="../../pictures/flower.jpg";
head1title.style.width="200px";
let head2title=document.querySelector("#head2");
head2title.src="https://www.google.com";
head2title.textContent="visiting google";

let username = document.getElementById("username");
username.value = "Arun";
username.style.backgroundColor = "lightblue";
let email = document.querySelector("#email");
email.value = "arun@gmail.com";
let button = document.getElementById("submitBtn");
button.disabled = true;

        let headings = document.querySelectorAll(".heading");
        headings[0].textContent = "HTML";
        headings[1].textContent = "CSS";
        headings[2].textContent = "JavaScript";
        headings[3].textContent = "React";
        headings[4].textContent = "Node.js";
        headings[0].style.color = "red";
        headings[1].style.color = "blue";
        headings[2].style.color = "green";
        headings[3].style.color = "orange";
        headings[4].style.color = "purple";