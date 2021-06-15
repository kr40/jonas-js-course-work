'use strict';

const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	players: [
		[
			'Neuer',
			'Pavard',
			'Martinez',
			'Alaba',
			'Davies',
			'Kimmich',
			'Goretzka',
			'Coman',
			'Muller',
			'Gnarby',
			'Lewandowski',
		],
		['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'],
	],
	score: '4:0',
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
	date: 'Nov 9th, 2037',
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

//* Array for each team

const [players1, players2] = game.players;
console.table(players1);
console.table(players2);

//* GK and other players for Bayern Munich

const [GK, ...fieldPlayers] = players1;

console.log(GK);
console.table(fieldPlayers);

//* All players of both teams

const allPlayers = [...players1, ...players2];

console.table(allPlayers);

//* Substitute Players

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

console.table(players1Final);

//* One Variable for each odd

const { team1, x: draw, team2 } = game.odds;

console.log(team1, draw, team2);

//* Print Goals

const printGoals = function (...players) {
	console.log(`${players.length} goals were scored by ${players}.`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//* Odds print

team1 < team2 && console.log('Team 1 is more likely to win!');
team1 > team2 && console.log('Team 2 is more likely to win!');
