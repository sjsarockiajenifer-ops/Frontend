use college_db;

create table student_course (
student_id int,
student_name varchar(100),
course_name varchar(100),
trainer_name varchar(100),
trainer_phone varchar(15),
primary key (student_id, course_name)
);

insert into student_course values
(1, 'arun', 'python', 'kumar', '9876543210'),
(1, 'arun', 'java', 'raja', '9876543211'),
(2, 'bala', 'python', 'kumar', '9876543210'),
(3, 'divya', 'sql', 'priya', '9876543212'),
(4, 'hari', 'java', 'raja', '9876543211');

create table students (
student_id int primary key,
student_name varchar(100)
);

insert into students values
(1, 'arun'),
(2, 'bala'),
(3, 'divya'),
(4, 'hari');

