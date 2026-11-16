use college_db;

create table patients (
patient_id int primary key auto_increment,
patient_name varchar(100) not null,
age int check (age > 0),
gender varchar(20),
disease varchar(100),
admission_date date,
doctor_name varchar(100)
);

alter table patients
rename column disease to diagnosis;

alter table patients
add column contact_number varchar(100);

alter table patients
modify patient_name VARCHAR(150);

alter table patients
rename to patient_records;

desc patient_records;

