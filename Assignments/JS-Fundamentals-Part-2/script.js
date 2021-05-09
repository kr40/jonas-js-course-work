'use strict';

//* LECTURE: Functions

const describeCountry = (country, population, capitalCity) =>
	console.log(`${country} has ${population} million population and it's capital is ${capitalCity}`);

const describeIndia = describeCountry('India', 1409, 'Delhi');

//* LECTURE: Function Declaration vs Expressions

function percentageOfWorld1(country, population) {
	console.log(
		`${country} has ${population} million people, so it's about ${
			(population / 7900) * 100
		}% of the world's population.`
	);
}
percentageOfWorld1('India', 1409);

const percentageOfWorld2 = function (country, population) {
	console.log(
		`${country} has ${population} million people, so it's about ${
			(population / 7900) * 100
		}% of the world's population.`
	);
};
percentageOfWorld2('India', 1409);

//* LECTURE: Arrow Functions

const percentageOfWorld3 = (country, population) =>
	console.log(
		`${country} has ${population} million people, so it's about ${
			(population / 7900) * 100
		}% of the world's population.`
	);

percentageOfWorld3('India', 1409);

const percentageOfWorld = (population) => (population / 7900) * 100;

//* LECTURE: Function Calling Other Functions
// Sort of did it in previous lecture.

//* Introduction to Arrays

const populations = [10, 1441, 332, 83];
console.log(populations.length === 4);
const percentages = [
	percentageOfWorld(populations[0]),
	percentageOfWorld(populations[1]),
	percentageOfWorld(populations[2]),
	percentageOfWorld(populations[3]),
];
console.log(percentages);

//* Basic Array Operations(Methods)

const neighbours = ['Norway', 'Sweden', 'Russia'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes('Germany')) {
	console.log('Probably not a central European country :D');
}
neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';
console.log(neighbours);

//* LECTURE: Introduction of Objects

const myCountry = {
	country: 'India',
	capital: 'Delhi',
	language: 'Hindi',
	population: 1409,
	neighbours: ['China', 'Bhutan', 'Nepal', 'Bangladesh', 'Pakistan', 'Myanmar'],
};

//* Dot vs Bracket Notation

console.log(
	`${myCountry.country} has ${myCountry.population} million
${myCountry.language}-speaking people,
${myCountry.neighbours.length} neighboring countries and
a capital called ${myCountry.capital}.`
);
myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);

//* Object Methods

const myCountry2 = {
	country: 'Finland',
	capital: 'Helsinki',
	language: 'finnish',
	population: 6,
	neighbours: ['Norway', 'Sweden', 'Russia'],
	describe: function () {
		console.log(
			`${this.country} has ${this.population} million
${this.language}-speaking people,
${this.neighbours.length} neighboring countries and a
capital called ${this.capital}.`
		);
	},
	checkIsland: function () {
		this.isIsland = this.neighbours.length === 0 ? true : false;
		// Even simpler version (see why this works...)
		// this.isIsland = !Boolean(this.neighbours.length);
	},
};
myCountry2.describe();
myCountry2.checkIsland();
console.log(myCountry2);

//* LECTURE: Iteration: The for Loop

for (let voter = 1; voter <= 50; voter++) console.log(`Voter number ${voter} is currently voting`);

//* LECTURE: Looping Arrays, Breaking and Continuing

const populations2 = [10, 1441, 332, 83];
const percentages2 = [];
for (let i = 0; i < populations2.length; i++) {
	const percentage = percentageOfWorld(populations2[i]);
	percentages2.push(percentage);
}
console.log(percentages2);

//* LECTURE: Looping Backwards and Loops in Loops

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let i = 0; i < listOfNeighbours.length; i++)
	for (let y = 0; y < listOfNeighbours[i].length; y++) console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

//* LECTURE: The while Loop

const percentages3 = [];
let i = 0;
while (i < populations.length) {
	const perc = percentageOfWorld(populations[i]);
	percentages3.push(perc);
	i++;
}
console.log(percentages3);
