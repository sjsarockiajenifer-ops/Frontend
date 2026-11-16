use college_db;

create table staff (
    staff_id int primary key auto_increment,
    name varchar(100) not null,
    department varchar(50),
    salary decimal(10,2),
    city varchar(50)
);

insert into staff (name, department, salary, city)
values
('arun', 'HR', 25000, 'vellore'),
('bala', 'IT', 35000, 'chennai'),
('divya', 'HR', 30000, 'salem'),
('kumar', 'Finance', 40000, 'madurai'),
('priya', 'Sales', 28000, 'trichy'),
('suresh', 'IT', 32000, 'vellore'),
('meena', 'HR', 27000, 'salem'),
('raja', 'Finance', 45000, 'madurai');

update staff set salary=45000 where staff_id=3;

update staff set department="IT" where staff_id = 5;

update staff set salary = salary+5000 where department="HR"

update staff set city = 'chennai' where salary > 30000 and staff_id > 0;

select * from staff;