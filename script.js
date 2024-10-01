// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee information
function collectEmployees() {
    const employees = [];
    while (true) {
        const firstName = prompt('Enter the employee\'s first name:');
        const lastName = prompt('Enter the employee\'s last name:');
        let salary = prompt('Enter the employee\'s salary:');
        salary = parseFloat(salary); // Use parseFloat instead of Number
        
        if (isNaN(salary)) {
            salary = 0;
        }

        // Create new employee object
        const employee = { firstName, lastName, salary };

        // Add employee to the array 
        employees.push(employee);

        // Ask if wants to add another employee
        if (!confirm('Would you like to add another employee?')) {
            break; // Exit the loop
        }
    }
    return employees; // Return the array of employees
}

// Display the average salary
function displayAverageSalary(employees) {
    if (employees.length === 0) {
        console.log("No employees to calculate average salary.");
        return;
    }

    const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
    const averageSalary = totalSalary / employees.length;

    // Ensure the average is always displayed with exactly two decimal places
    const averageSalaryFormatted = averageSalary.toFixed(2);

    console.log(`The average employee salary between our ${employees.length} employee(s) is $${averageSalaryFormatted}`);
}

// Select a random employee
function getRandomEmployee(employeesArray) {
    if (employeesArray.length === 0) {
        console.log("No employees for the drawing.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];
    console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
}

// Main function to run the program
function main() {
    const employees = collectEmployees();
    displayAverageSalary(employees);
    getRandomEmployee(employees);
}


/*
====================
STARTER CODE
Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
const employeeTable = document.querySelector('#employee-table');

// Clear the employee table
employeeTable.innerHTML = '';

// Loop through the employee data and create a row for each employee
for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
        style:"currency",
        currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
    }
}

const trackEmployeeData = function() {
    const employees = collectEmployees();

    console.table(employees);

    displayAverageSalary(employees);

    console.log('==============================');

    getRandomEmployee(employees);

    employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
        return -1;
    } else {
        return 1;
    }
    });

    displayEmployees(employees);
    }

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
