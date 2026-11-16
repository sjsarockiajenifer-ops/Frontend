USE college_db;

CREATE TABLE employees (
    employee_ID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    salary FLOAT,
    department VARCHAR(100),
    joining_date DATE,
    city VARCHAR(100)
);

USE college_db;

DESC employees;

ALTER TABLE employees
RENAME COLUMN name TO employee_name;

ALTER TABLE employees
MODIFY salary DECIMAL(12,2);

ALTER TABLE employees
ADD email VARCHAR(100);

DESC employees;

DROP TABLE employees;
