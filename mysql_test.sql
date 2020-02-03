CREATE TABLE users (
    id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT, 
    user_id VARCHAR(10),
    first_name VARCHAR(10),
    last_name VARCHAR(10),
    email VARCHAR(20),
    age INT(5),
    password VARCHAR(10)
)