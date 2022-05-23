CREATE TABLE "user" (
	id SERIAL PRIMARY KEY,
	username VARCHAR(255),
	password VARCHAR(255),
	email_address VARCHAR(255),
	inserted_at TIMESTAMP,
	updated_at TIMESTAMP
);

CREATE TABLE items (
	id SERIAL PRIMARY KEY,
	title VARCHAR(255),
	author VARCHAR(255),
	cover VARCHAR(255),
	media_type VARCHAR(255),
	comments TEXT,
	inserted_at TIMESTAMP,
	updated_at TIMESTAMP,
	users_id INT
	);