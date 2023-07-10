const inquirer = require('inquirer');
const {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require('./queries');

function startApp() {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    })
    .then(answer => {
      switch (answer.action) {
        case 'View all departments':
          viewAllDepartments(startApp);
          break;
        case 'View all roles':
          viewAllRoles(startApp);
          break;
        case 'View all employees':
          viewAllEmployees(startApp);
          break;
        case 'Add a department':
          addDepartment(startApp);
          break;
        case 'Add a role':
          addRole(startApp);
          break;
        case 'Add an employee':
          addEmployee(startApp);
          break;
        case 'Update an employee role':
          updateEmployeeRole(startApp);
          break;
        case 'Exit':
          console.log('Goodbye!');
          process.exit();
      }
    });
}

// Start the application
startApp();
