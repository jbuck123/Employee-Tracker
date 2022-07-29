DROP DATABASE IF EXISTS employee_info;

CREATE DATABASE employee_info;

USE employee_info;
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(15) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL, 
    salaary DECIMAL(10,2) NOT NULL, 
    department_id INT NOT NULL, 
    PRIMARY KEY (id)
)