var selectedRow = null;

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

// Retrieve data
function readFormData() {
    var formData = {};
    formData["movieID"] = document.getElementById("movieID").value;
    formData["movieName"] = document.getElementById("movieName").value;
    formData["genre"] = document.getElementById("genre").value;
    formData["rating"] = document.getElementById("rating").value;
    return formData;
}

// Insert data
function insertNewRecord(data) {
    var table = document.getElementById("movieList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    newRow.insertCell(0).innerHTML = data.movieID;
    newRow.insertCell(1).innerHTML = data.movieName;
    newRow.insertCell(2).innerHTML = data.genre;
    newRow.insertCell(3).innerHTML = data.rating;
    newRow.insertCell(4).innerHTML = `
        <button onClick="onEdit(this)">Edit</button>
        <button onClick="onDelete(this)">Delete</button>
    `;
}

// Edit data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("movieID").value = selectedRow.cells[0].innerHTML;
    document.getElementById("movieName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("genre").value = selectedRow.cells[2].innerHTML;
    document.getElementById("rating").value = selectedRow.cells[3].innerHTML;
}

// Update data
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.movieID;
    selectedRow.cells[1].innerHTML = formData.movieName;
    selectedRow.cells[2].innerHTML = formData.genre;
    selectedRow.cells[3].innerHTML = formData.rating;
}

// Delete data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('movieList').deleteRow(row.rowIndex);
        resetForm();
    }
}

// Reset form
function resetForm() {
    document.getElementById("movieID").value = '';
    document.getElementById("movieName").value = '';
    document.getElementById("genre").value = '';
    document.getElementById("rating").value = '';
    selectedRow = null;
}
