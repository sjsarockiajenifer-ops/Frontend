let heading = document.getElementById("title");
let button = document.getElementById("btn");
button.addEventListener("click", function() {
    heading.style.color = "red";
    heading.style.fontSize = "30px";
});

 let box = document.getElementById("box");
        let btn1 = document.getElementById("btn1");
        let btn2 = document.getElementById("btn2");
        btn1.addEventListener("click", function() {
            box.style.backgroundColor = "blue";
            box.style.color = "white";
        });
        btn2.addEventListener("click", function() {
            box.style.backgroundColor = "yellow";
            box.style.color = "black";
        });

        let message = document.getElementById("message");
        let hideBtn = document.getElementById("hideBtn");
        let showBtn = document.getElementById("showBtn");

        hideBtn.addEventListener("click", function() {
            message.style.display = "none";
        });

        showBtn.addEventListener("click", function() {
            message.style.display = "block";
        });