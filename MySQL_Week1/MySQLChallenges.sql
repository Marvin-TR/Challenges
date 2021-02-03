DROP DATABASE IF EXISTS MySQL_Challenges ;
CREATE DATABASE MySQL_Challenges;
USE MySQL_Challenges;
-- Very Easy
CREATE TABLE favorite_cars(
	make VARCHAR(255),
    model VARCHAR(255),
    year VARCHAR(255)
);

INSERT INTO favorite_cars (make, model, year)
VALUES 
('Toyota','Supra','2021'),
('Honda','Civic','2021'),
('Honda','Accord','2021');

INSERT INTO favorite_cars(make,model,year)
VALUES 
('KIA', 'K5','2021'),
('Nissan', 'Rogue','2021');


SELECT * FROM favorite_cars;

-- Easy
CREATE TABLE favorite_books(
PRIMARY KEY (id),
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(255),
publish_date DATE,
author VARCHAR(255)
);

INSERT INTO  favorite_books (title, publish_date,author)
VALUES
('Nineteen Eighty-Four','1949-06-08' ,'George Orwell'),
('The Catcher in the Rye','1959-07-16' ,'George Orwell'),
('The Great Gatsby','1925-04-10' ,' F. Scott Fitzgerald'),
('To Kill a Mockingbird','1960-07-11' ,'Harper Lee'),
('Lolita','1955-09-11' ,' Vladimir Nabokov');

INSERT INTO favorite_books (title, publish_date,author)
VALUES
('The Lord of the Rings','1954-07-29' ,' J. R. R. Tolkien'),
('Pride and Prejudice','1813-01-28' ,' Jane Austen');

SELECT * FROM favorite_books;

DELETE FROM favorite_books
ORDER BY publish_date 
LIMIT 1;

SELECT * FROM favorite_books;

SELECT id FROM favorite_books
ORDER BY id DESC
LIMIT 1;

-- MEDIUM

CREATE TABLE favorite_movies(
title VARCHAR(255),
release_date DATE,
rating VARCHAR(255)
);

INSERT INTO favorite_movies(title,release_date,rating)
VALUES
('Spirited Away', '2002-08-31', 'PG'),
('Dunkirk', '2017-07-21', 'PG-13'),
('Parasite', '2019-10-05', 'R'),
('Inception', '2010-07-13', 'PG-13'),
('Pans Labyrinth', '2006-12-29', 'R'),
('The Dark Knight', '2008-07-18', 'PG-13'),
('The Social Network', '2010-10-01', 'PG-13'),
('Lady Bird', '2018-02-15', 'R'),
('Moonlight', '2017-02-16', 'R'),
('12 Years a Slave', '2013-10-18', 'R');

SELECT * FROM favorite_movies WHERE title LIKE '%s%' ORDER BY release_date;

-- HARD

ALTER TABLE favorite_movies ADD director_firstName VARCHAR(255);
ALTER TABLE favorite_movies ADD director_lastName VARCHAR(255);



UPDATE favorite_movies SET director_firstName = 'Hayao', director_lastName = 'Miyazaki' WHERE title = 'Spirited Away';
UPDATE favorite_movies SET director_firstName = 'Christopher', director_lastName = 'Nolan' WHERE title = 'Dunkirk' OR title = 'Inception' OR title = 'The Dark Knight';
UPDATE favorite_movies SET director_firstName = 'Bong', director_lastName = 'Joon-ho' WHERE title = 'Parasite';
UPDATE favorite_movies SET director_firstName = 'Guillermo', director_lastName = 'del Toro' WHERE title = 'Pans Labyrinth';
UPDATE favorite_movies SET director_firstName = 'David', director_lastName = 'Fincher' WHERE title = 'The Social Network';
UPDATE favorite_movies SET director_firstName = 'Greta', director_lastName = 'Gerwig' WHERE title = 'Lady Bird';
UPDATE favorite_movies SET director_firstName = 'Barry', director_lastName = 'Jenkins' WHERE title = 'Moonlight';
UPDATE favorite_movies SET director_firstName = 'Steve', director_lastName = 'McQueen' WHERE title = '12 Years a Slave';

SELECT CONCAT(director_firstName, ' ',director_lastName) AS directorFullName FROM favorite_movies;
SELECT * FROM favorite_movies;

SELECT * FROM favorite_movies ORDER BY director_lastName;
DELETE FROM favorite_movies WHERE REGEXP_LIKE(director_lastName, '[r-z]$');
SELECT * FROM favorite_movies LIMIT 3;

-- Very Hard

INSERT INTO favorite_cars(make, model, year)
VALUES
('Ford', 'MODEL T', '1908'),
('Ferrari', 'F8 Tributo', '2020'),
('Lamborghini', 'Murcielago', '2010');

ALTER TABLE favorite_cars ADD color VARCHAR(255);
ALTER TABLE favorite_cars ADD price INT;

UPDATE favorite_cars SET color = "black", price = 21000 WHERE model = 'MODEL T';
UPDATE favorite_cars SET color = "yellow", price = 354000 WHERE model = 'Murcielago';
UPDATE favorite_cars SET color = "red", price = 267000 WHERE model = 'F8 Tributo';

SELECT CONCAT(make, ' ', model) AS car FROM favorite_cars;

SELECT *, (SELECT COUNT(*) FROM favorite_cars WHERE make = c.make) AS same_makers FROM favorite_cars AS c;