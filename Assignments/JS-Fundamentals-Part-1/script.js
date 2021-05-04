//* Lecture: Values and Variables

const country = 'India';
const continent = 'Asia';
let population = 1409.56;

console.log(
	`I am from ${country} which is in ${continent} and has a population of ${population} million.`
);

//* Lecture: Data Types

const isIsland = false;
const language = 'hindi';

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof population);
console.log(typeof country);

//* Lecture: let, const and var
// Already done above.

//* Lecture: Basic Operators

console.log(population / 2);
console.log(population++);
console.log(population > 6);
console.log(population < 33);

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);

//* Lecture: Strings and Template Literals
// Already done above.

//* Lecture: Taking Decisions: if/else Statements

if (population > 33) {
	console.log(`${country}'s population is above average.`);
} else {
	console.log(`${country}'s population is ${33 - population} below average.`);
}

//* Lecture: Type Conversion and Coercion

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

//* Lecture: Equality Operators: == vs ===

// const numNeighbours = prompt('How many neighbors countries does your country have?', 1);

// if (numNeighbours === 1) {
// 	console.log(`Only 1 neighbor`);
// } else if (numNeighbours > 1) {
// 	console.log(`More than 1 neighbor`);
// } else {
// 	console.log(`No borders`);
// }

//* Lecture: Logical Operators

if (language === 'English' && population < 50 && !isIsland) {
	console.log(`You should live in ${country}`);
} else {
	console.log(`${country} does not meet your criteria 😢`);
}

//* Lecture: The switch Statement

switch (language) {
	case 'chinese':
	case 'mandarin':
		console.log('MOST number of native speakers!');
		break;
	case 'spanish':
		console.log('2nd place in number of native speakers');
		break;
	case 'english':
		console.log('3rd place');
		break;
	case 'hindi':
		console.log('Number 4');
		break;
	case 'arabic':
		console.log('5th most spoken language');
		break;
	default:
		console.log('Great language too :D');
}

//* Lecture: The Conditional (Ternary) Operator

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);
