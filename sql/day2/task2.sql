create database company_db;
use company_db;
create table employees(
emp_id int primary key auto_increment,
emp_name varchar(100) not null,
email varchar(100) unique,
salary decimal(10,2) CHECK (salary > 10000),
department varchar(50) DEFAULT 'IT',
joining_date date not null,
status varchar(20) DEFAULT 'Active',
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
desc employees;

