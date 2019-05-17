$(document).ready(onReady);

let employees = {};

function onReady() {
    $('#submitButton').on('click', addEmployee);

}


function addEmployee() {
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let employeeId = $("#employeeId").val();
    let title = $("#title").val();
    let annualSalary = $("#annualSalary").val();

    $('#salaryTableBody').append(`

    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${employeeId}</td>
        <td>${title}</td>
        <td>${annualSalary}</td>
        <td><button class="deleteButton">Delete</button></td>
    </tr> 
    `)

    $('input').val('');
}
