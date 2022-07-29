// const table = require('console.table')
// const path = require('path');
// const mysql = require('mysql2');
const inquirer = require("inquirer");
function questionloop() {
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
  console.log("view employed");
}

// ADD EMPLOYEE ----------------------
function addEmployee() {
  console.log("add employee");
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
