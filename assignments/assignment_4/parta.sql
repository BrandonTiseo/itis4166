
--Create ENUM user_roles
CREATE TYPE user_roles AS ENUM ('admin', 'member');

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    role user_roles DEFAULT 'member'
);

--- Create posts table
CREATE TABLE IF NOT EXISTS posts (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	user_id INT NOT NULL,
	title TEXT NOT NULL,
	content TEXT NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (user_id)
	REFERENCES users(id)
	ON DELETE CASCADE
);

-- Create comments table
CREATE TABLE IF NOT EXISTS comments(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	post_id INT NOT NULL,
	user_id INT NOT NULL,
	content TEXT NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (post_id)
	REFERENCES posts(id)
	ON DELETE CASCADE,
	FOREIGN KEY (user_id)
	REFERENCES users(id)
	ON DELETE CASCADE
);


-- Create categories table
CREATE TABLE IF NOT EXISTS categories(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(100) NOT NULL UNIQUE
);


-- Create post_categories table
CREATE TABLE IF NOT EXISTS post_categories(
	category_id INT,
	post_id INT,
	PRIMARY KEY(category_id, post_id),
	
	FOREIGN KEY (category_id)
	REFERENCES categories(id)
	ON DELETE CASCADE,
	
	FOREIGN KEY (post_id)
	REFERENCES posts(id)
	ON DELETE CASCADE
);


-- Add data to the users table
INSERT INTO users(name, email, role)
VALUES
	('Brandon Tiseo', 'btiseo@charlotte.edu','member'),
	('John Blim', 'jblim@charlotte.edu','admin');
	
-- Add data to the categories table
INSERT INTO categories(name)
VALUES
	('Personal'),
	('Opinion'),
	('Informational');

-- Add data to the posts table
INSERT INTO posts(user_id, title, content)
VALUES
	(1, 'First Post', 'First Post!'),
	(1, 'My second post', 'I really like this platform'),
	(2, 'First Post', 'First Post.'),
	(2, 'My last post', 'I will be signing off.');

-- Add data to the post_categories table
INSERT INTO post_categories (category_id, post_id)
VALUES
	(1, 1),
	(2, 2),
	(1, 3),
	(3, 4);


-- Add data to the comments table
INSERT INTO comments (post_id, user_id, content)
VALUES
	(1,2,'Welcome to the platform!'),
	(1,1,'Thank you I am really enjoying it so far!'),
	(4,1,'Oh no I am sorry to hear, how come?'),
	(4,2,'I do not like the speed of the site.');

