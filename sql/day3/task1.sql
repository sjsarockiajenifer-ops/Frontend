use college_db
Create table studends(
student_id int primary key auto_increment,
name varchar(100) not null,
age int check (age>=16),
email varchar(50) unique,
course varchar(100) not null,
fees decimal(10,2) default 0,
admission_date date
);

alter table students
rename to student_details;

DESC student_details;

alter table student_details
drop column mobile_number;

ALTER TABLE student_details
ADD mobile_number VARCHAR(15);

