'use strict';

const checkDogs = function (dogsJulia, dogsKate) {
	const dogsJuliaCopy = dogsJulia.slice(1, 3);

	const correctedDogs = [...dogsJuliaCopy, ...dogsKate];

	correctedDogs.forEach(function dogAge(age, i) {
		const dogAge = age >= 3 ? 'Adult' : 'Puppy';
		console.log(`Dog number ${i + 1} is a ${dogAge} and is ${age} years old.`);
	});
};

console.log('Test Data 1');
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('Test Data 2');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
