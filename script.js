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

let totalMonthly = 0;

function onReady() {
    appendTable();//loop through array and add employees to table
    $('#submitButton').on('click', addEmployee);
    $('#salaryTableBody').on('click', '.deleteButton', deleteEmployee);
}

//add employee to the array from the input value
function addEmployee() {
    $('p').empty();
    //get value from input
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let employeeId = $("#employeeId").val();
    let title = $("#title").val();
    let annualSalary = $("#annualSalary").val();

    //check if salary < 0
    if(annualSalary < 0) {
        $('#addEmployee').append('<p>Salary cannot be negative</p>');
        return;
    }

    //check if any field is blank
    if(firstName === '' || lastName === '' || employeeId === '' || title === '' || annualSalary === '') {
        $('#addEmployee').append('<p>Input field cannot be empty</p>');
        return;
    }

    //check if employee ID is duplicate
    for(let employee of employees) {
        if(employeeId === employee.employeeId) {
            $('#addEmployee').append('<p>Employee ID must be unique</p>');
            return;
        }
    }

    //push values to the array
    employees.push({
        firstName: firstName,
        lastName: lastName,
        employeeId: employeeId,
        title: title,
        annualSalary: annualSalary
    })

    //clear out the input
    $('input').val('');
    
    //call appendTable function to loop through array and append to table
    appendTable();
    //calculate the new monthly total
    calculateTotal();
}

function appendTable() {

    //clear the existing table content
    $('.employeeRow').remove();
    //loop through array to add all employees to table
    for(employee of employees) {
        $('#tableBottom').before(`
    <tr class="employeeRow">
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td class="employeeId">${employee.employeeId}</td>
        <td>${employee.title}</td>
        <td class="annualSalary">$ ${employee.annualSalary}</td>
        <td class="deleteButtonTd"><button class="deleteButton">Delete</button></td>
    </tr> 
    `)
    }
}

//delete employee from table and from the array
function deleteEmployee() {
    //remove the employee from the array
    let IdRemoved = $(this).closest('tr').children('.employeeId').text(); //get the id of the row clicked
    //loop through array to find the employee with this id and delete it from the array
    for(let i in employees) {
        if(employees[i].employeeId === IdRemoved) {
            employees.splice(i, 1);
        }
    }

    //call function to update the table
    appendTable();
    //update the monthly total
    calculateTotal();
  
}

//calculate total monthly cost and replace it in the DOM
function calculateTotal() {
    totalMonthly = 0;
    for(let employee of employees) {
        totalMonthly += Number(employee.annualSalary);
    }
    //update total in the DOM
    $('#totalMonthly').text(totalMonthly);
    //check if exceeds $20,000
    if(totalMonthly > 200000) {
        $('#totalMonthly').css('background-color', 'red');
    } else {
        $('#totalMonthly').css('background-color', 'white');
    }

}
