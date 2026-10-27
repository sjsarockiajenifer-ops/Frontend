
let employees = [];
const form = document.getElementById("employeeform");
const message = document.getElementById("message");
const employeeTable = document.getElementById("employeeTable");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("employeename").value.trim();
    let age = document.getElementById("employeeage").value;
    let dep = document.getElementById("department").value.trim();
    let salry = document.getElementById("salary").value;


    if (name === "" || age === "" || dep === "" || salry === "") {
        message.textContent = "Please fill in all fields.";
        return;
    }

    age = Number(age);
    salry = Number(salry);
    if (!Number.isFinite(age) || age <= 0 ||
        !Number.isFinite(salry) || salry <= 0) {
        message.textContent = "Age and salary must be positive numbers.";
        return;
    }

    let employee = {
        name: name,
        age: age,
        department: dep,
        salary: salry
    };

    employees.push(employee);
    employeeTable.innerHTML = "";
    employees.forEach(function(emp) {
        employeeTable.innerHTML += `
            <tr>
                <td>${emp.name}</td>
                <td>${emp.age}</td>
                <td>${emp.department}</td>
                <td>${emp.salary}</td>
            </tr>
        `;
    });

    message.textContent = "Employee registered successfully!";
    form.reset();

});
