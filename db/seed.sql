-- pre populate the database for an easier start 

INSERT INTO department (name)
values ("Player"), ("Coaches"), ("Concession"), ("Management"), ("CheerTeam");

INSERT INTO role (title, salary, department_id)
VALUE ("Quarterback", 1000000.00, 1), ("HeadCoach", 2000000.00, 2), ("Cashier", 20000.00, 3), ("Recruiter", 50000.00, 4), ("Mascot", 45000, 5);


INSERT INTO employee( first_name, last_name, role_id, manager_id)
VALUE("Andy", "Reid", 2, 4), ("Patrick", "Mahomes", 1, 2), ("Shawn", "White", 3, 4), ("Kobe", "Bryant", 5, 3), ("Ashton", "Kutcher", 3, 1)