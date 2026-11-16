use college_db;

create table books (
book_id int primary key auto_increment,
book_name varchar(100) not null,
author varchar(100),
price decimal(10,2),
published_date date
);

insert into books (book_name, author, price, published_date) values
('wings of fire', 'apj abdul kalam', 350, '1999-01-01'),
('the alchemist', 'paulo coelho', 450, '1988-01-01'),
('ponniyin selvan', 'kalki', 500, '1950-01-01'),
('atomic habits', 'james clear', 600, '2018-10-16'),
('rich dad poor dad', 'robert kiyosaki', 400, '1997-04-01');

select * from books;

truncate table books;

select * from books;

desc books;

show tables;

