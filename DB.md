Understanding of data access abstraction layers (driver/query, query builder, ORM/ODM)
SQL vs NoSQL databases (basic comparison, pros/cons of each)
ASID vs BASID?

### At least basic knowledge of:
Data modelling (data structure, queries, projections, indexes, etc.)
CAP theorem
Caching solutions (Reddis, Memcached, etc.)

Elasticsearch
ClickHouse
MongoDB

### Basic SQL and Queries

<details>
<summary>1. What is PostgreSQL and what are its main features?</summary>
PostgreSQL is an advanced, open-source relational database management system (RDBMS) known for its reliability, feature robustness, and performance. It supports both SQL (relational) and JSON (non-relational) querying. Main features of PostgreSQL include:

- **ACID Compliance**: Ensures transactions are processed reliably.
- **Support for Advanced Data Types**: Includes JSON, arrays, hstore (key-value pairs), and more.
- **Extensibility**: Supports custom functions, data types, operators, and more.
- **MVCC (Multi-Version Concurrency Control)**: Handles concurrent transactions without locking.
- **Advanced Indexing Techniques**: Such as B-tree, GIN, GiST, and full-text search.
- **Replication and Clustering**: Supports streaming replication and other high-availability configurations.
- **Foreign Data Wrappers**: Allows querying other databases and data sources from within PostgreSQL.
- **Robust Security Features**: Includes authentication, SSL, and advanced user management.
</details>

<details>
<summary>2. How do you connect to a PostgreSQL database using psql?</summary>
To connect to a PostgreSQL database using psql, you use the `psql` command followed by connection options. The basic syntax is:

```bash
psql -h hostname -p port -U username -d dbname
```

For example:

```bash
psql -h localhost -p 5432 -U postgres -d mydatabase
```

- **-h**: Specifies the host (server) of the database.
- **-p**: Specifies the port number.
- **-U**: Specifies the username.
- **-d**: Specifies the database name.

After running this command, you will be prompted to enter the password for the specified user.
</details>

<details>
<summary>3. How do you create a new database in PostgreSQL?</summary>
To create a new database in PostgreSQL, you can use the SQL command `CREATE DATABASE` followed by the desired database name. This command is typically run in psql or another PostgreSQL client:

```sql
CREATE DATABASE mynewdatabase;
```

Alternatively, you can create a new database from the command line using createdb:

```bash
createdb mynewdatabase
```
</details>

<details>
<summary>4. How do you create a new table in PostgreSQL?</summary>
To create a new table in PostgreSQL, use the `CREATE TABLE` statement followed by the table definition. For example:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

This command creates a table named `users` with columns for `id`, `username`, `email`, and `created_at`, where:
- `id` is a serial column and the primary key.
- `username` and `email` are required fields (not null).
- `email` must be unique.
- `created_at` defaults to the current timestamp.
</details>

<details>
<summary>5. What are the different data types available in PostgreSQL?</summary>
PostgreSQL supports a wide range of data types, including:

- **Numeric Types**: `SMALLINT`, `INTEGER`, `BIGINT`, `DECIMAL`, `NUMERIC`, `REAL`, `DOUBLE PRECISION`, `SERIAL`, `BIGSERIAL`.
- **Monetary Types**: `MONEY`.
- **Character Types**: `CHARACTER` (or `CHAR`), `CHARACTER VARYING` (or `VARCHAR`), `TEXT`.
- **Binary Data Types**: `BYTEA`.
- **Date/Time Types**: `DATE`, `TIME`, `TIMESTAMP`, `TIMESTAMPTZ` (timestamp with time zone), `INTERVAL`.
- **Boolean Type**: `BOOLEAN`.
- **Enumerated Types**: `ENUM`.
- **Geometric Types**: `POINT`, `LINE`, `LSEG`, `BOX`, `PATH`, `POLYGON`, `CIRCLE`.
- **Network Address Types**: `CIDR`, `INET`, `MACADDR`.
- **Bit String Types**: `BIT`, `BIT VARYING`.
- **Text Search Types**: `TSVECTOR`, `TSQUERY`.
- **UUID Type**: `UUID`.
- **JSON Types**: `JSON`, `JSONB`.
- **Array Types**: Allows storage of multiple values of the same data type in a single field.
- **Composite Types**: User-defined types.
- **Range Types**: `INT4RANGE`, `INT8RANGE`, `NUMRANGE`, `TSRANGE`, `TSTZRANGE`, `DATERANGE`.

These data types enable PostgreSQL to handle a variety of data structures and complex queries.
</details>

<details>
<summary>6. How do you insert data into a PostgreSQL table?</summary>
To insert data into a PostgreSQL table, you use the `INSERT INTO` statement followed by the table name, column names, and the values you want to insert. For example:

```sql
INSERT INTO users (username, email, created_at)
VALUES ('john_doe', 'john@example.com', '2024-06-18 10:00:00');
```

You can also insert multiple rows at once:

```sql
INSERT INTO users (username, email, created_at)
VALUES
('john_doe', 'john@example.com', '2024-06-18 10:00:00'),
('jane_doe', 'jane@example.com', '2024-06-18 11:00:00');
```

If you want to insert data into all columns, you can omit the column names:

```sql
INSERT INTO users
VALUES (1, 'john_doe', 'john@example.com', '2024-06-18 10:00:00');
```
</details>

<details>
<summary>7. How do you update existing data in a PostgreSQL table?</summary>
To update existing data in a PostgreSQL table, you use the `UPDATE` statement followed by the table name, the `SET` clause to specify the columns to be updated and their new values, and the `WHERE` clause to specify which rows to update. For example:

```sql
UPDATE users
SET email = 'new_email@example.com', username = 'new_username'
WHERE id = 1;
```

This command updates the `email` and `username` of the row with `id` equal to 1.
</details>

<details>
<summary>8. How do you delete data from a PostgreSQL table?</summary>
To delete data from a PostgreSQL table, you use the `DELETE FROM` statement followed by the table name and the `WHERE` clause to specify which rows to delete. For example:

```sql
DELETE FROM users
WHERE id = 1;
```

This command deletes the row from the `users` table where `id` is equal to 1.

To delete all rows from a table without removing the table itself, you can use:

```sql
DELETE FROM users;
```

Or alternatively, to delete all rows more efficiently, you can use the `TRUNCATE` statement:

```sql
TRUNCATE TABLE users;
```
</details>

<details>
<summary>9. How do you retrieve data from a PostgreSQL table?</summary>
To retrieve data from a PostgreSQL table, you use the `SELECT` statement followed by the column names you want to retrieve and the `FROM` clause to specify the table name. For example:

```sql
SELECT username, email
FROM users;
```

To retrieve all columns, use the asterisk (`*`):

```sql
SELECT *
FROM users;
```

You can filter the results using the `WHERE` clause:

```sql
SELECT *
FROM users
WHERE id = 1;
```

You can sort the results using the `ORDER BY` clause:

```sql
SELECT *
FROM users
ORDER BY created_at DESC;
```

You can limit the number of results using the `LIMIT` clause:

```sql
SELECT *
FROM users
ORDER BY created_at DESC
LIMIT 10;
```
</details>

<details>
<summary>10. What is the difference between `WHERE` and `HAVING` clauses?</summary>
The `WHERE` and `HAVING` clauses are used to filter records in SQL, but they are used in different contexts:

- **`WHERE` Clause**:
  - Used to filter rows before any groupings are made.
  - Can be used with `SELECT`, `UPDATE`, and `DELETE` statements.
  - Cannot be used with aggregate functions (like `COUNT`, `SUM`, `AVG`, etc.).

  ```sql
  SELECT *
  FROM users
  WHERE id = 1;
  ```

- **`HAVING` Clause**:
  - Used to filter groups of rows after the `GROUP BY` clause.
  - Can only be used with `SELECT` statements.
  - Can be used with aggregate functions.

  ```sql
  SELECT COUNT(*), country
  FROM users
  GROUP BY country
  HAVING COUNT(*) > 10;
  ```

In summary, use `WHERE` to filter rows before grouping and use `HAVING` to filter groups after grouping.
</details>

<details>
<summary>11. How do you perform a JOIN operation in PostgreSQL?</summary>
To perform a JOIN operation in PostgreSQL, you use the `JOIN` clause in the `SELECT` statement. The `JOIN` clause combines rows from two or more tables based on a related column between them. Here is an example of an `INNER JOIN`:

```sql
SELECT users.id, users.username, orders.order_date
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```

In this example, the `INNER JOIN` combines rows from the `users` and `orders` tables where the `id` from the `users` table matches the `user_id` from the `orders` table.
</details>

<details>
<summary>12. What are the different types of JOINs in PostgreSQL?</summary>
PostgreSQL supports several types of JOINs:

- **INNER JOIN**: Returns only the rows that have matching values in both tables.

  ```sql
  SELECT *
  FROM table1
  INNER JOIN table2 ON table1.id = table2.id;
  ```

- **LEFT JOIN (or LEFT OUTER JOIN)**: Returns all rows from the left table and the matched rows from the right table. If no match is found, NULL values are returned for columns from the right table.

  ```sql
  SELECT *
  FROM table1
  LEFT JOIN table2 ON table1.id = table2.id;
  ```

- **RIGHT JOIN (or RIGHT OUTER JOIN)**: Returns all rows from the right table and the matched rows from the left table. If no match is found, NULL values are returned for columns from the left table.

  ```sql
  SELECT *
  FROM table1
  RIGHT JOIN table2 ON table1.id = table2.id;
  ```

- **FULL JOIN (or FULL OUTER JOIN)**: Returns all rows when there is a match in either table. Rows without a match in one of the tables will have NULL values for columns from that table.

  ```sql
  SELECT *
  FROM table1
  FULL JOIN table2 ON table1.id = table2.id;
  ```

- **CROSS JOIN**: Returns the Cartesian product of the two tables, i.e., all possible combinations of rows from the tables.

  ```sql
  SELECT *
  FROM table1
  CROSS JOIN table2;
  ```

- **SELF JOIN**: A regular join but the table is joined with itself.

  ```sql
  SELECT a.column1, b.column2
  FROM table a, table b
  WHERE a.common_field = b.common_field;
  ```
</details>

<details>
<summary>13. How do you use the `GROUP BY` clause in PostgreSQL?</summary>
The `GROUP BY` clause in PostgreSQL is used to group rows that have the same values in specified columns into summary rows, like "find the number of customers in each country". It is often used with aggregate functions (e.g., `COUNT`, `MAX`, `MIN`, `SUM`, `AVG`). Here is an example:

```sql
SELECT country, COUNT(*)
FROM users
GROUP BY country;
```

In this example, the query groups the rows in the `users` table by the `country` column and counts the number of users in each country.
</details>

<details>
<summary>14. What is a subquery and how is it used in PostgreSQL?</summary>
A subquery, also known as an inner query or nested query, is a query within another query. It is used to return data that will be used in the main query as a condition to further restrict the data retrieved. Subqueries can be used in various places like the `SELECT`, `FROM`, `WHERE`, and `HAVING` clauses. Here is an example:

```sql
SELECT username
FROM users
WHERE id IN (SELECT user_id FROM orders WHERE amount > 100);
```

In this example, the subquery `(SELECT user_id FROM orders WHERE amount > 100)` retrieves the `user_id`s from the `orders` table where the `amount` is greater than 100. The main query then selects the `username`s from the `users` table where the `id` is in the list of `user_id`s returned by the subquery.
</details>

<details>
<summary>15. How do you use the `LIMIT` clause in PostgreSQL?</summary>
The `LIMIT` clause in PostgreSQL is used to specify the maximum number of rows to return. It is often used with `ORDER BY` to fetch a subset of the query result. Here is an example:

```sql
SELECT *
FROM users
ORDER BY created_at DESC
LIMIT 10;
```

In this example, the query retrieves the latest 10 rows from the `users` table based on the `created_at` timestamp in descending order.

To skip a specific number of rows before returning the result, you can use the `OFFSET` clause in conjunction with `LIMIT`:

```sql
SELECT *
FROM users
ORDER BY created_at DESC
LIMIT 10 OFFSET 5;
```

In this example, the query skips the first 5 rows and then returns the next 10 rows.
</details>

<details>
<summary>16. What is the `DISTINCT` keyword and how do you use it?</summary>
The `DISTINCT` keyword is used to remove duplicate rows from the result set of a `SELECT` query. It ensures that the returned results contain unique values only. Here is an example:

```sql
SELECT DISTINCT country
FROM users;
```

In this example, the query retrieves unique country names from the `users` table, eliminating any duplicates.
</details>

<details>
<summary>17. How do you create and use an index in PostgreSQL?</summary>
An index in PostgreSQL is a database object that improves the speed of data retrieval operations on a table at the cost of additional storage and maintenance overhead. You create an index using the `CREATE INDEX` statement. Here is an example:

```sql
CREATE INDEX idx_users_email
ON users (email);
```

In this example, an index named `idx_users_email` is created on the `email` column of the `users` table.

To use an index, PostgreSQL automatically uses it in queries where the indexed column(s) are involved, such as:

```sql
SELECT *
FROM users
WHERE email = 'john@example.com';
```

You can also create unique indexes to enforce uniqueness:

```sql
CREATE UNIQUE INDEX unique_users_email
ON users (email);
```
</details>

<details>
<summary>18. What is the purpose of the `ORDER BY` clause?</summary>
The `ORDER BY` clause in PostgreSQL is used to sort the result set of a query by one or more columns. By default, it sorts the results in ascending order, but you can specify `DESC` for descending order. Here is an example:

```sql
SELECT *
FROM users
ORDER BY created_at DESC;
```

In this example, the query retrieves all rows from the `users` table and sorts them by the `created_at` column in descending order. You can also sort by multiple columns:

```sql
SELECT *
FROM users
ORDER BY country, username;
```

This sorts the results first by `country` in ascending order and then by `username` within each country.
</details>

<details>
<summary>19. How do you perform a full-text search in PostgreSQL?</summary>
PostgreSQL provides robust full-text search capabilities using special data types and functions. To perform a full-text search, you typically use the `tsvector` and `tsquery` types along with the `@@` operator. Here is an example:

1. First, create a table with a `tsvector` column:

   ```sql
   CREATE TABLE documents (
     id SERIAL PRIMARY KEY,
     title VARCHAR(100),
     content TEXT,
     tsv_content TSVECTOR
   );
   ```

2. Populate the `tsvector` column with searchable content:

   ```sql
   UPDATE documents
   SET tsv_content = to_tsvector(title || ' ' || content);
   ```

3. Perform a full-text search using the `@@` operator:

   ```sql
   SELECT *
   FROM documents
   WHERE tsv_content @@ to_tsquery('search_query');
   ```

In this example, `to_tsvector` converts the `title` and `content` columns into a `tsvector` format, and `to_tsquery` converts the search string into a `tsquery` format. The `@@` operator checks for a match between the `tsvector` and `tsquery`.
</details>

<details>
<summary>20. How do you use window functions in PostgreSQL?</summary>
Window functions in PostgreSQL perform calculations across a set of table rows related to the current row, but without collapsing the result set like aggregate functions. They are often used with the `OVER` clause. Here is an example of using the `ROW_NUMBER` window function:

```sql
SELECT
  id,
  username,
  created_at,
  ROW_NUMBER() OVER (PARTITION BY country ORDER BY created_at) AS row_num
FROM users;
```

In this example:

- `ROW_NUMBER()` assigns a unique sequential integer to rows within the same partition of the `users` table.
- `OVER (PARTITION BY country ORDER BY created_at)` specifies the partitioning and ordering criteria for the window function. The rows are partitioned by `country` and ordered by `created_at` within each partition.

Other common window functions include `RANK()`, `DENSE_RANK()`, `LAG()`, `LEAD()`, `SUM()`, `AVG()`, etc. Here’s an example using `SUM()` as a window function:

```sql
SELECT
  id,
  username,
  created_at,
  SUM(amount) OVER (PARTITION BY country ORDER BY created_at) AS running_total
FROM transactions;
```

This example calculates a running total of the `amount` column for each `country` ordered by `created_at`.
</details>

### Advanced SQL and Performance

<details>
<summary>26. How do you use the `VACUUM` command and what is its purpose?</summary>
The `VACUUM` command in PostgreSQL is used to clean up the database by reclaiming storage occupied by dead tuples (i.e., rows that have been updated or deleted). It helps to maintain database performance and prevents table bloat. There are two types of `VACUUM`: standard `VACUUM` and `VACUUM FULL`.

- **Standard VACUUM**: Reclaims storage occupied by dead tuples without locking the table. It is typically run regularly.

  ```sql
  VACUUM table_name;
  ```

- **VACUUM FULL**: Reclaims storage more aggressively by locking the table and rewriting it, reducing its size. It is more time-consuming and locks the table during the process.

  ```sql
  VACUUM FULL table_name;
  ```

You can also use `VACUUM` in conjunction with `ANALYZE` to update the statistics used by the query planner:

```sql
VACUUM ANALYZE table_name;
```

This command both reclaims storage and updates statistics.
</details>

<details>
<summary>27. What is the `ANALYZE` command and when do you use it?</summary>
The `ANALYZE` command in PostgreSQL collects statistics about the contents of tables in the database. These statistics are used by the query planner to generate efficient execution plans. Regularly running `ANALYZE` ensures the query planner has up-to-date information, which helps in optimizing queries.

To analyze a specific table:

```sql
ANALYZE table_name;
```

To analyze all tables in the current database:

```sql
ANALYZE;
```

You can also use `ANALYZE` in combination with `VACUUM`:

```sql
VACUUM ANALYZE table_name;
```

This command reclaims storage and updates statistics in one operation.
</details>

<details>
<summary>28. How do you handle database transactions in PostgreSQL?</summary>
In PostgreSQL, transactions are used to execute a series of operations as a single unit of work, ensuring data integrity and consistency. Transactions are managed using the `BEGIN`, `COMMIT`, and `ROLLBACK` commands.

- **BEGIN**: Starts a new transaction.

  ```sql
  BEGIN;
  ```

- **COMMIT**: Ends the current transaction and makes all changes permanent.

  ```sql
  COMMIT;
  ```

- **ROLLBACK**: Aborts the current transaction and undoes all changes made during the transaction.

  ```sql
  ROLLBACK;
  ```

Here is an example of a transaction:

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
COMMIT;
```

If an error occurs during the transaction, you can use `ROLLBACK` to undo all changes:

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
-- Assume an error occurs here
ROLLBACK;
```

You can also use `SAVEPOINT` to set a point within a transaction to which you can roll back:

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
SAVEPOINT savepoint1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
-- Roll back to savepoint if needed
ROLLBACK TO savepoint1;
COMMIT;
```
</details>

<details>
<summary>29. What are isolation levels and how do they impact transactions in PostgreSQL?</summary>
Isolation levels in PostgreSQL define the degree to which transactions are isolated from each other, affecting how visible changes made by one transaction are to others. PostgreSQL supports four isolation levels:

1. **Read Uncommitted**: Allows transactions to see uncommitted changes from other transactions (dirty reads). PostgreSQL implements this as `Read Committed` because it does not support true `Read Uncommitted`.

2. **Read Committed**: The default isolation level. A transaction sees only changes that were committed before it began. It does not see uncommitted changes from other transactions.

  ```sql
  SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
  ```

3. **Repeatable Read**: A transaction sees a consistent snapshot of the database as it was at the start of the transaction. It can read the same data multiple times and get the same result, but it cannot see changes made by other transactions after it started.

  ```sql
  SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
  ```

4. **Serializable**: The highest isolation level. Transactions are executed in a way that it seems as if they are executed one after another, serially. This level prevents phenomena such as dirty reads, non-repeatable reads, and phantom reads.

  ```sql
  SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
  ```

Higher isolation levels provide greater consistency but can lead to increased locking and reduced concurrency, potentially impacting performance.
</details>

<details>
<summary>30. How do you manage deadlocks in PostgreSQL?</summary>
Deadlocks occur when two or more transactions hold locks on resources and each is waiting for the other to release its lock, creating a cycle of dependencies that prevents all transactions from proceeding. PostgreSQL detects deadlocks automatically and resolves them by aborting one of the transactions.

To manage and minimize deadlocks:

1. **Proper Locking Order**: Ensure transactions acquire locks in a consistent order to avoid circular dependencies.

2. **Short Transactions**: Keep transactions short to reduce the chance of deadlocks.

3. **Use Lower Isolation Levels**: Use `Read Committed` instead of `Serializable` when higher isolation is not necessary.

4. **Deadlock Detection**: PostgreSQL automatically detects and resolves deadlocks by aborting one of the transactions. Monitor logs for deadlock errors (typically `ERROR: deadlock detected`) and adjust queries or transaction logic accordingly.

5. **Indexing**: Proper indexing can reduce the need for table-level locks, thereby minimizing the risk of deadlocks.

6. **Avoid Long-Lived Locks**: Avoid holding locks for long periods. Break up long transactions into smaller ones if possible.

If a deadlock occurs, PostgreSQL will terminate one of the transactions and return an error to the client, which can then retry the transaction:

```plaintext
ERROR: deadlock detected
DETAIL: Process 12345 waits for ShareLock on transaction 67890; blocked by process 67891.
Process 67891 waits for ExclusiveLock on transaction 12345; blocked by process 12345.
HINT: See server log for query details.
CONTEXT: SQL statement "..."
```

By carefully designing transactions and monitoring for deadlocks, you can effectively manage and reduce their occurrence in PostgreSQL.
</details>
<details>
<summary>31. What are the benefits of using prepared statements in PostgreSQL?</summary>
Prepared statements in PostgreSQL provide several benefits:

1. **Performance**: Prepared statements are parsed, planned, and optimized once, and then executed multiple times. This reduces the overhead of repeated parsing and planning for similar queries.

2. **Security**: Prepared statements help prevent SQL injection attacks by separating query logic from data. Parameters are bound separately, which means user inputs are not directly interpolated into SQL statements.

3. **Efficiency**: They can reduce network traffic between the application and the database because the statement is prepared once and then executed multiple times with different parameters.

To use prepared statements:

- **Prepare a statement**:

  ```sql
  PREPARE getUserById (int) AS
  SELECT * FROM users WHERE id = $1;
  ```

- **Execute the prepared statement**:

  ```sql
  EXECUTE getUserById(1);
  ```

- **Deallocate the prepared statement**:

  ```sql
  DEALLOCATE getUserById;
  ```

In application code (e.g., using `pg` library in Node.js), you can prepare and execute statements similarly.
</details>

<details>
<summary>32. How do you use the `RETURNING` clause in PostgreSQL?</summary>
The `RETURNING` clause in PostgreSQL allows you to return values from rows that are affected by `INSERT`, `UPDATE`, or `DELETE` operations. This can be useful for retrieving generated values (like serial IDs) or modified columns without having to run a separate `SELECT` query.

- **INSERT with RETURNING**:

  ```sql
  INSERT INTO users (username, email) 
  VALUES ('john_doe', 'john@example.com') 
  RETURNING id, created_at;
  ```

- **UPDATE with RETURNING**:

  ```sql
  UPDATE users 
  SET email = 'john_new@example.com' 
  WHERE id = 1 
  RETURNING id, email, updated_at;
  ```

- **DELETE with RETURNING**:

  ```sql
  DELETE FROM users 
  WHERE id = 1 
  RETURNING id, username;
  ```

The `RETURNING` clause can return any column or expression, making it very versatile for various use cases.
</details>

<details>
<summary>33. What are materialized views and how do you use them in PostgreSQL?</summary>
Materialized views in PostgreSQL store the result of a query physically, providing a way to cache complex query results for faster access. Unlike regular views, materialized views do not automatically reflect changes in the underlying tables; they must be manually refreshed.

- **Create a materialized view**:

  ```sql
  CREATE MATERIALIZED VIEW sales_summary AS
  SELECT product_id, SUM(sales) AS total_sales, COUNT(*) AS total_orders
  FROM orders
  GROUP BY product_id;
  ```

- **Refresh a materialized view**:

  ```sql
  REFRESH MATERIALIZED VIEW sales_summary;
  ```

- **Query a materialized view**:

  ```sql
  SELECT * FROM sales_summary WHERE total_sales > 10000;
  ```

Materialized views are useful for performance optimization, especially when dealing with expensive queries that do not need to be run frequently.
</details>

<details>
<summary>34. How do you partition tables in PostgreSQL?</summary>
Partitioning in PostgreSQL involves splitting a large table into smaller, more manageable pieces called partitions. This can improve performance and manageability, especially for large datasets.

1. **Create a partitioned table**:

  ```sql
  CREATE TABLE sales (
    id SERIAL,
    sale_date DATE,
    amount NUMERIC
  ) PARTITION BY RANGE (sale_date);
  ```

2. **Create partitions**:

  ```sql
  CREATE TABLE sales_2021 PARTITION OF sales
  FOR VALUES FROM ('2021-01-01') TO ('2022-01-01');

  CREATE TABLE sales_2022 PARTITION OF sales
  FOR VALUES FROM ('2022-01-01') TO ('2023-01-01');
  ```

3. **Insert data into the partitioned table**:

  ```sql
  INSERT INTO sales (sale_date, amount) VALUES ('2021-06-15', 100.00);
  ```

PostgreSQL will automatically route the data to the appropriate partition based on the partition key (`sale_date` in this example).

You can also use other partitioning strategies such as `LIST` and `HASH`.
</details>

<details>
<summary>35. What is the purpose of the `TOAST` mechanism in PostgreSQL?</summary>
The `TOAST` (The Oversized-Attribute Storage Technique) mechanism in PostgreSQL is used to handle large data values that exceed the standard page size (typically 8 KB). When a row's data exceeds this size, PostgreSQL uses TOAST to compress and/or store the data out-of-line in a separate TOAST table.

Key purposes and benefits of TOAST:

- **Storage Efficiency**: Compresses large data values to save storage space.
- **Performance**: Keeps main table rows small, improving performance for operations that do not need to access the large values.
- **Automatic Handling**: Automatically manages storage and retrieval of large values, requiring no special action from users.

TOAST is particularly useful for large text or binary data, such as `TEXT`, `BYTEA`, and large array types. The mechanism ensures efficient handling of large data while maintaining the benefits of PostgreSQL's storage and performance characteristics.
</details>

<details>
<summary>36. How do you use JSON and JSONB data types in PostgreSQL?</summary>
PostgreSQL provides two data types for storing JSON data: `JSON` and `JSONB`. The `JSON` type stores the data as text, preserving white space and order of keys, while `JSONB` stores it in a binary format that is faster to process and allows indexing.

- **Creating a table with JSON/JSONB columns**:

  ```sql
  CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    details JSON,
    specs JSONB
  );
  ```

- **Inserting data into JSON/JSONB columns**:

  ```sql
  INSERT INTO products (details, specs) 
  VALUES (
    '{"name": "Widget", "price": 25.00}', 
    '{"color": "blue", "weight": 1.5}'
  );
  ```

- **Querying JSON/JSONB data**:

  ```sql
  SELECT details->>'name' AS name, specs->>'color' AS color
  FROM products
  WHERE specs->>'color' = 'blue';
  ```

- **Updating JSON/JSONB data**:

  ```sql
  UPDATE products
  SET specs = jsonb_set(specs, '{weight}', '1.6')
  WHERE id = 1;
  ```

- **Indexing JSONB data**:

  ```sql
  CREATE INDEX idx_specs_color ON products USING GIN (specs jsonb_path_ops);
  ```

`JSONB` is generally preferred for performance reasons, especially when you need to perform frequent queries and updates on the JSON data.
</details>

<details>
<summary>37. What is the difference between `NUMERIC` and `FLOAT` data types in PostgreSQL?</summary>
The `NUMERIC` and `FLOAT` data types in PostgreSQL are both used to store numeric values, but they differ in precision and how they handle values:

- **NUMERIC** (or `DECIMAL`):
  - **Exact precision**: `NUMERIC` stores numbers with exact precision. It is used for values where precision is crucial, such as monetary amounts.
  - **Storage**: The storage requirement depends on the precision and scale.
  - **Usage**: Suitable for applications requiring high precision, such as financial calculations.

  ```sql
  CREATE TABLE financial_data (
    amount NUMERIC(10, 2)
  );
  ```

- **FLOAT** (or `REAL` / `DOUBLE PRECISION`):
  - **Approximate precision**: `FLOAT` stores numbers with approximate precision. It uses binary floating-point representation, which can lead to rounding errors.
  - **Storage**: Uses a fixed amount of storage, regardless of the precision.
  - **Usage**: Suitable for scientific calculations and applications where some level of approximation is acceptable.

  ```sql
  CREATE TABLE scientific_data (
    measurement FLOAT
  );
  ```

In summary, use `NUMERIC` for exact precision and `FLOAT` for approximate precision and better performance with large datasets.
</details>

<details>
<summary>38. How do you use arrays in PostgreSQL?</summary>
PostgreSQL supports array data types, allowing you to store multiple values in a single column.

- **Creating a table with an array column**:

  ```sql
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    emails TEXT[]
  );
  ```

- **Inserting data into an array column**:

  ```sql
  INSERT INTO users (emails) 
  VALUES ('{"user1@example.com", "user2@example.com"}');
  ```

- **Querying array elements**:

  ```sql
  SELECT id, emails[1] AS primary_email 
  FROM users;
  ```

- **Updating array elements**:

  ```sql
  UPDATE users 
  SET emails[2] = 'new_email@example.com' 
  WHERE id = 1;
  ```

- **Using array functions**:

  ```sql
  SELECT id 
  FROM users 
  WHERE 'user1@example.com' = ANY(emails);
  ```

PostgreSQL provides a variety of array functions and operators, such as `array_length()`, `array_append()`, and `array_remove()`, for manipulating arrays.
</details>

<details>
<summary>39. What is a range type and how do you use it in PostgreSQL?</summary>
Range types in PostgreSQL represent a range of values of a specific data type. They are useful for storing and querying intervals, such as dates or numbers.

- **Creating a table with a range column**:

  ```sql
  CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    period DATERANGE
  );
  ```

- **Inserting data into a range column**:

  ```sql
  INSERT INTO events (period) 
  VALUES ('[2024-01-01, 2024-12-31]');
  ```

- **Querying range data**:

  ```sql
  SELECT * 
  FROM events 
  WHERE period @> '2024-06-18'::DATE;
  ```

- **Range operators**:
  - **Contains**: `@>`
  - **Contained by**: `<@`
  - **Overlaps**: `&&`
  - **Adjacent**: `-|-`

- **Using functions with ranges**:

  ```sql
  SELECT * 
  FROM events 
  WHERE upper(period) > '2024-06-18'::DATE;
  ```

Range types provide a concise way to work with intervals and offer various operators for efficient querying.
</details>
<details>
<summary>40. How do you handle large objects (LOBs) in PostgreSQL?</summary>

Handling large objects (LOBs) in PostgreSQL involves using its `lo` (large object) functionality, which allows you to store and manage large amounts of data (such as images, videos, or large text files). Here are the steps and commands commonly used to handle LOBs in PostgreSQL:

1. **Creating a Large Object**:
   - Use the `lo_create()` function to create a large object and return its OID (object identifier).

   ```sql
   SELECT lo_create(0);
   ```

2. **Importing a Large Object**:
   - Use the `lo_import()` function to import a file into a large object.

   ```sql
   SELECT lo_import('/path/to/file');
   ```

3. **Exporting a Large Object**:
   - Use the `lo_export()` function to export a large object to a file.

   ```sql
   SELECT lo_export(oid, '/path/to/export/file');
   ```

4. **Reading from a Large Object**:
   - Use the `lo_open()`, `lo_read()`, and `lo_close()` functions to open, read, and close a large object.

   ```sql
   -- Open the large object
   SELECT lo_open(oid, x'40000'); -- x'40000' is for read-only mode

   -- Read from the large object
   SELECT lo_read(fd, length);

   -- Close the large object
   SELECT lo_close(fd);
   ```

5. **Writing to a Large Object**:
   - Use the `lo_open()`, `lo_write()`, and `lo_close()` functions to open, write to, and close a large object.

   ```sql
   -- Open the large object
   SELECT lo_open(oid, x'20000'); -- x'20000' is for write-only mode

   -- Write to the large object
   SELECT lo_write(fd, 'data');

   -- Close the large object
   SELECT lo_close(fd);
   ```

6. **Deleting a Large Object**:
   - Use the `lo_unlink()` function to delete a large object.

   ```sql
   SELECT lo_unlink(oid);
   ```

7. **Managing Large Objects in pgAdmin**:
   - pgAdmin, a popular PostgreSQL management tool, provides a graphical interface for managing large objects. You can upload, download, and manage large objects using the built-in large object manager.

8. **Using `pg_largeobject` System Catalog**:
   - PostgreSQL stores large objects in a system catalog called `pg_largeobject`. You can query this catalog to get information about stored large objects.

   ```sql
   SELECT loid, pageno, data FROM pg_largeobject WHERE loid = oid;
   ```

**Example Workflow**:
```sql
-- Create a new large object
SELECT lo_create(0);

-- Import a file into a large object
SELECT lo_import('/path/to/file');

-- Export a large object to a file
SELECT lo_export(oid, '/path/to/export/file');

-- Read from a large object
SELECT lo_open(oid, x'40000'); -- Open
SELECT lo_read(fd, length); -- Read
SELECT lo_close(fd); -- Close

-- Write to a large object
SELECT lo_open(oid, x'20000'); -- Open
SELECT lo_write(fd, 'data'); -- Write
SELECT lo_close(fd); -- Close

-- Delete a large object
SELECT lo_unlink(oid);
```

Handling large objects in PostgreSQL provides a robust way to store and manipulate large data entities, facilitating efficient storage and retrieval operations.
</details>


### Database Design and Schema

<details>
<summary>41. How do you design a normalized database schema in PostgreSQL?</summary>
Designing a normalized database schema involves organizing data to reduce redundancy and improve data integrity. The process typically includes:

1. **Identifying Entities**: Determine the main entities (tables) needed, such as `users`, `orders`, `products`, etc.

2. **Defining Attributes**: Identify the attributes (columns) for each entity, ensuring each attribute belongs to the correct entity.

3. **Establishing Relationships**: Define relationships between entities using foreign keys.

4. **Applying Normalization Rules**:
   - **First Normal Form (1NF)**: Ensure each column contains atomic values and each row has a unique identifier.
   - **Second Normal Form (2NF)**: Ensure that all non-key attributes are fully functional dependent on the primary key.
   - **Third Normal Form (3NF)**: Ensure that no transitive dependencies exist (non-key attributes should not depend on other non-key attributes).

**Example**:

```sql
-- 1NF: Separate tables for users and orders
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    order_date DATE,
    total NUMERIC
);

-- 2NF: Ensuring all non-key attributes are fully dependent on the primary key
-- (No partial dependencies as primary keys are already atomic)

-- 3NF: Ensuring no transitive dependencies
-- (No changes needed as email and name are directly dependent on the user ID)
```
</details>

<details>
<summary>42. What are the normal forms and why are they important?</summary>
Normal forms are a series of guidelines to design relational database schemas to reduce redundancy and dependency. The main normal forms are:

1. **First Normal Form (1NF)**: Ensures that each column contains only atomic (indivisible) values, and each column has unique values.
   - **Importance**: Eliminates repeating groups and ensures data is stored in a tabular format.

2. **Second Normal Form (2NF)**: Builds on 1NF by ensuring that all non-key attributes are fully functionally dependent on the primary key.
   - **Importance**: Eliminates partial dependencies, ensuring that each piece of data is stored in only one place.

3. **Third Normal Form (3NF)**: Builds on 2NF by ensuring that no transitive dependencies exist between non-key attributes.
   - **Importance**: Eliminates transitive dependencies, ensuring that non-key attributes are dependent only on the primary key.

4. **Boyce-Codd Normal Form (BCNF)**: A stricter version of 3NF, ensuring that every determinant is a candidate key.
   - **Importance**: Handles certain types of anomalies not covered by 3NF.

5. **Fourth Normal Form (4NF)**: Ensures that multi-valued dependencies are eliminated.
   - **Importance**: Addresses issues with multi-valued dependencies.

6. **Fifth Normal Form (5NF)**: Ensures that join dependencies are addressed.
   - **Importance**: Handles cases where information can be reconstructed from smaller pieces of data.

**Importance**: Normal forms are crucial for ensuring data integrity, reducing redundancy, and improving database performance by organizing data efficiently and consistently.
</details>

<details>
<summary>43. How do you denormalize a database schema in PostgreSQL?</summary>
Denormalization is the process of intentionally introducing redundancy into a database schema for performance optimization. This involves merging tables, adding redundant columns, or storing computed values to reduce the need for complex joins and improve query performance.

**Steps for Denormalization**:

1. **Identify Performance Bottlenecks**: Determine the queries that are slow due to complex joins or calculations.

2. **Merge Tables**: Combine tables that are frequently joined together.

   ```sql
   -- Before denormalization
   SELECT users.name, orders.total
   FROM users
   JOIN orders ON users.id = orders.user_id;

   -- After denormalization
   CREATE TABLE users_orders (
       user_id INT,
       name VARCHAR(100),
       order_id INT,
       total NUMERIC
   );
   ```

3. **Add Redundant Columns**: Add columns that store precomputed values.

   ```sql
   -- Adding a redundant column for total orders
   ALTER TABLE users
   ADD COLUMN total_orders INT;

   UPDATE users
   SET total_orders = (
       SELECT COUNT(*)
       FROM orders
       WHERE orders.user_id = users.id
   );
   ```

4. **Use Triggers to Maintain Consistency**: Ensure data consistency by using triggers to update redundant data.

   ```sql
   CREATE TRIGGER update_total_orders
   AFTER INSERT OR DELETE ON orders
   FOR EACH ROW
   EXECUTE FUNCTION update_total_orders();

   CREATE FUNCTION update_total_orders() RETURNS TRIGGER AS $$
   BEGIN
       IF TG_OP = 'INSERT' THEN
           UPDATE users SET total_orders = total_orders + 1 WHERE id = NEW.user_id;
       ELSIF TG_OP = 'DELETE' THEN
           UPDATE users SET total_orders = total_orders - 1 WHERE id = OLD.user_id;
       END IF;
       RETURN NULL;
   END;
   $$ LANGUAGE plpgsql;
   ```

Denormalization can improve performance but comes at the cost of increased complexity in maintaining data consistency.
</details>

<details>
<summary>44. What are the different types of constraints in PostgreSQL?</summary>
Constraints in PostgreSQL are rules enforced on data columns to ensure the integrity and validity of the data. The main types of constraints are:

1. **PRIMARY KEY**: Ensures that each value in a column or a combination of columns is unique and not null.

   ```sql
   CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       name VARCHAR(100)
   );
   ```

2. **FOREIGN KEY**: Ensures that the value in a column or a combination of columns matches the values in another table's primary key or unique column.

   ```sql
   CREATE TABLE orders (
       id SERIAL PRIMARY KEY,
       user_id INT REFERENCES users(id)
   );
   ```

3. **UNIQUE**: Ensures that all values in a column or a combination of columns are unique.

   ```sql
   CREATE TABLE employees (
       id SERIAL PRIMARY KEY,
       email VARCHAR(100) UNIQUE
   );
   ```

4. **NOT NULL**: Ensures that a column cannot have a null value.

   ```sql
   CREATE TABLE products (
       id SERIAL PRIMARY KEY,
       name VARCHAR(100) NOT NULL
   );
   ```

5. **CHECK**: Ensures that the values in a column meet a specific condition.

   ```sql
   CREATE TABLE accounts (
       id SERIAL PRIMARY KEY,
       balance NUMERIC CHECK (balance >= 0)
   );
   ```

6. **EXCLUSION**: Ensures that if any two rows are compared on the specified columns or expressions using the specified operators, at least one of these comparisons will return false.

   ```sql
   CREATE TABLE room_bookings (
       room INT,
       during TSRANGE,
       EXCLUDE USING gist (room WITH =, during WITH &&)
   );
   ```

Constraints help maintain data accuracy and integrity by enforcing specific rules at the database level.
</details>

<details>
<summary>45. How do you create and use primary keys in PostgreSQL?</summary>
A primary key in PostgreSQL uniquely identifies each row in a table and ensures that no duplicate or null values are present in the specified column(s).

- **Creating a table with a primary key**:

  ```sql
  CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL
  );
  ```

- **Adding a primary key to an existing table**:

  ```sql
  ALTER TABLE users
  ADD CONSTRAINT users_pkey PRIMARY KEY (id);
  ```

- **Using composite primary keys**:

  ```sql
  CREATE TABLE order_items (
      order_id INT,
      product_id INT,
      quantity INT,
      PRIMARY KEY (order_id, product_id)
  );
  ```

- **Referencing a primary key with a foreign key**:

  ```sql
  CREATE TABLE orders (
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES users(id),
      order_date DATE NOT NULL
  );
  ```

Primary keys ensure the uniqueness and integrity of each row, serving as a reliable way to reference records within and across tables.
</details>
<details>
<summary>46. How do you create and use foreign keys in PostgreSQL?</summary>

In PostgreSQL, a foreign key is a column or a group of columns in a table that creates a link between the data in two tables. The foreign key in the child table references the primary key in the parent table. This ensures referential integrity of the data. Here’s how you create and use foreign keys in PostgreSQL:

**Creating Foreign Keys**

1. **Create Parent Table**:
   First, create the parent table with a primary key.

   ```sql
   CREATE TABLE departments (
       dept_id SERIAL PRIMARY KEY,
       dept_name VARCHAR(100) NOT NULL
   );
   ```

2. **Create Child Table**:
   Then, create the child table with a foreign key referencing the parent table.

   ```sql
   CREATE TABLE employees (
       emp_id SERIAL PRIMARY KEY,
       emp_name VARCHAR(100) NOT NULL,
       dept_id INT,
       CONSTRAINT fk_dept
           FOREIGN KEY(dept_id) 
           REFERENCES departments(dept_id)
           ON DELETE CASCADE
           ON UPDATE CASCADE
   );
   ```

   - **ON DELETE CASCADE**: When a record in the parent table is deleted, the corresponding records in the child table are automatically deleted.
   - **ON UPDATE CASCADE**: When the primary key in the parent table is updated, the foreign key in the child table is automatically updated.

**Using Foreign Keys**

3. **Inserting Data**:
   Insert data into the parent table and then into the child table.

   ```sql
   INSERT INTO departments (dept_name) VALUES ('HR');
   INSERT INTO employees (emp_name, dept_id) VALUES ('John Doe', 1);
   ```

4. **Ensuring Referential Integrity**:
   Trying to insert a record in the child table with a non-existent foreign key will result in an error.

   ```sql
   INSERT INTO employees (emp_name, dept_id) VALUES ('Jane Doe', 999); -- This will fail
   ```

5. **Cascading Deletes/Updates**:
   When you delete or update records in the parent table, the changes will cascade to the child table if you’ve set the appropriate `ON DELETE` and `ON UPDATE` rules.

   ```sql
   DELETE FROM departments WHERE dept_id = 1; -- This will delete the corresponding employee record
   ```

**Example Workflow**:

```sql
-- Create parent table
CREATE TABLE departments (
    dept_id SERIAL PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL
);

-- Create child table with foreign key
CREATE TABLE employees (
    emp_id SERIAL PRIMARY KEY,
    emp_name VARCHAR(100) NOT NULL,
    dept_id INT,
    CONSTRAINT fk_dept
        FOREIGN KEY(dept_id) 
        REFERENCES departments(dept_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Insert data into parent table
INSERT INTO departments (dept_name) VALUES ('HR');

-- Insert data into child table
INSERT INTO employees (emp_name, dept_id) VALUES ('John Doe', 1);

-- Delete from parent table, cascades to child table
DELETE FROM departments WHERE dept_id = 1;
```

Foreign keys are a crucial part of maintaining the integrity of the data and ensuring relationships between tables in a relational database.
</details>

<details>
<summary>47. How do you enforce unique constraints in PostgreSQL?</summary>

In PostgreSQL, unique constraints ensure that the data contained in a column or a group of columns is unique across all rows in the table. Here’s how you create and use unique constraints:

**Creating Unique Constraints**

1. **Unique Constraint on a Single Column**:
   You can add a unique constraint when creating a table.

   ```sql
   CREATE TABLE users (
       user_id SERIAL PRIMARY KEY,
       username VARCHAR(100) UNIQUE
   );
   ```

   Alternatively, you can add a unique constraint to an existing table.

   ```sql
   ALTER TABLE users
   ADD CONSTRAINT unique_username UNIQUE (username);
   ```

2. **Unique Constraint on Multiple Columns**:
   You can enforce uniqueness across a combination of columns.

   ```sql
   CREATE TABLE user_emails (
       user_id INT,
       email VARCHAR(100),
       PRIMARY KEY(user_id, email),
       CONSTRAINT unique_user_email UNIQUE (user_id, email)
   );
   ```

**Using Unique Constraints**

3. **Inserting Data**:
   Attempting to insert duplicate values in a column or combination of columns with a unique constraint will result in an error.

   ```sql
   INSERT INTO users (username) VALUES ('john_doe'); -- This will succeed
   INSERT INTO users (username) VALUES ('john_doe'); -- This will fail
   ```

4. **Handling Unique Constraint Violations**:
   You can handle unique constraint violations using `ON CONFLICT` clause to perform an action like updating the existing record.

   ```sql
   INSERT INTO users (user_id, username)
   VALUES (1, 'john_doe')
   ON CONFLICT (username) DO UPDATE
   SET username = EXCLUDED.username || '_new';
   ```

**Example Workflow**:

```sql
-- Create table with unique constraint on a single column
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE
);

-- Insert data
INSERT INTO users (username) VALUES ('john_doe'); -- Succeeds
INSERT INTO users (username) VALUES ('john_doe'); -- Fails

-- Create table with unique constraint on multiple columns
CREATE TABLE user_emails (
    user_id INT,
    email VARCHAR(100),
    CONSTRAINT unique_user_email UNIQUE (user_id, email)
);

-- Insert data
INSERT INTO user_emails (user_id, email) VALUES (1, 'john@example.com'); -- Succeeds
INSERT INTO user_emails (user_id, email) VALUES (1, 'john@example.com'); -- Fails
```

Unique constraints are essential for ensuring the uniqueness of data within a column or a set of columns, thus maintaining data integrity.
</details>

<details>
<summary>48. How do you use check constraints in PostgreSQL?</summary>

Check constraints in PostgreSQL are used to enforce domain integrity by limiting the values that can be placed in a column. Here’s how you create and use check constraints:

**Creating Check Constraints**

1. **Check Constraint on a Single Column**:
   You can define a check constraint when creating a table.

   ```sql
   CREATE TABLE employees (
       emp_id SERIAL PRIMARY KEY,
       emp_name VARCHAR(100) NOT NULL,
       salary NUMERIC CHECK (salary > 0)
   );
   ```

   Alternatively, you can add a check constraint to an existing table.

   ```sql
   ALTER TABLE employees
   ADD CONSTRAINT check_salary CHECK (salary > 0);
   ```

2. **Check Constraint on Multiple Columns**:
   You can define a check constraint that involves multiple columns.

   ```sql
   CREATE TABLE orders (
       order_id SERIAL PRIMARY KEY,
       product_id INT NOT NULL,
       quantity INT NOT NULL,
       unit_price NUMERIC NOT NULL,
       CONSTRAINT check_total_price CHECK (quantity * unit_price > 0)
   );
   ```

**Using Check Constraints**

3. **Inserting Data**:
   Attempting to insert data that violates the check constraint will result in an error.

   ```sql
   INSERT INTO employees (emp_name, salary) VALUES ('John Doe', -500); -- This will fail
   INSERT INTO employees (emp_name, salary) VALUES ('John Doe', 1500); -- This will succeed
   ```

4. **Check Constraints with Custom Expressions**:
   Check constraints can use complex expressions.

   ```sql
   CREATE TABLE products (
       product_id SERIAL PRIMARY KEY,
       product_name VARCHAR(100) NOT NULL,
       price NUMERIC NOT NULL,
       discount NUMERIC NOT NULL,
       CONSTRAINT check_discount CHECK (discount BETWEEN 0 AND price)
   );
   ```

**Example Workflow**:

```sql
-- Create table with check constraint on a single column
CREATE TABLE employees (
    emp_id SERIAL PRIMARY KEY,
    emp_name VARCHAR(100) NOT NULL,
    salary NUMERIC CHECK (salary > 0)
);

-- Insert data
INSERT INTO employees (emp_name, salary) VALUES ('John Doe', -500); -- Fails
INSERT INTO employees (emp_name, salary) VALUES ('John Doe', 1500); -- Succeeds

-- Create table with check constraint on multiple columns
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    unit_price NUMERIC NOT NULL,
    CONSTRAINT check_total_price CHECK (quantity * unit_price > 0)
);

-- Insert data
INSERT INTO orders (product_id, quantity, unit_price) VALUES (1, 10, -50); -- Fails
INSERT INTO orders (product_id, quantity, unit_price) VALUES (1, 10, 50); -- Succeeds

-- Create table with custom expression in check constraint
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price NUMERIC NOT NULL,
    discount NUMERIC NOT NULL,
    CONSTRAINT check_discount CHECK (discount BETWEEN 0 AND price)
);

-- Insert data
INSERT INTO products (product_name, price, discount) VALUES ('Product A', 100, 120); -- Fails
INSERT INTO products (product_name, price, discount) VALUES ('Product A', 100, 20); -- Succeeds
```

Check constraints are powerful tools for enforcing business rules and ensuring the validity of data in your PostgreSQL database.
</details

>

<details>
<summary>49. What is a composite key and how do you use it in PostgreSQL?</summary>

A composite key in PostgreSQL is a primary key that consists of two or more columns. It uniquely identifies a record in the table by combining multiple columns. Here’s how you create and use composite keys in PostgreSQL:

**Creating Composite Keys**

1. **Create a Table with a Composite Key**:
   Define the composite key using the `PRIMARY KEY` constraint when creating the table.

   ```sql
   CREATE TABLE order_items (
       order_id INT,
       item_id INT,
       product_name VARCHAR(100),
       quantity INT,
       PRIMARY KEY (order_id, item_id)
   );
   ```

2. **Using Composite Keys**:
   Insert data into the table, ensuring the combination of the columns defined in the composite key is unique.

   ```sql
   INSERT INTO order_items (order_id, item_id, product_name, quantity)
   VALUES (1, 1, 'Product A', 10);

   INSERT INTO order_items (order_id, item_id, product_name, quantity)
   VALUES (1, 2, 'Product B', 5);

   -- This will fail because the combination of order_id and item_id is not unique
   INSERT INTO order_items (order_id, item_id, product_name, quantity)
   VALUES (1, 1, 'Product C', 15);
   ```

**Example Workflow**:

```sql
-- Create table with composite key
CREATE TABLE order_items (
    order_id INT,
    item_id INT,
    product_name VARCHAR(100),
    quantity INT,
    PRIMARY KEY (order_id, item_id)
);

-- Insert data
INSERT INTO order_items (order_id, item_id, product_name, quantity)
VALUES (1, 1, 'Product A', 10); -- Succeeds

INSERT INTO order_items (order_id, item_id, product_name, quantity)
VALUES (1, 2, 'Product B', 5); -- Succeeds

-- This will fail due to duplicate composite key
INSERT INTO order_items (order_id, item_id, product_name, quantity)
VALUES (1, 1, 'Product C', 15); -- Fails
```

Composite keys are useful when a single column is not sufficient to uniquely identify a record. They ensure the combination of specified columns is unique across all rows in the table.
</details>

<details>
<summary>50. How do you create and use sequences in PostgreSQL?</summary>

In PostgreSQL, sequences are special database objects designed for generating unique numeric identifiers. They are often used for auto-incrementing primary keys. Here’s how you create and use sequences in PostgreSQL:

**Creating and Using Sequences**

1. **Create a Sequence**:
   Use the `CREATE SEQUENCE` command to create a new sequence.

   ```sql
   CREATE SEQUENCE serial_sequence
       START WITH 1
       INCREMENT BY 1
       NO MINVALUE
       NO MAXVALUE
       CACHE 1;
   ```

   - **START WITH**: The starting value of the sequence.
   - **INCREMENT BY**: The increment value.
   - **NO MINVALUE**: The sequence has no minimum value.
   - **NO MAXVALUE**: The sequence has no maximum value.
   - **CACHE**: Number of sequence numbers to cache for faster access.

2. **Using Sequences**:
   Use the `nextval()`, `currval()`, and `setval()` functions to interact with the sequence.

   ```sql
   -- Get the next value from the sequence
   SELECT nextval('serial_sequence');

   -- Get the current value of the sequence
   SELECT currval('serial_sequence');

   -- Set the current value of the sequence
   SELECT setval('serial_sequence', 10);
   ```

3. **Using Sequences in Table Columns**:
   You can use a sequence to auto-increment a column by setting a default value.

   ```sql
   CREATE TABLE users (
       user_id INT DEFAULT nextval('serial_sequence') PRIMARY KEY,
       username VARCHAR(100) NOT NULL
   );
   ```

   Alternatively, you can use the `SERIAL` data type, which is a shorthand for creating a sequence and setting a default value.

   ```sql
   CREATE TABLE users (
       user_id SERIAL PRIMARY KEY,
       username VARCHAR(100) NOT NULL
   );
   ```

**Example Workflow**:

```sql
-- Create a sequence
CREATE SEQUENCE serial_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

-- Use the sequence
SELECT nextval('serial_sequence'); -- Returns 1
SELECT nextval('serial_sequence'); -- Returns 2
SELECT currval('serial_sequence'); -- Returns 2
SELECT setval('serial_sequence', 10); -- Sets current value to 10

-- Create table using sequence for auto-increment column
CREATE TABLE users (
    user_id INT DEFAULT nextval('serial_sequence') PRIMARY KEY,
    username VARCHAR(100) NOT NULL
);

-- Insert data
INSERT INTO users (username) VALUES ('john_doe'); -- user_id will be 11
INSERT INTO users (username) VALUES ('jane_doe'); -- user_id will be 12

-- Alternatively, use SERIAL data type
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL
);
```

Sequences provide a flexible and powerful way to generate unique identifiers for table columns, especially for primary keys.
</details>

### Administration and Maintenance

<details>
<summary>51. How do you back up a PostgreSQL database?</summary>

Backing up a PostgreSQL database can be done using various tools provided by PostgreSQL. The most common tools are `pg_dump` for logical backups and `pg_basebackup` for physical backups.

**Using `pg_dump` for Logical Backups**

1. **Full Database Backup**:
   Use `pg_dump` to create a logical backup of a database. This tool generates a file with SQL commands to recreate the database.

   ```bash
   pg_dump -U username -h hostname -F c -b -v -f /path/to/backup/file dbname
   ```

   - **-U**: Specifies the username.
   - **-h**: Specifies the host.
   - **-F c**: Specifies the output file format (custom format).
   - **-b**: Includes large objects.
   - **-v**: Verbose mode.
   - **-f**: Specifies the output file.

   Example:

   ```bash
   pg_dump -U postgres -h localhost -F c -b -v -f /backups/mydatabase.backup mydatabase
   ```

2. **Backing Up a Single Table**:
   To back up a specific table, use the `-t` option.

   ```bash
   pg_dump -U username -h hostname -F c -b -v -f /path/to/backup/file -t tablename dbname
   ```

   Example:

   ```bash
   pg_dump -U postgres -h localhost -F c -b -v -f /backups/mytable.backup -t mytable mydatabase
   ```

**Using `pg_basebackup` for Physical Backups**

`pg_basebackup` is used for physical backups and is commonly used for setting up replication.

```bash
pg_basebackup -U username -h hostname -D /path/to/backup/dir -F tar -z -P
```

- **-U**: Specifies the username.
- **-h**: Specifies the host.
- **-D**: Specifies the output directory.
- **-F tar**: Specifies the output format (tar file).
- **-z**: Compresses the output.
- **-P**: Shows progress.

Example:

```bash
pg_basebackup -U postgres -h localhost -D /backups/basebackup -F tar -z -P
```

**Example Backup Workflow**:

1. **Create a Backup Directory**:
   ```bash
   mkdir /backups
   ```

2. **Run `pg_dump`**:
   ```bash
   pg_dump -U postgres -h localhost -F c -b -v -f /backups/mydatabase.backup mydatabase
   ```

3. **Run `pg_basebackup`**:
   ```bash
   pg_basebackup -U postgres -h localhost -D /backups/basebackup -F tar -z -P
   ```

By using these tools, you can create reliable backups of your PostgreSQL databases for disaster recovery, migration, and replication setup.
</details>

<details>
<summary>52. How do you restore a PostgreSQL database from a backup?</summary>

Restoring a PostgreSQL database from a backup depends on whether you have a logical or physical backup. Here’s how you can restore using both methods:

**Using `pg_restore` for Logical Backups**

1. **Restore a Full Database Backup**:
   Use `pg_restore` to restore a logical backup created with `pg_dump`.

   ```bash
   pg_restore -U username -h hostname -d dbname -v /path/to/backup/file
   ```

   - **-U**: Specifies the username.
   - **-h**: Specifies the host.
   - **-d**: Specifies the database name.
   - **-v**: Verbose mode.

   Example:

   ```bash
   pg_restore -U postgres -h localhost -d mydatabase -v /backups/mydatabase.backup
   ```

   Ensure that the target database exists. If it does not, create it first:

   ```bash
   createdb -U postgres -h localhost mydatabase
   ```

2. **Restoring a Single Table**:
   You can use `pg_restore` to restore specific tables from the backup.

   ```bash
   pg_restore -U username -h hostname -d dbname -v -t tablename /path/to/backup/file
   ```

   Example:

   ```bash
   pg_restore -U postgres -h localhost -d mydatabase -v -t mytable /backups/mytable.backup
   ```

**Using Physical Backups**

1. **Stopping the PostgreSQL Service**:
   Stop the PostgreSQL service before restoring a physical backup.

   ```bash
   sudo systemctl stop postgresql
   ```

2. **Restoring the Physical Backup**:
   Replace the contents of the data directory with the backup.

   ```bash
   rm -rf /var/lib/postgresql/data/*
   tar -xzvf /path/to/backup/basebackup.tar.gz -C /var/lib/postgresql/data/
   ```

   Ensure the ownership and permissions are correct:

   ```bash
   chown -R postgres:postgres /var/lib/postgresql/data
   ```

3. **Starting the PostgreSQL Service**:
   Start the PostgreSQL service after restoring the backup.

   ```bash
   sudo systemctl start postgresql
   ```

**Example Restore Workflow**:

1. **Create the Target Database**:
   ```bash
   createdb -U postgres -h localhost mydatabase
   ```

2. **Run `pg_restore`**:
   ```bash
   pg_restore -U postgres -h localhost -d mydatabase -v /backups/mydatabase.backup
   ```

3. **Stop PostgreSQL Service** (for physical backups):
   ```bash
   sudo systemctl stop postgresql
   ```

4. **Extract Physical Backup**:
   ```bash
   rm -rf /var/lib/postgresql/data/*
   tar -xzvf /backups/basebackup.tar.gz -C /var/lib/postgresql/data/
   chown -R postgres:postgres /var/lib/postgresql/data
   ```

5. **Start PostgreSQL Service**:
   ```bash
   sudo systemctl start postgresql
   ```

By following these steps, you can restore your PostgreSQL database from logical or physical backups to ensure data recovery and availability.
</details>

<details>
<summary>53. How do you manage user roles and permissions in PostgreSQL?</summary>

Managing user roles and permissions in PostgreSQL involves creating roles, granting privileges, and assigning roles to users. Here’s how you can manage user roles and permissions:

**Creating Roles**

1. **Create a Role**:
   Use the `CREATE ROLE` command to create a new role.

   ```sql
   CREATE ROLE rolename;
   ```

   Example:

   ```sql
   CREATE ROLE readonly;
   ```

2. **Create a User**:
   Users in PostgreSQL are also roles with login privileges.

   ```sql
   CREATE ROLE username WITH LOGIN PASSWORD 'password';
   ```

   Example:

   ```sql
   CREATE ROLE john WITH LOGIN PASSWORD 'secret';
   ```

**Granting Privileges**

3. **Grant Privileges to a Role**:
   Use the `GRANT` command to assign specific privileges to a role.

   ```sql
   GRANT privilege ON object TO rolename;
   ```

   Example:

   ```sql
   GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly;
   ```

4. **Grant Role to a User**:
   Assign a role to a user so that the user inherits the role’s privileges.

   ```sql
   GRANT rolename TO username;
   ```

   Example:

   ```sql
   GRANT readonly TO john;
   ```

**Revoking Privileges**

5. **Revoke Privileges**:
   Use the `REVOKE` command to remove specific privileges from a role.

   ```sql
   REVOKE privilege ON object FROM rolename;
   ```

   Example:

   ```sql
   REVOKE SELECT ON ALL TABLES IN SCHEMA public FROM readonly;
   ```

6. **Revoke Role from a User**:
   Remove a role from a user.

   ```sql
   REVOKE rolename FROM username;
   ```

   Example:

   ```sql
   REVOKE readonly FROM john;
   ```

**Example Workflow**:

1. **Create Roles and Users**:

   ```sql
   CREATE ROLE readonly;
   CREATE ROLE john WITH LOGIN PASSWORD 'secret';
   ```

2. **Grant Privileges to Roles**:

   ```sql
   GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly;
   ```

3. **Assign Roles to Users**:

   ```sql
   GRANT readonly TO john;
   ```

4. **Revoke Privileges**:

   ```sql
   REVOKE SELECT ON ALL TABLES IN SCHEMA public FROM readonly;
   ```

5. **Revoke Roles from Users**:

   ```sql
   REVOKE readonly FROM john;
   ```

**Additional Role Management Commands**:

- **Alter Role**: Modify role attributes.

  ```sql
  ALTER ROLE rolename WITH LOGIN;
  ALTER ROLE rolename WITH PASSWORD 'newpassword';
  ```

- **Drop Role**: Remove a role from the database.

  ```sql
  DROP ROLE rolename;
  ```

Roles and permissions management in PostgreSQL allows fine-grained control over database access, ensuring that users have

 only the permissions necessary for their tasks.
</details>

<details>
<summary>54. What is the `pg_hba.conf` file and how do you configure it?</summary>

The `pg_hba.conf` file is the PostgreSQL Host-Based Authentication configuration file. It controls client authentication, specifying which users can connect to which databases, from which hosts, and which authentication methods they must use. Here’s how you configure it:

**Structure of `pg_hba.conf`**

The file consists of a series of records, one per line, with fields separated by spaces or tabs. Each record specifies:

1. **Type**: Connection type (local, host, hostssl, hostnossl).
2. **Database**: The database(s) the rule applies to.
3. **User**: The user(s) the rule applies to.
4. **Address**: The client IP address(es) the rule applies to (for `host` types).
5. **Method**: The authentication method to use.

**Common Authentication Methods**:

- **trust**: No password required.
- **password**: Clear-text password.
- **md5**: MD5-encrypted password.
- **peer**: Uses operating system user identity.
- **ident**: Uses external program to map user names.

**Example Configuration**:

1. **Local Connections**:
   ```plaintext
   local   all             all                                     trust
   ```

   This rule allows all users to connect to all databases from the local machine without a password.

2. **IPv4 Remote Connections**:
   ```plaintext
   host    all             all             192.168.1.0/24          md5
   ```

   This rule allows all users to connect to all databases from any IP address in the 192.168.1.0/24 subnet using MD5-encrypted passwords.

3. **IPv6 Remote Connections**:
   ```plaintext
   host    all             all             ::1/128                 md5
   ```

   This rule allows all users to connect to all databases from the local machine over IPv6 using MD5-encrypted passwords.

**Editing `pg_hba.conf`**:

1. **Locate the File**:
   The `pg_hba.conf` file is typically located in the PostgreSQL data directory, e.g., `/var/lib/postgresql/data/pg_hba.conf`.

2. **Edit the File**:
   Use a text editor to modify the file. For example:

   ```bash
   sudo nano /var/lib/postgresql/data/pg_hba.conf
   ```

3. **Reload the Configuration**:
   After making changes, reload the PostgreSQL configuration to apply them.

   ```bash
   sudo systemctl reload postgresql
   ```

**Example Configuration Workflow**:

1. **Edit `pg_hba.conf`**:
   ```plaintext
   # Allow local connections without password
   local   all             all                                     trust

   # Allow connections from the 192.168.1.0/24 subnet with MD5
   host    all             all             192.168.1.0/24          md5

   # Allow connections from localhost over IPv6 with MD5
   host    all             all             ::1/128                 md5
   ```

2. **Reload Configuration**:
   ```bash
   sudo systemctl reload postgresql
   ```

By configuring the `pg_hba.conf` file, you can control access to your PostgreSQL database, ensuring that only authorized users can connect using specified authentication methods.
</details>

<details>
<summary>55. How do you monitor database performance in PostgreSQL?</summary>

Monitoring database performance in PostgreSQL involves tracking various metrics and using tools to analyze and optimize database performance. Here are some key aspects of monitoring PostgreSQL:

**Key Metrics to Monitor**:

1. **CPU and Memory Usage**:
   Monitor CPU and memory usage to ensure the database has enough resources.

   - Use `top`, `htop`, or `vmstat` on the server.
   - PostgreSQL-specific views like `pg_stat_activity` for active queries.

2. **Disk I/O**:
   Monitor disk I/O to detect bottlenecks in data read/write operations.

   - Use `iostat` or `sar` for system-level I/O statistics.
   - Check `pg_stat_bgwriter` for PostgreSQL background writer statistics.

3. **Database Connections**:
   Monitor the number of active connections and ensure it does not exceed the configured limit.

   - Use `pg_stat_activity` to view active connections.

4. **Query Performance**:
   Monitor slow and long-running queries to optimize performance.

   - Use `pg_stat_statements` to track query performance.
   - Enable `log_min_duration_statement` to log slow queries.

5. **Locks and Blocking**:
   Monitor locks and blocking transactions to identify and resolve contention issues.

   - Use `pg_locks` to view lock information.

6. **Vacuum and Autovacuum**:
   Monitor vacuum activity to ensure tables are regularly vacuumed to reclaim space.

   - Use `pg_stat_user_tables` to check vacuum statistics.

**Tools for Monitoring PostgreSQL**:

1. **pgAdmin**:
   A web-based GUI tool for managing and monitoring PostgreSQL databases.

2. **PgBouncer**:
   A lightweight connection pooler that can help manage database connections more efficiently.

3. **Nagios and Icinga**:
   Monitoring tools that can be configured to track PostgreSQL performance metrics and send alerts.

4. **Prometheus and Grafana**:
   Prometheus collects metrics from PostgreSQL, and Grafana visualizes them in dashboards.

5. **pganalyze**:
   A performance monitoring tool specifically for PostgreSQL, providing insights into query performance, index usage, and more.

**Example Monitoring Queries**:

1. **Active Connections**:
   ```sql
   SELECT * FROM pg_stat_activity;
   ```

2. **Query Performance**:
   ```sql
   SELECT query, calls, total_time, rows
   FROM pg_stat_statements
   ORDER BY total_time DESC
   LIMIT 10;
   ```

3. **Locks and Blocking**:
   ```sql
   SELECT pid, locktype, relation, mode, granted
   FROM pg_locks
   WHERE NOT granted;
   ```

4. **Vacuum Statistics**:
   ```sql
   SELECT relname, last_vacuum, last_autovacuum
   FROM pg_stat_user_tables;
   ```

**Example Monitoring Workflow**:

1. **Install pgAdmin**:
   ```bash
   sudo apt-get install pgadmin4
   ```

2. **Configure Prometheus Exporter**:
   ```bash
   sudo apt-get install prometheus-postgresql-exporter
   ```

3. **Set Up Grafana Dashboard**:
   - Install Grafana: `sudo apt-get install grafana`
   - Add PostgreSQL data source.
   - Import pre-built dashboards or create custom ones.

By monitoring these metrics and using the appropriate tools, you can ensure optimal performance and quickly identify and resolve issues in your PostgreSQL database.
</details>
