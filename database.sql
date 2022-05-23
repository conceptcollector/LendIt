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
	"user_id" INT REFERENCES "user" NOT NULL
	);

INSERT INTO items (title, author, cover, media_type, comments, "user_id")
	VALUES (
		'American Gods',
		'Neil Gaiman',
		'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpopculturepillowtalk.files.wordpress.com%2F2013%2F04%2Famerican-gods.jpg&f=1&nofb=1',
		'book',
		'This is my all-time favorite book. Have you ever wondered what happened to all the gods that people used to believe in? Neil Gaiman through his trademark beautiful prose seeks to answer that question. A true life changer.',
		1),
		('Big Bang',
		'Simon Singh',
		'https://upload.wikimedia.org/wikipedia/en/4/49/Big_Bang_%28book_cover%29.jpg',
		'book',
		'All due respect to Stephen Hawking, I learn best when someone is showing me instead of telling me. Simon Singh shows you how the Big Bang happened with math throughout this book. In addition to that, you get a glorious history of the theory. And it introduced me to Fred Hoyle the chief antagonist and also accidental savior of the big bang theory.',
		1),
		('Hounds of Love',
		'Kate Bush',
		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.genius.com%2F59131ed58b5385129e00da889bde1af6.1000x1000x1.jpg&f=1&nofb=1',
		'CD',
		'This album probably has a couple "Oh, this song!" songs on it for you. But trust me, it goes much deeper than what you already know. Please give Kate Bush some attention, she is one of my favorite songwriters.',
		1);