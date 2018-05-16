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
**1. Definition of one to many**
The One-to-Many relationship is defined as a relationship between two tables where a row from one table can have multiple matching rows in another table.

**2. PRIMARY KEY and FOREIGN KEY**
1. PRIMARY KEY: 
It identifies each record in a database table with UNIQUE values, and cannot contain NULL values. A table can have only one primary key, which may consist of single or multiple fields.

2. FOREIGN KEY: 
It is a key used to link two tables together. It is a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table. The table containing the foreign key is called the child table, and the table containing the candidate key is called the referenced or parent table.

**3. Example use of FOREIGN KEY and PRIMARY KEY:**
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

-- test the foreign key constraint (this will not -- work because there is no customer with id 98)
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

**4. JOINs**
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

4. LEFT JOIN:
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

![Right Venne Diagram](right_join.gif)

5. RIGHT JOIN:
returns all records from the right table (table2), and the matched records from the left table (table1). The result is NULL from the left side, when there is no match.

```sql
SELECT * FROM customers
RIGHT JOIN orders
  ON customers.id = orders.customer_id;
```

## Section 10: Many to Many
**1. Definition of Many to Many**

**2. Example of Many to Many**
```sql
-- create tables for tv review database
CREATE TABLE reviewers (
	id INT AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(100),
	last_name VARCHAR(100)
);

CREATE TABLE series (
	id INT AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(100),
	released_year YEAR(4),
	genre VARCHAR(100)
);

CREATE TABLE reviews (
	id INT AUTO_INCREMENT PRIMARY KEY,
	rating DECIMAL(2,1),
	series_id INT,
	reviewer_id INT,
	FOREIGN KEY(series_id) REFERENCES series(id),
	FOREIGN KEY(reviewer_id) REFERENCES reviewers(id)
);

-- insert data into the tables
INSERT INTO series (title, released_year, genre) VALUES
  ('Archer', 2009, 'Animation'),
  ('Arrested Development', 2003, 'Comedy'),
  ("Bob's Burgers", 2011, 'Animation'),
  ('Bojack Horseman', 2014, 'Animation'),
  ("Breaking Bad", 2008, 'Drama'),
  ('Curb Your Enthusiasm', 2000, 'Comedy'),
  ("Fargo", 2014, 'Drama'),
  ('Freaks and Geeks', 1999, 'Comedy'),
  ('General Hospital', 1963, 'Drama'),
  ('Halt and Catch Fire', 2014, 'Drama'),
  ('Malcolm In The Middle', 2000, 'Comedy'),
  ('Pushing Daisies', 2007, 'Comedy'),
  ('Seinfeld', 1989, 'Comedy'),
  ('Stranger Things', 2016, 'Drama');
 
 
INSERT INTO reviewers (first_name, last_name) VALUES
  ('Thomas', 'Stoneman'),
  ('Wyatt', 'Skaggs'),
  ('Kimbra', 'Masters'),
  ('Domingo', 'Cortes'),
  ('Colt', 'Steele'),
  ('Pinkie', 'Petit'),
  ('Marlon', 'Crafford');
    
 
INSERT INTO reviews(series_id, reviewer_id, rating) 
VALUES
  (1,1,8.0),(1,2,7.5),(1,3,8.5),(1,4,7.7),(1,5,8.9),
  (2,1,8.1),(2,4,6.0),(2,3,8.0),(2,6,8.4),(2,5,9.9),
  (3,1,7.0),(3,6,7.5),(3,4,8.0),(3,3,7.1),(3,5,8.0),
  (4,1,7.5),(4,3,7.8),(4,4,8.3),(4,2,7.6),(4,5,8.5),
  (5,1,9.5),(5,3,9.0),(5,4,9.1),(5,2,9.3),(5,5,9.9),
  (6,2,6.5),(6,3,7.8),(6,4,8.8),(6,2,8.4),(6,5,9.1),
  (7,2,9.1),(7,5,9.7),
  (8,4,8.5),(8,2,7.8),(8,6,8.8),(8,5,9.3),
  (9,2,5.5),(9,3,6.8),(9,4,5.8),(9,6,4.3),(9,5,4.5),
  (10,5,9.9),
  (13,3,8.0),(13,4,7.2),
  (14,2,8.5),(14,3,8.9),(14,4,8.9);

-- INNER JOIN tables
-- find rating of tv series
SELECT 
  title, 
  rating 
FROM series
JOIN reviews
  ON series.id = reviews.series_id;

-- find average rating of tv series
SELECT 
  title, 
  AVG(rating) AS avg_rating
FROM series
JOIN reviews
  ON series.id = reviews.series_id
GROUP BY series.id
ORDER BY avg_rating;

-- find reviewers' reviews
SELECT
  first_name,
  last_name,
  rating
FROM reviewers
INNER JOIN reviews
  ON reviewers.id = reviews.reviewer_id;

-- find unreviewed series
SELECT title AS unreviewed_series
FROM series
LEFT JOIN reviews
  ON series.id = reviews.series_id
WHERE rating IS NULL;

-- find average genre rating
SELECT genre, 
  ROUND(AVG(rating), 2) AS avg_rating 
FROM series 
INNER JOIN reviews 
  ON series.id = reviews.series_id 
GROUP BY genre; 

-- find reviwers' status: name, rating, status
SELECT first_name, 
  last_name, 
  COUNT(rating) AS COUNT, 
  IFNULL(MIN(rating), 0) AS MIN, 
  IFNULL(MAX(rating), 0) AS MAX, 
  ROUND(Ifnull(AVG(rating), 0), 2) AS AVG, 
  IF(COUNT(rating) > 0, 'ACTIVE', 'INACTIVE') AS STATUS 
FROM reviewers 
LEFT JOIN reviews 
  ON reviewers.id = reviews.reviewer_id 
GROUP BY reviewers.id; 

-- find power users' status
SELECT first_name, 
  last_name, 
  COUNT(rating) AS COUNT, 
  IFNULL(MIN(rating), 0) AS MIN, 
  IFNULL(MAX(rating), 0) AS MAX, 
  ROUND(IFNULL(AVG(rating), 0), 2) AS AVG, 
  CASE 
    WHEN COUNT(rating) >= 10 THEN 'POWER USER' 
    WHEN COUNT(rating) > 0 THEN 'ACTIVE' 
    ELSE 'INACTIVE' 
  END AS STATUS 
FROM reviewers 
LEFT JOIN reviews 
  ON reviewers.id = reviews.reviewer_id 
GROUP BY reviewers.id; 

-- join 3 tables together to show the data
SELECT 
  title,
  rating,
  CONCAT(first_name,' ', last_name) AS reviewer
FROM reviewers
INNER JOIN reviews 
  ON reviewers.id = reviews.reviewer_id
INNER JOIN series
  ON series.id = reviews.series_id
ORDER BY title;
```

## Section 11: Design Instagram Database Clone
**1. Things to consider**
1. Photos
2. Users
3. Likes
4. Hashtags
5. Comments
6. Followers
7. Followees
etc ...

**2. Implement the instagram clone**
```sql
-- create the database
CREATE DATABASE ig_clone;
USE ig_clone;

-- user table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- photos table
CREATE TABLE photos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  image_url VARCHAR(255) NOT NULL,
  user_id INT NOT NULL, -- point to users table
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY(user_id) REFERENCES users(id)
);

-- comments table
CREATE TABLE comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  comment_text VARCHAR(255) NOT NULL,
  user_id INT NOT NULL, -- point to users table
  photo_id INT NOT NULL, -- point to photos table
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(photo_id) REFERENCES photos(id)
);

-- likes table
CREATE TABLE likes (
  user_id INT NOT NULL,
  photo_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(photo_id) REFERENCES photos(id),
  PRIMARY KEY(user_id, photo_id) -- prevent duplications
);

-- follows table
CREATE TABLE follows (
  follower_id INT NOT NULL,
  followee_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY(follower_id) REFERENCES users(id),
  FOREIGN KEY(followee_id) REFERENCES users(id),
  PRIMARY KEY(follower_id, followee_id) -- prevent duplications
);

-- tags table
CREATE TABLE tags (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tag_name VARCHAR(255) UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- photo_tags table
CREATE TABLE photo_tags (
  photo_id INT NOT NULL,
  tag_id INT NOT NULL,
  FOREIGN KEY(photo_id) REFERENCES photos(id),
  FOREIGN KEY(tag_id) REFERENCES tags(id),
  PRIMARY KEY(photo_id, tag_id)
);
```

## Section 12: Working with instagram data
**1. Load the data**
see the ig_clone_data.sql file and load it
```sql
source ig_clone_data.sql
```

**2. Playing with data**
1. Find the top 5 oldest users
```sql
SELECT
  username, 
  created_at
FROM users
ORDER BY created_at
LIMIT 5;
```

2. Find the top 3 most popular registration day of a week
```sql
SELECT
  username, 
  DAYNAME(created_at) AS day,
  COUNT(*) AS total
FROM users
GROUP BY day
ORDER BY total DESC
LIMIT 3;
```

3. Find the inactive users who have never post a photo on instagram
```sql
SELECT username
FROM users
LEFT JOIN photos
  ON users.id = photos.user_id
WHERE photos.id IS NULL;
```

4. Find the most liked photo user
```sql
SELECT 
  username,
  photos.id,
  photos.image_url, 
  COUNT(*) AS total
FROM photos
INNER JOIN likes
  ON likes.photo_id = photos.id
INNER JOIN users
  ON photos.user_id = users.id
GROUP BY photos.id
ORDER BY total DESC
LIMIT 1;
```

5. Find the average posts a user make
total photos / total users
```sql
SELECT 
  (SELECT COUNT(*) FROM photos) /
  (SELECT COUNT(*) FROM users) 
  AS avg_post;
```

6. Find the top 5 popular hashtag
```sql
SELECT tags.tag_name AS tag, 
  COUNT(*) AS total 
FROM photo_tags 
JOIN tags 
  ON photo_tags.tag_id = tags.id 
GROUP BY tags.id 
ORDER BY total DESC 
LIMIT 5; 
```

7. Find users who have liked every single photo on a site
```sql
SELECT username, 
  COUNT(*) AS num_likes 
FROM users 
INNER JOIN likes 
  ON users.id = likes.user_id 
GROUP BY likes.user_id 
HAVING num_likes = (SELECT COUNT(*) 
  FROM photos); 
```

## Section 13: NodeJS with MySQL
**1. Install MySQL Node Package**
`npm install mysql`

**2. Connect to Database**
```javascript
var mysql = require('mysql');

// establish a connection with database
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'database user name here',
  database : 'database name here'
});
```

**3. Run Queries**
```javascript
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
   if (error) throw error;
   console.log('The solution is: ', results[0].solution);
});

var q = 'SELECT CURTIME() as time, CURDATE() as date, NOW() as now';
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].time);
  console.log(results[0].date);
  console.log(results[0].now);
});
```

**4. Create an users table for NodeJS**
```sql
CREATE TABLE users (
  email VARCHAR(255) PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**5. Insert users (from mysql command line)**
```sql
INSERT INTO users (email) VALUES('Katie34@yahoo.com'), ('Tunde@gmail.com');
```

**6. SELECT Users from database through NodeJS**
```javascript
// select all users
var q = 'SELECT * FROM users ';
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

// count total users
var q = 'SELECT COUNT(*) AS total FROM users ';
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].total);
});
```

**7. INSERT users to database though NodeJS**
```javascript
// used faker npm package for generating fake user info
var person = {
    email: faker.internet.email(),
    created_at: faker.date.past()
};
 
var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
  if (err) throw err;
  console.log(result);
});

// insert 500 faker users into database
var data = [];
for(var i = 0; i < 500; i++){
  data.push([
    faker.internet.email(),
    faker.date.past()
  ]);
}
 
var q = 'INSERT INTO users (email, created_at) VALUES ?';
 
connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});
 
connection.end();
```

**8. Solving problem with MySQL**
```sql
-- find earliest user
SELECT 
  DATE_FORMAT(MIN(created_at), "%M %D %Y") as earliest_date 
FROM users;

-- find earliest user's email
SELECT * 
FROM users 
WHERE created_at = (SELECT Min(created_at) FROM users); 

-- find popular registration month
SELECT Monthname(created_at) AS month, 
       COUNT(*) AS count 
FROM users 
GROUP BY month 
ORDER BY count DESC;

-- count users' registraion email host
SELECT 
  CASE 
    WHEN email LIKE '%@gmail.com' THEN 'gmail' 
    WHEN email LIKE '%@yahoo.com' THEN 'yahoo' 
    WHEN email LIKE '%@hotmail.com' THEN 'hotmail' 
    ELSE 'other' 
  END AS provider, 
  COUNT(*) AS total_users 
FROM users 
GROUP BY provider 
ORDER BY total_users DESC; 
```

## Section 14: NodeJS with MySQL Project JOIN US
**See folder "NodeJS with MySQL Project"**

**1. Create a join_us databse**
```sql
CREATE DATABASE join_us;
```
**2. Create table users like the above section and insert data"**

**3. Using express to build a simple website with RESTful API**
1. GET route: /
2. POST route: /register

**4. Create CSS rules to beautify website**

**Final screenshot**
![Website Screenshot](screenshot.PNG)

