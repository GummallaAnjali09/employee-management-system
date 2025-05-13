 document.addEventListener("DOMContentLoaded", function () {
    const employeeForm = document.getElementById("EmployeeForm");
    const employeeTable = document.getElementById("employeeTable");

    function addEmployee() {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const designation = document.getElementById("designation").value.trim();
        const salary = document.getElementById("salary").value.trim();

        if (!name || !email || !designation || !salary) {
            alert("Please fill in all fields.");
            return;
        }
        

        const row = employeeTable.insertRow();
        row.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${designation}</td>
            <td>${salary}</td>
            <td>
                <button class="edit" onclick="editEmployee(this)">Edit</button>
                <button class="delete" onclick="deleteEmployee(this)">Delete</button>
            </td>
        `;

        employeeForm.reset();
        alert("Employee added successfully.");
    }

    window.editEmployee = function (button) {
        const row = button.parentElement.parentElement;
        const cells = row.getElementsByTagName("td");

        document.getElementById("name").value = cells[0].innerText;
        document.getElementById("email").value = cells[1].innerText;
        document.getElementById("designation").value = cells[2].innerText;
        document.getElementById("salary").value = cells[3].innerText;

        row.remove();
        alert("Employee details ready for editing.");
    };

    window.deleteEmployee = function (button) {
        if(confirm("Are you sure you want to delete this employee?")) {
            button.parentElement.parentElement.remove();
            alert("Employee deleted successfully.");
         
        }
    }

    document.querySelector(".btn-container button").addEventListener("click", function (event) {
        event.preventDefault();
        addEmployee();
    });
});
