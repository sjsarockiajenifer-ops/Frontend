create database college_db;
use college_db;
create table students(
student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(100) NOT NULL,
    age INT CHECK (age >= 18),
    email VARCHAR(100) UNIQUE,
    city VARCHAR(50) DEFAULT 'Chennai',
    admission_date DATE
);

DESC students;