'use strict';
const gameEvents = new Map([
	[17, '⚽ GOAL'],
	[36, '🔁 Substitution'],
	[47, '⚽ GOAL'],
	[61, '🔁 Substitution'],
	[64, '🔶 Yellow card'],
	[69, '🔴 Red card'],
	[70, '🔁 Substitution'],
	[72, '🔁 Substitution'],
	[76, '⚽ GOAL'],
	[80, '⚽ GOAL'],
	[92, '🔶 Yellow card'],
]);

//* Task 1 Create an Array 'events'

const events = [...new Set(gameEvents.values())];
console.log(events);

//* Task 2 Delete a event

gameEvents.delete(64);

//* Print a string in the console

console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

//* Loop over the events

for (const [min, event] of gameEvents) {
	const half = min <= 45 ? 'FIRST' : 'SECOND';
	console.log(`[${half} HALF] ${min}: ${event}`);
}
