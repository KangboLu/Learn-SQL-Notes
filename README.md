# SQL-Markdown-Notes

## Section 1: Introduction and 5 Minutes of SQL

**Step 1.**
```sql
SELECT * FROM customers;
```

**Step 2.**  
```sql
SELECT * FROM orders;
```

**Step 3.**  

```sql
SELECT *
FROM products
ORDER BY Price DESC;
```


**Step 4.**
```sql
SELECT 
customerName,
COUNT(*) AS 'number of orders'
FROM customers
INNER JOIN orders
ON orders.customerID = customers.customerID
GROUP BY customers.customerID;
```

## Section 3: Creating databases and tables

**Create databases:**
1. start the CLI:
`mysql-ctl cli;`
2. List databases:
`show databases;`
3. Create databases:
`CREATE DATABASES database_name;`

**Drop databases:**
Drop a databases:
```sql
DROP DATABASE database_name;
```

**Use database:**
```sql
USE database_name;
```
See the current selected database:
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

Example of cats table:
```sql
CREATE TABLE cats
(
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
