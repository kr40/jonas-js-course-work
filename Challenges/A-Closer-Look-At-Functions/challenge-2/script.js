'use strict';

(function () {
	const header = document.querySelector('h1');
	header.style.color = 'red';

	document.querySelector('body').addEventListener('click', function () {
		header.style.color = 'blue';
	});
})();

// IIFE executed and exited the EC, but, the next function remembers the variables of its birthplace and hence it works.
