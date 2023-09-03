'use strict'
let getHole = index => document.getElementById(`hole${index}`);
let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');
let wings = 0;
let losts = 0;

function checkGame(element) {
	if (element.className.includes('hole_has-mole')) {
		wings += 1;
	} else {
		losts += 1;
	}

	if (wings === 2) {
		alert("Вы победили!");
		wings = 0;
		losts = 0;
	}

	if (losts === 2) {
		alert("Вы победили!");
		wings = 0;
		losts = 0;
	}

	deadMole.textContent = wings;
	lostMole.textContent = losts;

}

let i = 0;

for (i = 1; i <= 9; i++) {
	let element = getHole(i);
	element.onclick = () => {
		checkGame(element)
	};
}