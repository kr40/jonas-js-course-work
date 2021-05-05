'use strict';

const Mark = {
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};

const John = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};

Mark.calcBMI();
John.calcBMI();

if (Mark.bmi > John.bmi) {
	console.log(
		`${Mark.fullName}'s BMI (${Math.floor(Mark.bmi)}) is higher than ${
			John.fullName
		}'s BMI (${Math.floor(John.bmi)}).`
	);
} else {
	console.log(
		`${John.fullName}'s BMI (${Math.floor(John.bmi)}) is higher than ${
			Mark.fullName
		}'s BMI (${Math.floor(Mark.bmi)}).`
	);
}
