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
        <td class="employeeId">${employeeId}</td>
        <td>${title}</td>
        <td class="annualSalary">${annualSalary}</td>
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
    calculateTotal();
}

//delete employee from table and from the array
function deleteEmployee() {
    //remove the employee from the array
    // let salaryRemoved = $(this).closest('tr').children('.annualSalary').text();
    let IdRemoved = $(this).closest('tr').children('.employeeId').text();

    for(let i in employees) {
        if(employees[i].employeeId === IdRemoved) {
            employees.splice(i, 1);
        }
    }

    console.log(employees);

    //remove the row from the table
    $(this).closest('tr').remove();

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
    //check if exceeds 20,000
    if(totalMonthly > 200000) {
        $('#totalMonthly').css('background-color', 'red');
    } else {
        $('#totalMonthly').css('background-color', 'white');
    }

}
