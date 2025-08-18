-- Assignment: Student Table Operations
-- 1. Create student table
CREATE TABLE student (
    id INTEGER PRIMARY KEY,
    fullName TEXT(100),
    age INTEGER
);

-- 2. Insert at least 3 records
INSERT INTO student (id, fullName, age) VALUES
    (1, 'John Smith', 18),
    (2, 'Jane Doe', 19),
    (3, 'Bob Johnson', 21);

-- 3. Update the age of student with ID 2 to 20
UPDATE student
SET age = 20
WHERE id = 2;
