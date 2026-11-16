use college_db;

create table products(
product_id INT PRIMARY KEY AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL UNIQUE,
price DECIMAL(10,2) CHECK (price > 0),
category VARCHAR(100) NOT NULL,
stock INT DEFAULT 0 CHECK (stock >= 0),
manufacturing_date DATE
);

alter table products
rename to product_details;

ALTER TABLE product_details
RENAME COLUMN price TO product_price;

ALTER TABLE product_details
DROP COLUMN manufacturing_date;
