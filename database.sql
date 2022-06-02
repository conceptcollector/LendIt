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

CREATE TABLE carousel (
	id SERIAL PRIMARY KEY,
	src VARCHAR(1000)
);

INSERT INTO carousel (src)
	VALUES
	('https://1.bp.blogspot.com/--Q1iiRE68Yk/VbEcvsA0T9I/AAAAAAABq-w/eolBH49DIyc/s1600/alternative-abbey-road_01.jpg')
	('http://images.fanpop.com/images/image_uploads/American-Gods-neil-gaiman-657066_600_860.jpg')
	('https://interactive.wttw.com/sites/default/files/beloved@2x.jpg')
	('https://img.reelgood.com/content/movie/38a9dc4f-11e6-47ce-aa2a-415532625310/poster-780.jpg')
	('https://www.filmico.tv/wp-content/uploads/2020/04/c.jpg'),
	('https://faculty.etsu.edu/gardnerr/anniversaries/cosmos/cosmos.jpg'),
	('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa.ltrbxd.com%2Fresized%2Ffilm-poster%2F4%2F7%2F4%2F4%2F7%2F4%2F474474-everything-everywhere-all-at-once-0-460-0-690-crop.jpg%3Fk%3D2206116482&f=1&nofb=1'),
	('https://static.stereogum.com/uploads/2015/06/Bully-Feels-Like-compressed.jpg'),
	('https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg'),
	('http://d24jnm9llkb1ub.cloudfront.net/icpn/00602537451982/00602537451982-cover-zoom.jpg');