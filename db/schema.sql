-- Checks if db exists. Deletes Existing db and creates new db --
    DROP DATABASE IF EXISTS employee_tracker_db;
    CREATE DATABASE employee_tracker_db;

-- Uses the db --
    USE employee_tracker_db;

-- Creates the tables --
-- Department Table --
    CREATE TABLE department (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30) NOT NULL
    );

-- Roles Table --
    CREATE TABLE roles (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL NOT NULL,
        department_id INT NOT NULL,
        FOREIGN KEY (department_id) 
        REFERENCES department(id)
    );

-- Employee Table --
    CREATE TABLE employee (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INT NOT NULL,
        manager_id INT NOT NULL,
        FOREIGN KEY (role_id)
        REFERENCES roles(id)
    );