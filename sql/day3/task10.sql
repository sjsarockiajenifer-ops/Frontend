use company_db;

create table departments (
department_id int primary key auto_increment,
department_name varchar(100),
location varchar(100)
);

create table employees (
employee_id int primary key auto_increment,
employee_name varchar(100),
department varchar(100),
salary decimal(10,2),
city varchar(50)
);


insert into departments (department_name, location) values
('hr', 'chennai'),
('it', 'bangalore'),
('finance', 'mumbai'),
('sales', 'hyderabad'),
('marketing', 'delhi');


insert into employees (employee_name, department, salary, city) values
('arun', 'hr', 25000, 'chennai'),
('bala', 'it', 35000, 'bangalore'),
('divya', 'finance', 30000, 'mumbai'),
('kumar', 'sales', 40000, 'hyderabad'),
('priya', 'marketing', 45000, 'delhi');

select * from departments;

select * from employees;

drop table departments;

show tables;

select * from employees;