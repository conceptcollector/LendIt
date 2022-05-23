CREATE TABLE "user" (
	id SERIAL PRIMARY KEY,
	username VARCHAR(255),
	password VARCHAR(255),
	email_address VARCHAR(255),
	inserted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
	updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE items (
	id SERIAL PRIMARY KEY,
	title VARCHAR(255),
	author VARCHAR(255),
	cover VARCHAR(255),
	media_type VARCHAR(255),
	comments TEXT,
	inserted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
	updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
	users_id INT REFERENCES "user" NOT NULL
	);