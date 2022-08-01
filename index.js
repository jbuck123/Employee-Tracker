const db = require('./db/connection')
const cTable = require('console.table')
const mysql = require('mysql2')
const inquirer = require("inquirer");


const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Caughtin4k!",
    database: "employee_info"
})

// connection.connect(function(err) {
//     if (err) console.log(err);
// })

// starts the app 

startMenu()

function startMenu() {
    console.log('test');
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
          "exit"
        ]
      }
    ])
    .then((answers) => {
        console.log(answers);
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
  db.query('SELECT * FROM roles', (err, data) => {
    if (err) return console.log(err);

    const roleTable = cTable.getTable(data);

    console.table(roleTable);
    startMenu()
})
}
// ============== ADD ROLE ====================

function addRole() { // this section needs some polishing but functioning at a base level currently
  console.log("add a role");
  inquirer.prompt([
    {
        type: 'input',
        name: "newRole",
        message: 'Please enter the title of the role'
    },
    {
        type: 'number',
        name: "salary",
        message: 'Please enter a salary '
        // in the futur i should check to ensure user is inputing a number 
        // aka NAN stuff
    },  

    {
        type: 'input',
        name: "department_id",
        message: 'Please enter the department id '
        // in the future this could be a list that shows current departments with there id.
    }
]).then(answer => {
    console.log("adding role")
    db.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${answer.newRole}','${answer.salary}','${answer.department_id}')`)
    
    startMenu();
})

}

//VEW DEPARTMENTS ======================
function viewDepartments() {
  console.log("viewing departments!");

  db.query('SELECT * FROM department', (err, data) => {
    if (err) return console.log(err);

    const deparmentTable = cTable.getTable(data);

    console.table(deparmentTable);
    startMenu()
})

  
}
//ADD DEPARTMENT =================
function addDepartment() {
  console.log("add department");
  // this one seems the easiest because it is just adding a "name"

  // not using an array of questions because it is just one question

  inquirer.prompt([
      {
          type: 'input',
          name: "newDepartment",
          message: 'Enter new deparment name'
      }
  ]).then(answer => {
    console.log('adding new department')
    db.query(`INSERT INTO department (depName) VALUES ('${answer.newDepartment}')`);
    startMenu();
})

}
//EXIT =========================
function exit(){
    console.log('Thank you for using my Employee Tracker')
}

