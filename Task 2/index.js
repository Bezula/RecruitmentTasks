"use strict";

const currentPoints = document.querySelector(".text-value");
const moreWins = document.querySelector(".more-wins");
const currentStreak = document.querySelector(".current-streak");
const bestStreak = document.querySelector(".best-streak");
const select = document.querySelector(".select");
const goal = document.querySelector(".text-goal");
const firstScore = document.getElementById("first-score");
const secondScore = document.getElementById("second-score");
const thirdScore = document.getElementById("third-score");
const fourthScore = document.getElementById("fourth-score");

window.onload = () => {
	const youArrow = document
		.getElementById("you-arrow")
		.contentDocument.getElementById("you-arrow");
	youArrow.setAttribute("fill", "white");
	youArrow.setAttribute("stroke", "white");
	const current = document.getElementById("svg").contentDocument;
	select.addEventListener("change", () => {
		if (select.value === "Month") {
			currentPoints.innerHTML = "12m";
			moreWins.innerHTML = "188";
			currentStreak.innerHTML = "7";
			bestStreak.innerHTML = "44";
			goal.innerHTML = "200m Goal";
			current
				.getElementById("test")
				.setAttribute("stroke-dasharray", "29.4, 490");

			firstScore.innerHTML = "34m";
			secondScore.innerHTML = "17m";
			thirdScore.innerHTML = "16m";
			fourthScore.innerHTML = "12m";
		} else if (select.value === "Week") {
			currentPoints.innerHTML = "38m";
			moreWins.innerHTML = "12";
			currentStreak.innerHTML = "4";
			bestStreak.innerHTML = "12";
			goal.innerHTML = "50m Goal";
			current
				.getElementById("test")
				.setAttribute("stroke-dasharray", "372.4, 490");

			firstScore.innerHTML = "105m";
			secondScore.innerHTML = "52m";
			thirdScore.innerHTML = "50m";
			fourthScore.innerHTML = "38m";
		}
	});
};
