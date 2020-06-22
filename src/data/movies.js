
const movies = [
	{
		id: 13,
		title: "Star Wars: Episode IX - The Rise of Skywalker",
		rating: 6.7,
		year: 2019,
		poster: 'https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg',
		runtime: 142,
		genre: 'Action, Adventure, Fantasy, Sci-Fi',
		plot: 'The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.',
		videos: [
			{'quality': 720, 'magnet_link': 'a89aafb1eba56603b84722eef3dadd91a29b7fa6'},
			{'quality': 1080, 'magnet_link': '3d05db59eebc36f37f70197b1c527ae0f4dcd0f8'},
			{'quality': 2160, 'magnet_link': '3d05db59eebc36f37f70197b1c527ae0f4dcd0f8'},
		]
	},
	{
		id: 12,
		title: "The Lion King",
		rating: 6.9,
		year: 2019,
		poster: 'https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg',
		runtime: 118,
		genre: 'Animation, Adventure, Drama, Family, Musical',
		plot: 'After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.',
		videos: [
			{'quality': 720, 'magnet_link': 'f4c231734df63e05d214b08308d2ef93210c1858'},
			{'quality': 1080, 'magnet_link': 'f4c231734df63e05d214b08308d2ef93210c1858'},
			{'quality': 2160, 'magnet_link': 'f4c231734df63e05d214b08308d2ef93210c1858'},
		]
	},
	{
		id: 11,
		title: "Nathan's Kingdom",
		rating: 8.0,
		year: 2020,
		poster: 'https://m.media-amazon.com/images/M/MV5BMzkxNGU2YTQtMmI3Zi00OTA1LWJkMDQtMTc0M2Y2NjZjNzk5XkEyXkFqcGdeQXVyMjU5NDc4MzI@._V1_SX300.jpg',
		runtime: 93,
		genre: 'Drama',
		plot: 'Nathan\'s Kingdom is an imaginative coming of age drama about Laura, a 19-year-old outcast, who will not surrender Nathan, her 25-year-old autistic brother, to social services, and she takes him on an impossible quest to find a fictitious kingdom that only exists in Nathan\'s imagination, but proves to be so real; it changes their lives forever. To cope with the hardships of a broken home, Laura spent her younger years hiding her emotions and playing with her self appointed best friend, Nathan. Together, they invent a fictitious safe haven called \\"The Kingdom\\" and promise each other to one day find it. Ten years go by and adulthood sets in. Laura takes Nathan with her to live in Los Angeles while she works as a professional actress, but things don\'t go as planned. Nathan demands that they go find his kingdom and retaliates against her when she does not keep her childhood promise. Laura fails at her career and ultimately loses all hope in herself. With no money, no place to live, and nothing to lose, Laura decides to take Nathan on a road trip to find his kingdom.',
		videos: [
			{'quality': 720, 'magnet_link': '1667eca8fc22b2d9e37d7d06c8ae80d176935c72'},
			{'quality': 1080, 'magnet_link': 'aa5f2570cd5007d3a13fa4ca88c206c0971fe293'},
			{'quality': 2160, 'magnet_link': 'aa5f2570cd5007d3a13fa4ca88c206c0971fe293'},
		]
	},
	{
		id: 10,
		title: "The Martian",
		rating: 7.9,
		year: 2015,
		poster: 'https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg',
		runtime: 144,
		genre: 'Adventure, Drama, Sci-Fi',
		plot: 'During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive. Millions of miles away, NASA and a team of international scientists work tirelessly to bring \\"the Martian\\" home, while his crewmates concurrently plot a daring, if not impossible, rescue mission. As these stories of incredible bravery unfold, the world comes together to root for Watney\'s safe return.',
		videos: [
			{'quality': 720, 'magnet_link': 'd4e423510d85fa5bad84eaf66d516827505a7485'},
			{'quality': 1080, 'magnet_link': '874932a935d0c9c0e439259c60f38ac331661f66'},
			{'quality': 2160, 'magnet_link': '874932a935d0c9c0e439259c60f38ac331661f66'},
		]
	},
	{
		id: 9,
		title: "Superman: Red Son",
		rating: 6.3,
		year: 2020,
		poster: 'https://m.media-amazon.com/images/M/MV5BMDg3NDc5YzEtOTk1My00ZTZhLTlmNjctZTJlNjYzZjE0MTI1XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg',
		runtime: 84,
		genre: 'Animation, Action, Sci-Fi',
		plot: 'What if baby Kal-El\'s rocket landed, not in Kansas, but in the Soviet Union? That is the premise of this Elseworld\'s tale from DC Comics.',
		videos: [
			{'quality': 720, 'magnet_link': 'c2db5819c5899d434d7533eb51a4ebe2b0f47def'},
			{'quality': 1080, 'magnet_link': 'c2db5819c5899d434d7533eb51a4ebe2b0f47def'},
			{'quality': 2160, 'magnet_link': 'c2db5819c5899d434d7533eb51a4ebe2b0f47def'},
		]
	},
	{
		id: 8,
		title: "Birds of Prey: And the Fantabulous Emancipation of One Harley Quinn",
		rating: 6.2,
		year: 2020,
		poster: 'https://m.media-amazon.com/images/M/MV5BMzQ3NTQxMjItODBjYi00YzUzLWE1NzQtZTBlY2Y2NjZlNzkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
		runtime: 109,
		genre: 'Action, Adventure, Crime',
		plot: 'After splitting with the Joker, Harley Quinn joins superheroes Black Canary, Huntress and Renee Montoya to save a young girl from an evil crime lord.',
		videos: [
			{'quality': 720, 'magnet_link': '38fd033f1055f521c469d45515027e19d4baff0e'},
			{'quality': 1080, 'magnet_link': 'f49c6932a9d762e36573ae039949e7ec5521e16b'},
			{'quality': 2160, 'magnet_link': 'f49c6932a9d762e36573ae039949e7ec5521e16b'},
		]
	},
	{
		id: 7,
		title: "Doctor Sleep",
		rating: 7.4,
		year: 2019,
		poster: 'https://m.media-amazon.com/images/M/MV5BYmY3NGJlYTItYmQ4OS00ZTEwLWIzODItMjMzNWU2MDE0NjZhXkEyXkFqcGdeQXVyMzQzMDA3MTI@._V1_SX300.jpg',
		runtime: 152,
		genre: 'Drama, Fantasy, Horror, Thriller',
		plot: 'Years following the events of The Shining (1980), a now-adult Dan Torrance must protect a young girl with similar powers from a cult known as The True Knot, who prey on children with powers to remain immortal.',
		videos: [
			{'quality': 720, 'magnet_link': '779a96b441500b9d7da9bfaa9dc1bfa5fb02c23c'},
			{'quality': 1080, 'magnet_link': '754b222fb233b335791fc0777b12b13996cbff23'},
			{'quality': 2160, 'magnet_link': '754b222fb233b335791fc0777b12b13996cbff23'},
		]
	},
	{
		id: 6,
		title: "The Invisible Man",
		rating: 7.1,
		year: 2020,
		poster: 'https://m.media-amazon.com/images/M/MV5BZjFhM2I4ZDYtZWMwNC00NTYzLWE3MDgtNjgxYmM3ZWMxYmVmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
		runtime: 124,
		genre: 'Horror, Mystery, Sci-Fi, Thriller',
		plot: 'When Cecilia\'s abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.',
		videos: [
			{'quality': 720, 'magnet_link': '4528ecc765dd6d610705384e82c3a2912a25bffa'},
			{'quality': 1080, 'magnet_link': 'd6a10249af71820760f1e2144db2eb48a8d2bded'},
			{'quality': 2160, 'magnet_link': 'd6a10249af71820760f1e2144db2eb48a8d2bded'},
		]
	},
	{
		id: 5,
		title: "Spider-Man: Far from Home",
		rating: 7.5,
		year: 2019,
		poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
		runtime: 129,
		genre: 'Action, Adventure, Sci-Fi',
		plot: 'Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.',
		videos: [
			{'quality': 720, 'magnet_link': '2785c4334ef835b25ec1202299f768ef22f53102'},
			{'quality': 1080, 'magnet_link': '37e77490bc4f285dbfa837514715a20bd405a502'},
			{'quality': 2160, 'magnet_link': '37e77490bc4f285dbfa837514715a20bd405a502'},
		]
	},
	{
		id: 4,
		title: "Spider-Man: Into the Spider-Verse",
		rating: 8.4,
		year: 2018,
		poster: 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg',
		runtime: 117,
		genre: 'Animation, Action, Adventure, Family, Sci-Fi',
		plot: 'Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.',
		videos: [
			{'quality': 720, 'magnet_link': 'e70b6a744044dd0caaa33335f4b620dbc47018cb'},
			{'quality': 1080, 'magnet_link': 'a753ea13f243ef9c4006d103dcbdbc7cabad8a01'},
			{'quality': 2160, 'magnet_link': 'a753ea13f243ef9c4006d103dcbdbc7cabad8a01'},
		]
	},
	{
		id: 3,
		title: "1917",
		rating: 8.3,
		year: 2019,
		poster: 'https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg',
		runtime: 119,
		genre: 'Drama, War',
		plot: 'April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.',
		videos: [
			{'quality': 720, 'magnet_link': '865DB3B2414C2A22D6320556BA5A9417E9655919'},
			{'quality': 1080, 'magnet_link': 'BCA973373EBDE35C3887D026C7929B8017A3572B'},
			{'quality': 2160, 'magnet_link': 'BCA973373EBDE35C3887D026C7929B8017A3572B'},
		]
	},
	{
		id: 2,
		title: "Jojo Rabbit",
		rating: 7.9,
		year: 2019,
		poster: 'https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg',
		runtime: 108,
		genre: 'Comedy, Drama, War',
		plot: 'A young boy in Hitler\'s army finds out his mother is hiding a Jewish girl in their home.',
		videos: [
			{'quality': 720, 'magnet_link': 'AAD00DBCFF7B1952F2FA1A237A02D3F98F1A6823'},
			{'quality': 1080, 'magnet_link': '9764e7c8e879a531ee36db8bd4748a2734916cb8'},
			{'quality': 2160, 'magnet_link': '9764e7c8e879a531ee36db8bd4748a2734916cb8'},
		]
	},
	{
		id: 1,
		title: "Joker",
		rating: 8.5,
		year: 2019,
		poster: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
		runtime: 122,
		genre: 'Crime, Drama, Thriller',
		plot: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
		videos: [
			{'quality': 720, 'magnet_link': '33435E0D8EE7311F5AC93531A402F7A002E4A750'},
			{'quality': 1080, 'magnet_link': '2B415A885A3E2210A6EF1D6C57EBA325F20D8BC6'},
			{'quality': 2160, 'magnet_link': '42e92deaa863d1b6083bb159c14fa827ea8ef9b6'},
		]
	},
];

export default movies;
