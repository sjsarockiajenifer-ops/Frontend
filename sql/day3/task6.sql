use college_db;

create table customers (
customer_id int primary key auto_increment,
name varchar(100) not null,
email varchar(100),
city varchar(50),
age int,
registration_date date
);

insert into customers (name, email, city, age, registration_date)
values
('arun', 'arun@gmail.com', 'chennai', 23, '2026-01-10'),
('bala', 'bala@gmail.com', 'vellore', 25, '2026-01-12'),
('divya', 'divya@gmail.com', 'salem', 22, '2026-01-15'),
('kumar', 'kumar@gmail.com', 'chennai', 28, '2026-01-18'),
('priya', 'priya@gmail.com', 'madurai', 24, '2026-01-20'),
('suresh', 'suresh@gmail.com', 'trichy', 26, '2026-01-22'),
('meena', 'meena@gmail.com', 'vellore', 21, '2026-01-25'),
('raja', 'raja@gmail.com', 'salem', 29, '2026-01-27'),
('kavya', 'kavya@gmail.com', 'chennai', 23, '2026-01-29'),
('john', 'john@gmail.com', 'madurai', 27, '2026-02-01');

insert into customers (name, email, city, age, registration_date)
values ('anitha', 'anitha@gmail.com', 'chennai', 22, '2026-02-05'),
('ravi', 'ravi@gmail.com', 'vellore', 30, '2026-02-08');

insert into customers (name, city, age)
values ('mani', 'chennai', 25);

select * from customers;
