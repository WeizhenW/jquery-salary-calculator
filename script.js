$(document).ready(onReady);

let employees = [{
    firstName: 'Jen',
    lastName: 'Barber',
    employeeId: '4521',
    title: 'Team Lead',
    annualSalary: 80000
},
{
    firstName: 'Maurice',
    lastName: 'Moss',
    employeeId: '8724',
    title: 'Support Team',
    annualSalary: 58000
},
{
    firstName: 'Roy',
    lastName: 'Smith',
    employeeId: '9623',
    title: 'Quality Assurance',
    annualSalary: 48000
}
]

function onReady() {
    $('#submitButton').on('click', addEmployee);
    $('#salaryTableBody').on('click', '.deleteButton', deleteEmployee);
}

//add employee to the table and to the array
function addEmployee() {
    //get value from input
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let employeeId = $("#employeeId").val();
    let title = $("#title").val();
    let annualSalary = $("#annualSalary").val();

    //append to table
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
    //clear out the input
    $('input').val('');
    //push to the array
    employees.push({
        firstName: firstName,
        lastName: lastName,
        employeeId: employeeId,
        title: title,
        annualSalary: annualSalary
    })
    console.log(employees);
}

//delete employee from table and from the array
function deleteEmployee() {
    //remove the row from the table
    $(this).closest('tr').remove();
  
}
