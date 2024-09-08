let selectedRow = null;

// Add new person
function addPerson() {
    const firstname = document.getElementById("first_name").value;
    const lastname = document.getElementById("last_name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const position = document.getElementById("position").value;

    if (firstname === "" || lastname === "" || age === "" || gender === "" || position === "") {
        alert("All fields are required.");
        return;
    }

    const table = document.getElementById("personList");
    const row = table.insertRow();
    row.insertCell(0).innerHTML = firstname;
    row.insertCell(1).innerHTML = lastname;
    row.insertCell(2).innerHTML = age;
    row.insertCell(3).innerHTML = gender;
    row.insertCell(4).innerHTML = position;
    row.insertCell(5).innerHTML = `<button onclick="editPerson(this)">Edit</button> <button onclick="deletePerson(this)">Delete</button>`;
    clearForm();
}

// Edit person
function editPerson(btn) {
    selectedRow = btn.parentElement.parentElement;
    document.getElementById("first_name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("last_name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("age").value = selectedRow.cells[2].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[3].innerHTML;
    document.getElementById("position").value = selectedRow.cells[4].innerHTML;
    document.getElementById("updateBtn").classList.remove("hidden");
}

// Update person
function updatePerson() {
    selectedRow.cells[0].innerHTML = document.getElementById("first_name").value;
    selectedRow.cells[1].innerHTML = document.getElementById("last_name").value;
    selectedRow.cells[2].innerHTML = document.getElementById("age").value;
    selectedRow.cells[3].innerHTML = document.getElementById("gender").value;
    selectedRow.cells[4].innerHTML = document.getElementById("position").value;

    clearForm();
    selectedRow = null;
    document.getElementById("updateBtn").classList.add("hidden");
}

// Delete person
function deletePerson(btn) {
    if (confirm("Are you sure you want to delete this entry?")) {
        const row = btn.parentElement.parentElement;
        row.parentElement.removeChild(row);
    }
}

// Clear form fields
function clearForm() {
    document.getElementById("first_name").value = "";
    document.getElementById("last_name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("position").value = "";
}
