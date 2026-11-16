use college_db;

select * from employees where department = 'it' and salary > 30000;

select * from students where age between 18 and 25 and city in ('chennai', 'madurai');

select category, 
sum(stock) as total_stock, 
avg(price) as average_pricefrom products group by category;

select category, sum(stock) as total_stock, avg(price) as average_price from products group by category;

select department, avg(salary) as average_salary
from employees
where salary > 25000
group by department
having avg(salary) > 40000;