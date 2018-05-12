# SQL-Markdown-Notes

1. start the mysql CLI:
`mysql-ctl cli;`
2. List databases:
`show databases;`

## Section 1: Creating databases and tables

**Create databases:**
```sql
CREATE DATABASES database_name;
```

**Drop databases:**
```sql
DROP DATABASE database_name;
```

**Use database:**
```sql
USE database_name;
```

**See the current selected database:**
```sql
SELECT database();
```

**Common Data types:**
1. Variable string:
VARCHAR(string_length)
2. Integer:
INT

**Create my own table:**
```sql
CREAT TABLE table_name
(
col_name data_type,
col_name data_type
);
```

Example of create table:
```sql
CREATE TABLE cats (
  name VARCHAR(100),
  age INT
);
```

**Checking tables:**
```sql
SHOW TABLES;
SHOW COLUMNS FROM table_name;
DESC table_name;
```

**Dropping tables:**
```sql
DROP TABLE table_name;
```

## Section 2: Inserting Data
**Insert data**
Generic:
```sql
INSERT INTO table_name(column_name) VALUES (data);
```
Example:
```sql
INSERT INTO cat(name, age)
VALUE('Uni', 1)
```

**Insert Multiple Data**
```sql
INSERT INTO table_name 
            (column_name, column_name) 
VALUES      (value, value), 
            (value, value), 
            (value, value);
```

**View Inserted Data**
```sql
SELECT * FROM cats; 
```

**View Warning**
```sql
SHOW WARNINGS;
```

**Create table with NOT NULL constraints**
```sql
CREATE TABLE cats2
(
  name VARCHAR(100) NOT NULL,
  age INT NOT NULL
);
```

**Create table with NOT NULL constraints and default value**
```sql
CREATE TABLE cats4
(
  name VARCHAR(20) NOT NULL DEFAULT 'unnamed',
  age INT NOT NULL DEFAULT 99
);
```

**Primary Key: a unique identifier**
```sql
CREATE TABLE unique_cats
(
  cat_id INT NOT NULL,
  name VARCHAR(100),
  age INT,
  PRIMARY KEY (cat_id)
);
```

**Adding AUTO_INCREMENT:**
```sql
CREATE TABLE unique_cats2 (
  cat_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100),
  age INT,
  PRIMARY KEY (cat_id)
);
```

**More Complex Example**
```sql
CREATE TABLE employees (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  middle_name VARCHAR(255),
  age INT NOT NULL,
  current_status VARCHAR(255) NOT NULL DEFAULT 'employed'
);
```
testing:
```sql
INSERT INTO employees(first_name, last_name, age) VALUES
('Dora', 'Smith', 58);
```

## Section 3: CRUD Commands
### Create
**CREATE cats table**
```sql
CREATE TABLE cats (
  cat_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  breed VARCHAR(100),
  age INT
);
```

**INSERT cats' data**
```sql
INSERT INTO cats(name, breed, age) 
VALUES ('Ringo', 'Tabby', 4),
       ('Cindy', 'Maine Coon', 10),
       ('Dumbledore', 'Maine Coon', 11),
       ('Egg', 'Persian', 4),
       ('Misty', 'Tabby', 13),
       ('George Michael', 'Ragdoll', 9),
       ('Jackson', 'Sphynx', 7);
```

### Read
SELECT command: select data from a database.
1. SELECT all columns
```sql
SELECT * FROM tablename;
```

2. SELECT specified column
```sql
SELECT colname FROM tablename;
```

3. SELECT specified columns
```sql
SELECT colname1, colnames2 FROM tablename;
```

**WHERE clause: filter records.**
```sql
SELECT * FROM tablename WHERE colvalue=1;
```

**AS: give a table, or a column in a table, a temporary name.**
```sql
SELECT user_id AS id, username as name FROM Employees;
```

### Update
**UPDATE : modify the existing records in a table.**
```sql
UPDATE tablename SET colvalue=NewValue 
WHERE colname=specifiedValue;
```

### Delete
**DELETE: delete existing records in a table.**
```sql
DELETE FROM tablename WHERE condition=TRUE;
```

## Section 4: String functions
**1. SOURCE: load sql file**
```sql
SOURCE filename.sql
```

**2. CONCAT: concatenates two or more expressions together.**
```sql
SELECT 
  CONCAT(col1, ' ', col2) AS 'new col'
FROM tablename;
```

**3. CONCAT_WS: concatenates with first argument separator**
```sql
SELECT 
  CONCAT_WS('-', col1, col2, col3) 
FROM tablename;
```

**4. SUBSTRING: select substring of a string**
```sql
SELECT SUBSTRING(colname, start, end)
FROM tablename;
```

**5. REPLACE: replace part of a string (case sensitive)**
```sql
SELECT REPLACE('string1', 'str', '123');
```

**6. REVERSE: reverse a string**
```sql
SELECT REVERSE('123');
SELECT REVERSE('a string') FROM tablename;
```

**7. CHAR_LENGTH: return string length**
```sql
SELECT CHAR_LENGTH('123');
SELECT CHAR_LENGTH('string') FROM tablename;
```

**8. UPPER: return uppercase string**
```sql
SELECT UPPER('123');
SELECT UPPER('string') FROM tablename;
```

**9. LOWER: return lowercase string**
```sql
SELECT LOWER('123');
SELECT LOWER('string') FROM tablename;
```

## Section 5: Refining SELECTion
**1. DISTINCT: find the distinct row of a column**
```sql
SELECT DISTINCT colname FROM tablename;
SELECT DISTINCT colname1, colname2 FROM tablename;
```

**2. ORDER BY: sort results (ascending default)**
```sql
SELECT colname FROM tablename ORDER BY colname; 

SELECT colname FROM tablename ORDER BY colname DESC; -- descending order

SELECT colname FROM tablename ORDER BY 1; -- sort by column 1 

SELECT colname FROM tablename ORDER BY col1, col2; -- sort by multiple  columns
```
**3. LIMIT: limit response length**
```sql
SELECT colname FROM tablename LIMIT 5; -- limit reponse to 5 rows

SELECT colname FROM tablename LIMIT 0,5; -- limit response to 5 rows starts at 0 to end at 5
```

**4. LIKE: search for a specified pattern in a column**
% : The percent sign represents zero, one, or multiple characters
_ : The underscore represents a single character

```sql
WHERE colname LIKE '%a%'; -- contain a

WHERE colname LIKE '%a'; -- ends with a

WHERE colname LIKE 'a%'; -- starts with a 

WHERE colname LIKE '_a%'; -- second letter with a 
```

**5. Wildcard: substitute any other character(s) in a string.**
```sql
WHERE colname LIKE '%\%%'; -- match a percent sign

WHERE colname LIKE '%\_%'; -- match a underscore symbol

WHERE colname LIKE '__'; -- 2 char length long

WHERE colname LIKE '[a-z]%'; -- match letter starts from a to z

WHERE colname LIKE '[abc]%'; -- match staring starts with letter a or b or c
```
## Section 6: Aggregate Functions

**1. COUNT: count number of rows**
```sql
SELECT COUNT(*) FROM tablename; -- count number of row
SELECT COUNT(colname) FROM tablename; -- count number of row of a column
SELECT COUNT(DISTINCT colname) FORM tablename; -- count distinct row of a column
```

**2. GROUP BY: aggregates identical data into single rows**
```sql
SELECT colname FROM tablename GROUP BY colname;
```

**3. MIN: return minimum column value**
```sql
SELECT MIN(colname) FROM tablename;
```

**4. MAX: return maximum column value**
```sql
SELECT MAX(colname0 FROM tablename GROUP BY colname;
```

**5. MAX/MIN with GROUP BY**
Group row first before finding minimum
```sql
SELECT colname1,
       MIN(colname2) 
FROM tablename 
GROUP BY colname2;
```

**6. SUM: sum column value**
```sql
SELECT colname1, SUM(colname2)
FROM tablename
GROUP BY colname2;
```

**7. AVG: average column value**
```sql
SELECT AVG(colname) FROM tablename;

SELECT colname1, AVG(colname2)
FROM tablename
GROUP BY colname2;
```

## Section 7: Data Types
**1. Difference between VARCHAR nad CHAR**
1. VARCHAR: has variable size according to the value
2. CHAR: has fixed size. Faster for fixed length text

**2. DECIMAL(size, d): number with decimal point**
```sql
CREATE TABLE item (price DECIMAL(5,2)); -- 5 digits with 2 decimal digits (ex. 999.99) 

INSERT INTO items(price) VALUES(7); -- 7.00
 
INSERT INTO items(price) VALUES(7987654); -- 999.99
 
INSERT INTO items(price) VALUES(34.88); --34.88
 
INSERT INTO items(price) VALUES(298.9999); -- 299.00 rounded up
 
INSERT INTO items(price) VALUES(1.9999); -- 2.00 rounded up
```

**2. FLOAT and DOUBLE**
What's the difference between DECIMAL with FLOAT or DOUBLE?
1. DECIMAL: fixed point type
2. FLOAT or DOUBLE: floating point type and calculations are approximated.

What's the difference between FLOAT and DOUBLE?
1. FLOAT: memory needed 4 Bytes and precision issues around 7 digits
2. DOUBLE: memory needed 8 Bytes and precision issues around 15 digits
```sql
CREATE TABLE things (price FLOAT);
 
INSERT INTO things (price) VALUES (88.45); -- 88.45
 
INSERT INTO things (price) VALUES (8877.45); -- 8877.45
 
INSERT INTO things (price) VALUES (8877665544.45); -- 8877670000
```

**3. DATE: values with a date with no time (YYYY-MM-DD format)**
```sql
CREATE TABLE baby (
  birthdate DATE;
);

INSET INTO tablename (birthdate)
VALUES ('1111-11-11');
```

**4. TIME: values with a time with no date (HH:MM:SS format)**
```sql
CREATE TABLE baby (
  birthtime TIME;
);

INSET INTO tablename (birthtime)
VALUES ('11:11:11');
```

**5. DATETIME: values with a date with time (YYYY-MM-DD HH:MM:SS format)**
```sql
CREATE TABLE baby (
  birth_datetime DATETIME;
);

INSET INTO tablename (birth_datetime)
VALUES ('1111-11-11 11:11:11');
```

**6. CURDATE(), CURTIME(), NOW()**
1. CURDATE(): get current date
2. CURTIME(): get current time
3. NOW(): get curent datetime
```sql
CREATE TABLE baby (
  birth_date DATE,
  birth_time TIME,
  birth_datetime DATETIME
);

INSERT INTO baby(birth_date, birth_time, birth_datetime)
VALUES (CURDATE(), CURTIME(), NOW());
```

**7. DAY(), DAYNAME(), DATOFWEEK(), DAYOFYEAR()**
1. DAY(): get the day from datetime
2. DAYNAME(): get the name of the day
3. DATOFWEEK(): get the number of day in a week
4. DAYOFYEAR(): get the number of day in a year
See more in sql documentation

**8. DATE_FORMAT: formate datetime**
```sql
SELECT 
  DATE_FORMAT(birth_datetime, '%m/%d/%Y at %h:%i') 
FROM baby;
```

Example of casting datetime:
```sql
SELECT 
  name, 
  birth_datetime 
FROM people
WHERE 
  birth_datetime BETWEEN CAST('1980-01-01' AS DATETIME)
  AND CAST('2000-01-01' AS DATETIME);
```

**9. DATEDIFF: difference between 2 dates**
```sql
SELECT 
  DATEDIFF(NOW(), birthdate)
FROM baby; -- return the difference between a person's birthday and today
```

**10. DATE_ADD: perform addition on a date**
```sql
SELECT 
  birth_datetime, 
  DATE_ADD(birth_datetime, INTERVAL 1 MONTH) 
FROM baby; -- return the incremented datetime
```

Same as:
```sql
SELECT 
  birth_datetime, 
  birth_datetime + INTERVAL 1 MONTH 
FROM baby; -- return the incremented datetime
```

**11. Arithmetics on datetime**
```sql
SELECT 
  birth_datetime, 
  birth_datetime + INTERVAL 15 MONTH + INTERVAL 10 HOUR 
FROM baby;
```

**12. TIMESTAMP: smaller range of datetime data type**
```sql
CREATE TABLE comments (
  content VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
); -- store current time when insert new content

INSERT INTO comments (content) VALUES('1'); -- the current time is stored

CREATE TABLE comments2 (
  content VARCHAR(100),
  changed_at TIMESTAMP DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP
); -- update current time when update content

INSERT INTO comments (content) VALUES('1'); -- the current time is stored

UPDATE comments2 
SET content='new content' 
WHERE content='1'; -- the created_at is updated with the current timestamp
```

## Section 8: Logical Operators
**1. Not equal**
```sql
SELECT colname FROM table
WHERE colname != someValue; 
```

**2. LIKE and NOT LIKE**
```sql
SELECT colname FROM table
WHERE colname LIKE someValue;

SELECT colname FROM table
WHERE colname NOT LIKE someValue; 
```

**3. < = > <= >=**
```sql
SELECT colname FROM table
WHERE colname < someValue;

SELECT colname FROM table
WHERE colname = someValue;

SELECT colname FROM table
WHERE colname > someValue; 

SELECT colname FROM table
WHERE colname <= someValue; 

SELECT colname FROM table
WHERE colname >= someValue; 

SELECT 1 > 0; -- return 1
SELECT 1 < 0; -- return 0
SELECT 'a' > 'b'; -- return 0
SELECT 'a' < 'b'; -- return 1
SELECT 'A' > 'a'; -- return 0
SELECT 'A' = 'a'; -- return 1
SELECT 'A' >= 'a'; -- return 1
```

**4. AND &&: 2 or more need to be true**
```sql
SELECT colname1,
       colname2
FROM tablename
WHERE colanme1 = value1 AND 
      colname2 = value2;

SELECT colname1,
       colname2
FROM tablename
WHERE colanme1 = value1 && 
      colname2 = value2;

SELECT 1=1 AND 1!=1; -- return 0
SELECT 1=1 AND 1>=1; -- return 1
```

**4. OR ||: either side is true**
```sql
SELECT colname1,
       colname2
FROM tablename
WHERE colanme1 = value1 OR 
      colname2 = value2;

SELECT colname1,
       colname2
FROM tablename
WHERE colanme1 = value1 || 
      colname2 = value2;

SELECT 1=1 || 1!=1; -- return 1
SELECT 1!=1 OR 1>1; -- return 0
```

**5. BETWEEN and NOT BETWEEN**
```sql
SELECT colname1,
       colname2
FROM tablename
WHERE colanme1 
BETWEEN value1 AND value2;

SELECT colname1,
       colname2
FROM tablename
NOT WHERE colanme1 
BETWEEN value1 AND value2;
```

**6. IN and NOT IN**
```sql
SELECT colname1,
       colname2
FROM tablename
WHERE colanme1 
NOT IN (1,2,3,4,5);

SELECT colname1,
       colname2
FROM tablename
WHERE colanme1 
IN (1,2,3,4,5);

SELECT colname1,
       colname2
FROM tablename
WHERE colanme1 % 2 != 1; -- odd numbers
```

**7. CASE: return bases on condition**
```sql
SELECT colname
  CASE 
    WHEN colname = 1 THEN 'one'
    WHEN colname = 2 THEN 'two'
    ELSE 'many'
  END AS COUNTING
FROM tablename; 
```

## Section 9: One to Many
**1. Definition of 1 to many**
The One-to-Many relationship is defined as a relationship between two tables where a row from one table can have multiple matching rows in another table.

**2. PRIMARY KEY and FOREIGN KEY**
1. PRIMARY KEY: 
It identifies each record in a database table with UNIQUE values, and cannot contain NULL values. A table can have only one primary key, which may consist of single or multiple fields.

2. FOREIGN KEY: 
It is a key used to link two tables together. It is a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table. The table containing the foreign key is called the child table, and the table containing the candidate key is called the referenced or parent table.

3. Example use of FOREIGN KEY and PRIMARY KEY:
```sql
-- Create customers and orders tables
CREATE TABLE customers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email VARCHAR(100)
);
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_date DATE,
  amount DECIMAL(8,2),
  customer_id INT,
  FOREIGN KEY(customer_id) REFERENCES customers(id)
);

-- insert data into customers and orders tables
INSERT INTO customers (first_name, last_name, email) 
VALUES ('Boy', 'George', 'george@gmail.com'),
       ('George', 'Michael', 'gm@gmail.com'),
       ('David', 'Bowie', 'david@gmail.com'),
       ('Blue', 'Steele', 'blue@gmail.com'),
       ('Bette', 'Davis', 'bette@aol.com');
       
INSERT INTO orders (order_date, amount, customer_id)
VALUES ('2016/02/10', 99.99, 1),
       ('2017/11/11', 35.50, 1),
       ('2014/12/12', 800.67, 2),
       ('2015/01/03', 12.50, 2),
       ('1999/04/11', 450.25, 5);

-- test the foreign key constraint
INSERT INTO orders (order_date, amount, customer_id)
VALUES ('2016/06/06', 33.67, 98);

-- find orders placed by George
SELECT id FROM customers WHERE last_name='George';
SELECT * FROM orders WHERE customer_id = 1;

-- or 
SELECT * FROM orders 
WHERE customer_id = (
  SELECT id FROM customers
  WHERE last_name='George'
);
```

**3. JOIN**
1. Cross Join:
Cross join produces a result set which is the number of rows in the first table multiplied by the number of rows in the second table if no WHERE clause is used along with CROSS JOIN.This kind of result is called as Cartesian Product.
```sql
SELECT * FROM customers, orders;
```

![Inner Join Venne Diagram](inner_join.gif)

2. Implicit Inner Join:
Selects records that have matching values in both tables.
```sql
SELECT first_name, last_name, order_date, amount FROM customers, orders 
WHERE customers.id = orders.customer_id;
```

3. Explicit Inner Join (recommended):
Selects records that have matching values in both tables.
```sql
SELECT first_name, last_name, order_date, amount FROM customers 
INNER JOIN orders,
  ON customers.id = orders.customer_id;
```

![Left Venne Diagram](left_join.gif)

4. Left Join:
returns all records from the left table (table1), and the matched records from the right table (table2). The result is NULL from the right side, if there is no match.
```sql
-- left join customers with their orders
SELECT first_name, last_name, order_date, amount
FROM customers
LEFT JOIN orders
  ON customers.id = orders.customer_id; 

-- group by customer_id and left join customer spending to see the order of total spending
SELECT 
  first_name, 
  last_name,
  IFNULL(SUM(amount), 0) AS total_spent -- if amount is NULL, change it to 0
FROM customers
LEFT JOIN orders
  ON customers.id = orders.customer_id
GROUP BY customers.id
ORDER BY total_spent;
```
