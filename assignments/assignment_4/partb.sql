-- Important: Do not change the order of the queries below. 
-- The autograder relies on this order for testing.

-- Find all posts with author’s name
SELECT posts.title, users.name AS author 
FROM users
INNER JOIN posts ON users.id = posts.user_id;


-- Find all comments for the post with title 'First Post'
SELECT comments.content, users.name AS commenter
FROM comments
INNER JOIN posts ON comments.post_id = posts.id
INNER JOIN users ON comments.user_id = users.id
WHERE posts.title = 'First Post';


-- Find the number of posts written by each user
SELECT users.name, COUNT(posts.id) AS post_count
FROM users
LEFT JOIN posts ON users.id = posts.user_id
GROUP BY(users.name);



-- Find the top 2 posts with the most comments
SELECT posts.title, COUNT(comments.id) AS comment_count
FROM posts
LEFT JOIN comments ON posts.id = comments.post_id
GROUP BY(posts.title)
ORDER BY comment_count DESC
LIMIT 2;

