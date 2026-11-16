use college_db;

create table orders (
order_id int primary key auto_increment,
customer_name varchar(100),
product_name varchar(100),
quantity int,
price decimal(10,2),
order_date date
);

insert into orders (customer_name, product_name, quantity, price, order_date)
values
('arun', 'laptop', 2, 45000, '2026-01-10'),
('bala', 'mouse', 1, 400, '2026-01-12'),
('divya', 'keyboard', 3, 800, '2026-01-15'),
('kumar', 'headphones', 2, 1200, '2026-01-18'),
('priya', 'usb cable', 1, 250, '2026-01-20'),
('suresh', 'monitor', 4, 12000, '2026-01-22'),
('meena', 'pen drive', 1, 450, '2026-01-25'),
('raja', 'printer', 2, 8000, '2026-01-27'),
('kavya', 'charger', 5, 350, '2026-01-29'),
('john', 'speaker', 3, 1500, '2026-02-01');

delete from orders where order_id = 4;

delete from orders where quantity < 2 and order_id>0;

delete from orders where price < 500 and quantity < 5 and order_id > 0;

