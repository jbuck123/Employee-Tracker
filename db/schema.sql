DROP DATABASE IF EXISTS employee_info;

CREATE DATABASE employee_info;

USE employee_info;


CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    depName VARCHAR(30) NOT NULL

);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL(10,2) NOT NULL, 
    department_id INT NOT NULL
    -- need to understand foreign keys
    
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    role_id INT NULL
    manager_id INT NULL
);