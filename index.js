const db = require('./db/connection')
const cTable = require('console.table')
const mysql = require('mysql2')
const inquirer = require("inquirer");


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Caughtin4k!",
    database: "employee_info"
})

connection.connect(function(err) {
    if (err) console.log(err);
})

// starts the app 

startMenu()

function startMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "whatdo",
        message: "What do you want to do?",
        choices: [
          "view all employees",
          "add employee",
          "update employee Role",
          "view all roles",
          "add role",
          "view all departments",
          "add department",
          "exit",
        ],
      },
    ])
    .then((answers) => {
      if (answers.whatdo == "view all employees") {
        viewEmployee();
      }
      if (answers.whatdo == "add employee") {
        addEmployee();
      }
      if (answers.whatdo == "update employee Role") {
        updateRole();
      }
      if (answers.whatdo == "view all roles") {
        viewRoles();
      }
      if (answers.whatdo == "add role") {
        addRole();
      }
      if (answers.whatdo == "view all departments") {
        viewDepartments();
      }
      if (answers.whatdo == "add department") {
        addDepartment();
      }
      if (answers.whatdo == "exit") {
        exit()
      }
    });
}

// VIEW EMPLOYEE -----------------
function viewEmployee() {
  console.log("viewing employees");

db.query('SELECT * FROM employee', (err, data) => {
    if (err) return console.log(err);

    const empTable = cTable.getTable(data);

    console.table(empTable);
    startMenu()
})


}

// ADD EMPLOYEE ----------------------
function addEmployee() {
  console.log("adding employee!");

// needs a way to check all the roles before asking the qustion 

const employeePrompts = [ 
    {
        type: 'input',
        name: 'first_name',
        message: 'What is the new employee first name?'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'What is the new employee last name?'
    },
    {
        type: 'input',
        name: 'first_name',
        message: 'What is the new employee first name?'
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is the new employee role?',
        choices: ['junior dev','senior dev', 'sales lead', 'manager']
    },
]





}
// UPDATE ROLE --==================
function updateRole() {
  console.log("update role");
}
// VIEW ROLE ========================
function viewRoles() {
  console.log(" view role");
}
// ADD ROLE ====================
function addRole() {
  console.log("add role");
}

//VEW DEPARTMENTS ======================
function viewDepartments() {
  console.log("view department");
}
//ADD DEPARTMENT =================
function addDepartment() {
  console.log("add department");
}
//EXIT =========================
function exit(){
    console.log('this will do something eventually')
}
