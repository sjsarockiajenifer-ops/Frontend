use college_db;

create table employee_department (
employee_id int primary key,
employee_name varchar(100),
department_id int,
department_name varchar(100),
manager_name varchar(100),
department_location varchar(100)
);

insert into employee_department values
(101, 'arun', 10, 'it', 'kumar', 'chennai'),
(102, 'bala', 10, 'it', 'kumar', 'chennai'),
(103, 'divya', 20, 'hr', 'priya', 'madurai'),
(104, 'hari', 20, 'hr', 'priya', 'madurai'),
(105, 'john', 30, 'sales', 'raja', 'vellore');

select * from employee_department;

create table departments (
department_id int primary key,
department_name varchar(100),
manager_name varchar(100),
department_location varchar(100)
);

insert into departments values
(10, 'it', 'kumar', 'chennai'),
(20, 'hr', 'priya', 'madurai'),
(30, 'sales', 'raja', 'vellore');