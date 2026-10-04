## SQL Questions

### Q: Explain SQL joins: Inner Join, Left Join, Right Join, and Full Outer Join.
A: An `INNER JOIN` returns only records with matching keys in both tables. A `LEFT JOIN` returns all rows from the left table alongside matching rows from the right table, while a `RIGHT JOIN` does the opposite. A `FULL OUTER JOIN` retrieves all rows whenever there is a match in either table, filling non-matching fields with `NULL`.

### Q: How does the `GROUP BY` clause work?
A: `GROUP BY` collapses rows sharing identical values in specified columns into summary rows. It is frequently combined with aggregate functions like `COUNT()`, `SUM()`, `AVG()`, `MIN()`, or `MAX()` to calculate group-level metrics.

### Q: How do you insert records into a table (`INSERT INTO`)?
A: Records are added using the `INSERT INTO table_name (col1, col2) VALUES (val1, val2)` syntax. You can insert a single record or append multiple comma-separated tuples within a single query.

### Q: How do you remove records or delete a table (`DELETE` vs. `DROP`)?
A: `DELETE` is a DML statement that removes specific rows satisfying a `WHERE` condition while preserving the table schema and allowing transaction rollbacks. `DROP` is a DDL command that permanently removes both data and table structure from the database immediately without rollback capability.

### Q: How do you identify and delete duplicate records from a table?
A: Duplicates can be identified by grouping by target columns and filtering with `HAVING COUNT(*) > 1`. To delete them, you can partition rows using the `ROW_NUMBER()` window function within a Common Table Expression (CTE) and delete all rows where the row rank exceeds 1.


