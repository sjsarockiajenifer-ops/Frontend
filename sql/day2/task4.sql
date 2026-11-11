
USE college_db;

CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(100) NOT NULL,
    age INT CHECK (age >= 18),
    email VARCHAR(100) NOT NULL UNIQUE,
    mobile_number VARCHAR(15),
    course VARCHAR(100),
    fees DECIMAL(10,2) CHECK (fees > 0),
    admission_date DATE,
    city VARCHAR(50) DEFAULT 'Chennai'
);

DESC students;