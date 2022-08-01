-- pre populate the database for an easier start 

INSERT INTO department (depName)
VALUES ('engineer'), ('sales'), ('management');

INSERT INTO roles (title, salary, department_id)
VALUES ("junior dev", 50000.00, 1), ("senior dev", 2000000.00, 1), ("sales lead", 20000.00, 2), ("manager", 50000.00, 3);


INSERT INTO employee ( first_name, last_name, role_id, manager_id)
VALUES  ('James', 'Buchmann', 1), ('Hope', 'Meirhopher', 3), ('Ryan', 'Theilen' , 2), ('Matt', 'Neises', 4);