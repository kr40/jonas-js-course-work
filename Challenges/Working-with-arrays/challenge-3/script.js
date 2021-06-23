'use strict';

const calcAverageHumanAge = (ages) =>
	ages
		.map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
		.filter((age) => age >= 18)
		.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
