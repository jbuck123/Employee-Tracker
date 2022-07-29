// const table = require('console.table')
// const path = require('path');
// const mysql = require('mysql2');
const inquirer = require("inquirer");

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
        " view all roles",
        "add role",
        "view all departments",
        "add department",
        "exit"
      ],
    },
  ])
  .then((answers) => {
    if (answers.choices == "view all employees") {
      viewEmployee();
    }
    if (answers.choices == "add employee") {
      addEmployee();
    }
    if (answers.choice == 'update employee Role') {
        updateRole();
    }
    if ( answers.choice == 'view all roles') {
        viewRoles();
    }
    if (answers.choice == 'view all departments') {
        viewDepartments();
    }
    if ( answers.choice == 'add department') {
        addDepartment();
    } 
    else {}
  });

  // VIEW EMPLOYEE -----------------

  // ADD EMPLOYEE ----------------------

  // UPDATE ROLE --==================

  // VIEW ROLE ========================

  //VEW DEPARTMENTS ======================

  //ADD DEPARTMENT =================