-- Inserting value(names of departments) into department table --
INSERT INTO department (name)
VALUES ('Players'), 
       ('Coaching'), 
       ('Managment'), 
       ('Medical');

INSERT INTO roles (title, salary, department_id)
VALUES ('QB', 50000000, 1),
       ('WR', 15000000, 1),
       ('RB', 10000000, 1),
       ('Head Coach', 29000000, 2),
       ('QB Coach', 750000, 2),
       ('Owner', 14000000000, 3),
       ('Doctors', 250000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Johnny', 'Truth', 1, 2),
       ('Chad', 'Harrison', 1, 2),
       ('Emmitt', 'Peterson', 1, 2),
       ('Bill', 'LeCheck', 2, 3),      
       ('Kellen', 'Smores', 2, 3),
       ('Bill', 'Gates', 3, NULL),
       ('Eddie', 'Johnstone', 4, 3);
       