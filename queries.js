const inquirer = require('inquirer');
const pool = require('./database');

// Function to view all departments
function viewAllDepartments(callback) {
  const query = 'SELECT * FROM department';
  pool.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    callback();
  });
}

// Function to view all roles
function viewAllRoles(callback) {
  const query = `
    SELECT role.id, role.title, role.salary, department.name AS department
    FROM role
    INNER JOIN department ON role.department_id = department.id
  `;
  pool.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    callback();
  });
}

// Function to view all employees
function viewAllEmployees(callback) {
  const query = `
    SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    INNER JOIN role ON employee.role_id = role.id
    INNER JOIN department ON role.department_id = department.id
    LEFT JOIN employee AS manager ON employee.manager_id = manager.id
  `;
  pool.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    callback();
  });
}

// Function to add a department
function addDepartment(callback) {
  inquirer
    .prompt([
      {
        name: 'name',
        type: 'input',
        message: 'Enter the name of the department:',
      }
    ])
    .then(answer => {
      const query = 'INSERT INTO department (name) VALUES (?)';
      pool.query(query, [answer.name], (err, res) => {
        if (err) throw err;
        console.log('Department added successfully!');
        callback();
      });
    });
}

// Function to add a role
function addRole(callback) {
  inquirer
    .prompt([
      {
        name: 'title',
        type: 'input',
        message: 'Enter the title of the role:',
      },
      {
        name: 'salary',
        type: 'input',
        message: 'Enter the salary for the role:',
      },
      {
        name: 'department_id',
        type: 'input',
        message: 'Enter the department ID for the role:',
      }
    ])
    .then(answer => {
      const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
      pool.query(query, [answer.title, answer.salary, answer.department_id], (err, res) => {
        if (err) throw err;
        console.log('Role added successfully!');
        callback();
      });
    });
}

// Function to add an employee
function addEmployee(callback) {
  inquirer
    .prompt([
      {
        name: 'first_name',
        type: 'input',
        message: 'Enter the first name of the employee:',
      },
      {
        name: 'last_name',
        type: 'input',
        message: 'Enter the last name of the employee:',
      },
      {
        name: 'role_id',
        type: 'input',
        message: 'Enter the role ID for the employee:',
      },
      {
        name: 'manager_id',
        type: 'input',
        message: "Enter the manager's ID for the employee (leave empty if none):",
        default: null,
      }
    ])
    .then(answer => {
      const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
      pool.query(query, [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], (err, res) => {
        if (err) throw err;
        console.log('Employee added successfully!');
        callback();
      });
    });
}

// Function to update an employee's role
function updateEmployeeRole(callback) {
  pool.query('SELECT * FROM employee', (err, employees) => {
    if (err) throw err;

    inquirer
      .prompt([
        {
          name: 'employee_id',
          type: 'list',
          message: 'Select the employee to update:',
          choices: employees.map(employee => ({
            name: `${employee.first_name} ${employee.last_name}`,
            value: employee.id,
          })),
        },
        {
          name: 'role_id',
          type: 'input',
          message: 'Enter the new role ID for the employee:',
        }
      ])
      .then(answer => {
        const query = 'UPDATE employee SET role_id = ? WHERE id = ?';
        pool.query(query, [answer.role_id, answer.employee_id], (err, res) => {
          if (err) throw err;
          console.log('Employee role updated successfully!');
          callback();
        });
      });
  });
}

module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
