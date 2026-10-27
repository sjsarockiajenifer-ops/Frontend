
const employeeForm = document.getElementById("employeeForm");
const employeeTable = document.getElementById("employeeTable");
const message = document.getElementById("message");

let employees = JSON.parse(localStorage.getItem("employees")) || [];
displayEmployees();

employeeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = Number(document.getElementById("age").value);
    const department = document.getElementById("department").value.trim();
    const salary = Number(document.getElementById("salary").value);

    if (name === "" || department === "" ||
        !Number.isFinite(age) || age <= 0 ||
        !Number.isFinite(salary) || salary <= 0) {

        message.style.color = "red";
        message.innerText = "Please enter valid details in all fields.";
        return;
    }

    const employee = {
        id: Date.now() + "-" + Math.random().toString(36).slice(2, 9),
        name: name,
        age: age,
        department: department,
        salary: salary
    };

    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
    displayEmployees();
    employeeForm.reset();

    message.style.color = "green";
    message.innerText = "Employee added successfully!";
});

    employeeTable.innerHTML = "";

    employees.forEach(function(employee) {
        employeeTable.innerHTML += `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.age}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>
                    <button
                        type="button"
                        class="deleteBtn"
                        data-id="${employee.id}">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });


employeeTable.addEventListener("click", function(event) {
    if (event.target.classList.contains("deleteBtn")) {
        const employeeId = event.target.dataset.id;

        employees = employees.filter(function(employee) {
            return employee.id !== employeeId;
        });

        localStorage.setItem("employees", JSON.stringify(employees));
        displayEmployees();

        message.style.color = "green";
        message.innerText = "Employee deleted successfully!";
    }
});
