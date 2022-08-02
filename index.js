const db = require("./db/connection");
const cTable = require("console.table");
const mysql = require("mysql2");
const inquirer = require("inquirer");
// const { query } = require('./db/connection');

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Caughtin4k!",
  database: "employee_info",
});

// connection.connect(function(err) {
//     if (err) console.log(err);
// })

// starts the app

startMenu();

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
        exit();
      }
    });
}

// VIEW EMPLOYEE -----------------
function viewEmployee() {
  console.log("viewing employees");
  let query = "SELECT * FROM employee";
  db.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    startMenu();
  });
}

// ADD EMPLOYEE ----------------------
function addEmployee() {
  console.log("adding employee!");
  // this is going to be a two part function

  // display a all the roles from the database

  var query = `SELECT roles.id, roles.title, roles.salary
    FROM roles`;

  db.query(query, function (err, res) {
    if (err) throw err;
    const roleOptions = res.map(({ id, title, salary }) => ({
      value: id,
      title: `${title}`,
      salary: `${salary}`,
    }));
    console.table(res);
    promptInsert(roleOptions);
  });

  function promptInsert(roleOptions) {
    console.log(roleOptions);
    const employeePrompts = [
      {
        type: "input",
        name: "first_name",
        message: "What is the new employee first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the new employee last name?",
      },

      {
        type: "list",
        name: "role",
        message: "What is the new employees role?",
        choices: roleOptions,
      },
      {
        type: "input",
        name: "manager",
        message:
          "Does this employee have a manager? if not press enter for null.",
      },
    ];
    inquirer.prompt(employeePrompts).then((answer) => {
      db.query(
        `INSERT INTO employee (first_name, last_name, role_id) VALUES ('${answer.first_name}','${answer.last_name}','${answer.role}')`,
        function (err, res) {
          if (err) throw err;
          console.table(res);
          startMenu();
        }
      );
    });
  }
}

// UPDATE ROLE --==================
function updateRole() {
  var query = `SELECT roles.id, roles.title, roles.salary
    FROM roles`;

  db.query(query, function (err, res) {
    if (err) throw err;
    const roleOptions = res.map(({ id, title, salary }) => ({
      value: id,
      title: `${title}`,
      salary: `${salary}`,
    }));
    console.table(res);
    promptUpdate(roleOptions)
  });
}
// two functions
function promptUpdate(roleOptions)
{
  inquirer
    .prompt([
      {
        type: "input",
        message: "Which employee would you like to update? please use first name",
        name: "employeeUpdate",
      },

      {
        type: "list",
        message: "What role do you want to update to?",
        name: "updateRole",
        choices: roleOptions
      },
    ])
    .then(function (answer) {
      connection.query(
        "UPDATE employee SET role_id=? WHERE first_name= ?",
        [answer.updateRole, answer.employeeUpdate],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          startMenu();
        }
      );
    });
}

// VIEW ROLE ========================
function viewRoles() {
  console.log(" view role");
  db.query("SELECT * FROM roles", (err, data) => {
    if (err) return console.log(err);

    const roleTable = cTable.getTable(data);

    console.table(roleTable);
    startMenu();
  });
}
// ============== ADD ROLE ====================

function addRole() {
// another two funcitoner 

var query = `SELECT department.id, department.depName
    FROM department`;

    db.query(query, function (err, res) {
        if (err) throw err;
        const depOptions = res.map(({ id, depName,}) => ({
          value: id,
          depName: `${depName}`,
        
        }));
        console.table(res);
        promptRole(depOptions);
      });
    




function promptRole(depOptions){
    console.log("add a role");
    inquirer
      .prompt([
        {
          type: "input",
          name: "newRole",
          message: "Please enter the title of the role",
        },
        {
          type: "number",
          name: "salary",
          message: "Please enter a salary ",
          // in the futur i should check to ensure user is inputing a number
          // aka NAN stuff
        },
  
        {
          type: "list",
          name: "department_id",
          message: "Please enter the department id ",
          choices: depOptions
          // in the future this could be a list that shows current departments with there id.
        },
      ])
      .then((answer) => {
        console.log("adding role");
        db.query(
          `INSERT INTO roles (title, salary, department_id) VALUES ('${answer.newRole}','${answer.salary}','${answer.department_id}')`
        );
  
        startMenu();
      });
}
  // this section needs some polishing but functioning at a base level currently
  
}

//VEW DEPARTMENTS ======================
function viewDepartments() {
  console.log("viewing departments!");

  db.query("SELECT * FROM department", (err, data) => {
    if (err) return console.log(err);

    const deparmentTable = cTable.getTable(data);

    console.table(deparmentTable);
    startMenu();
  });
}
//ADD DEPARTMENT =================
function addDepartment() {
  console.log("add department");
  // this one seems the easiest because it is just adding a "name"

  // not using an array of questions because it is just one question

  inquirer
    .prompt([
      {
        type: "input",
        name: "newDepartment",
        message: "Enter new deparment name",
      },
    ])
    .then((answer) => {
      console.log("adding new department");
      db.query(
        `INSERT INTO department (depName) VALUES ('${answer.newDepartment}')`
      );
      startMenu();
    });
}
//EXIT =========================
function exit() {
  console.log("Thank you for using my Employee Tracker");
}
