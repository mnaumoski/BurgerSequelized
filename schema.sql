CREATE DATABASE IF NOT EXISTS burgersSeq_db;
USE burgersSeq_db;

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS burgers;

# Create the burgers table
CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
burger_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
devoured boolean NOT NULL DEFAULT FALSE,
PRIMARY KEY (id)
);
