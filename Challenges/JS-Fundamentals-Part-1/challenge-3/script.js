const dolphinAverage = (97 + 112 + 101) / 3;

const koalasAverage = (109 + 95 + 123) / 3;

//* With basic if elseif else

if (dolphinAverage > koalasAverage && dolphinAverage >= 100) {
	console.log(`Dolphins WIN with the average score of ${dolphinAverage} points!`);
} else if (koalasAverage > dolphinAverage && koalasAverage >= 100) {
	console.log(`Koalas WIN with the average score of ${koalasAverage} points!`);
} else if (koalasAverage === dolphinAverage && koalasAverage >= 100 && dolphinAverage >= 100) {
	console.log(`It is a DRAW!!`);
} else {
	console.log(`Nobody WINS :(`);
}

//* With Ternary Operator Chaining

dolphinAverage > koalasAverage && dolphinAverage >= 100
	? console.log(`Dolphins WIN with the average score of ${dolphinAverage} points!`)
	: koalasAverage > dolphinAverage && koalasAverage >= 100
	? console.log(`Koalas WIN with the average score of ${koalasAverage} points!`)
	: koalasAverage === dolphinAverage && koalasAverage >= 100 && dolphinAverage >= 100
	? console.log(`It is a DRAW!!`)
	: console.log(`Nobody WINS :(`);
