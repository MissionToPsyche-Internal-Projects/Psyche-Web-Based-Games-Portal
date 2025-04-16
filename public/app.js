// List for all Web Based Projects (Games and WebXR) is at src/data/games.js
import games from "./data/games.js";

// Creates the cards for all projects with play button
for (let index = 0; index < games.length; index++) {
	let card = document.createElement("div");
	card.className = "card";
	card.setAttribute("game-class", games[index].class);
	card.setAttribute("game-genre", games[index].genre);
	card.setAttribute("game-age", games[index].age);
	card.setAttribute("game-difficulty", games[index].difficulty);
	card.classList.add(
		"border-0",
		"col-3",
		"p-0",
		"ms-5",
		"mb-5",
		"card"
	);

	let cardContent = document.createElement("div");
	cardContent.classList.add("card-body");

	let cardTitle = document.createElement("h6");
	cardTitle.innerHTML = games[index].id.split("-").join(" ").toUpperCase();
	cardTitle.classList.add("card-title");

	let projectScreenshot = document.createElement("img");
	projectScreenshot.classList.add("card-img-top");
	projectScreenshot.src = `images/${games[index].thumbnail}`;
	projectScreenshot.onerror = () => projectScreenshot.src = 'images/error.png'
	projectScreenshot.style.width = "100%";
	projectScreenshot.style.height = "150%";
	projectScreenshot.style.borderRight = "none";
	projectScreenshot.style.borderLeft = "none";
	projectScreenshot.style.borderTop = "none";
	projectScreenshot.style.borderBottom = "0.5px solid white";

	// Add a "Play" button into the each game chicklet.
	let playLink = document.createElement("div");
	playLink.className = "play-link";
	playLink.style.cursor = "pointer";
	playLink.style.width = "2.8rem";
    playLink.onclick = () => {window.open(`/game_page?gameId=${games[index].id}`)};
	let playText = document.createElement("p");
	playText.style.letterSpacing = "1px";
	playText.style.marginTop = "7px";
	playText.innerHTML = "Play";

	let playDivider = document.createElement("div");
	playDivider.className = "playDivider";
	playDivider.style.marginTop = "-15px";
	playDivider.style.width = "100%";
	playDivider.style.height = "2px";
	playDivider.style.float = "left";
	// playDivider.style.background = "linear-gradient(to right, rgb(29, 13, 68) 5%, rgb(89, 38, 81) 15%, rgb(165, 63, 91) 35%, rgb(239, 89, 102) 55%, rgb(244, 124, 51) 75%, rgb(249, 160, 0))";
	playLink.appendChild(playText);
	playLink.appendChild(playDivider);

	cardContent.appendChild(cardTitle);
	cardContent.appendChild(playLink);

	card.appendChild(projectScreenshot);
	card.appendChild(cardContent);
	document.getElementById("projectsGroup16").appendChild(card);
}

// Add event listeners to the filter checkboxes
let filterCheckboxes = Array.from(document.querySelectorAll('.form-check-input'));
filterCheckboxes.forEach(checkbox => {
	if (checkbox.id == "themeToggle") {
	}
	else {
		checkbox.addEventListener('click', function(){
			applyFilters(this);
		});
	}

});

filterCheckboxes = filterCheckboxes.filter(checkbox => checkbox.id !== "themeToggle");

// console.log(filterCheckboxes);

//Default values
let ClassFilterValues = ["Iridium - 2025","Tungsten - 2024","Silver - 2023", "Copper - 2022", "Nickel - 2021"];
let GenreFilterValues = ["Arcade", "Adventure", "Simulation", "Trivia"];
let AgeFilterValues = ["Elementary", "Middle School", "High School"];
let DifficultyFilterValues = ["Easy", "Medium", "Hard"];

//Checked values
let checkedClassFilterValues = ["Iridium - 2025", "Tungsten - 2024","Silver - 2023", "Copper - 2022", "Nickel - 2021"];
let checkedGenreFilterValues = ["Arcade", "Adventure", "Simulation", "Trivia"];
let checkedAgeFilterValues = ["Elementary", "Middle School", "High School"];
let checkedDifficultyFilterValues = ["Easy", "Medium", "Hard"];

function applyFilters(checkbox) {
	const cards = document.querySelectorAll('#projectsGroup16 .card');

    const value = checkbox.value;
    const isChecked = checkbox.checked;
    console.log("Inside apply filters!!");
    console.log(value, isChecked);

    // Remove or add the value from/to the respective array based on the checkbox state
    if (ClassFilterValues.includes(value)) {
        if (isChecked) {
            if (!checkedClassFilterValues.includes(value)) {
                checkedClassFilterValues.push(value);
            }
        } else {
            checkedClassFilterValues = checkedClassFilterValues.filter(val => val !== value);
        }
    } else if (AgeFilterValues.includes(value)) {
        if (isChecked) {
            if (!checkedAgeFilterValues.includes(value)) {
                checkedAgeFilterValues.push(value);
            }
        } else {
            checkedAgeFilterValues = checkedAgeFilterValues.filter(val => val !== value);
        }
    } else if (GenreFilterValues.includes(value)) {
        if (isChecked) {
            if (!checkedGenreFilterValues.includes(value)) {
                checkedGenreFilterValues.push(value);
            }
        } else {
            checkedGenreFilterValues = checkedGenreFilterValues.filter(val => val !== value);
        }
    } else if (DifficultyFilterValues.includes(value)) {
        if (isChecked) {
            if (!checkedDifficultyFilterValues.includes(value)) {
                checkedDifficultyFilterValues.push(value);
            }
        } else {
            checkedDifficultyFilterValues = checkedDifficultyFilterValues.filter(val => val !== value);
        }
    }

    console.log({
        checkedClassFilterValues,
        checkedGenreFilterValues,
        checkedAgeFilterValues,
        checkedDifficultyFilterValues
    });



	// const filterCheckboxes = document.querySelectorAll('.form-check-input');
	// var classFilter = Array.from(document.querySelectorAll("input[type=checkbox][id$=Class]:checked"));
	// var classFilterValues = [];
	// if(classFilter.length==0) classFilterValues = ["Tungsten - 2024","Silver - 2023", "Copper - 2022", "Nickel - 2021"];
	// else classFilterValues = classFilter.map((element) => element.getAttribute("value"));

	// var genreFilter = Array.from(document.querySelectorAll("input[type=checkbox][id$=Genre]:checked"));
	// var genreFilterValues = [];
	// if(genreFilter.length==0) genreFilterValues = ["Arcade", "Adventure", "Simulation", "Trivia"];
	// else genreFilterValues = genreFilter.map((element) => {return element.getAttribute("value");});
	
	// var ageFilter = Array.from(document.querySelectorAll("input[type=checkbox][id$=Age]:checked"));
	// var ageFilterValues = [];
	// if(ageFilter.length==0) ageFilterValues = ["Elementary", "Middle School", "High School"];
	// else ageFilterValues = ageFilter.map((element) => element.getAttribute("value"));
	
	// var difficultyFilter = Array.from(document.querySelectorAll("input[type=checkbox][id$=Difficulty]:checked"));
	// var difficultyFilterValues = [];
	// if(difficultyFilter.length==0) difficultyFilterValues = ["Easy", "Medium", "Hard"];
	// else difficultyFilterValues = difficultyFilter.map((element) => element.getAttribute("value"));	

	cards.forEach(card => {
		const cardClass = card.getAttribute('game-class');
		const cardGenre = card.getAttribute('game-genre');
		const cardAge = card.getAttribute('game-age');
		const cardDifficulty = card.getAttribute('game-difficulty');
		if (checkedClassFilterValues.indexOf(cardClass) >-1 && checkedGenreFilterValues.indexOf(cardGenre) >-1 && checkedAgeFilterValues.indexOf(cardAge) >-1 && checkedDifficultyFilterValues.indexOf(cardDifficulty) >-1) {
			card.style.display = card.getAttribute('data-original-display');
		} else {
			card.style.display = 'none';
		}
	});
}

var gameData = [games[0], games[1], games[2]];
console.log(gameData);
const gameLinks = document.querySelectorAll('.container ul li a');
const video = document.querySelector('.container video');
const gameIcons = document.querySelectorAll(".game-icon");

// video.addEventListener("ended", () => {
// 	let currentIconIndex = -1;

// 	// Find the index of the currently colored icon
// 	for (let i = 0; i < gameIcons.length; i++) {
// 		if (!gameIcons[i].classList.contains("grayscale")) {
// 			currentIconIndex = i;
// 			break;
// 		}
// 	}

// 	// Add the bw class to the currently colored icon and remove it from the next icon
// 	gameIcons[currentIconIndex].classList.add("grayscale");
// 	gameIcons[(currentIconIndex + 1) % gameIcons.length].classList.remove("grayscale");

// 	gameLinks[currentIconIndex].classList.remove("active");
// 	gameLinks[(currentIconIndex + 1) % gameLinks.length].classList.add("active");

// 	// Update the video source and start playing the next video
// 	video.src = `./data/media/${gameData[(currentIconIndex + 1) % gameData.length].video}`;
// 	document.querySelector('.game-name').innerHTML = gameData[(currentIconIndex + 1) % gameData.length].title.toUpperCase();
// 	document.querySelector('.game-description').innerHTML = gameData[(currentIconIndex + 1) % gameData.length].description;
// 	video.play();
// });

document.addEventListener("DOMContentLoaded", function () {
	const themeToggle = document.getElementById("themeToggle");
	const navbar = document.querySelector(".navbar");
	const body = document.querySelector("body");
	const footer = document.querySelector("footer");
	const themeIcon = document.getElementById("themeIcon");

	let darkMode = false;

	themeToggle.addEventListener("change", () => {
		darkMode = !darkMode;
		if (darkMode) {
			body.classList.remove("light-mode");
			body.classList.add("dark-mode");
			navbar.style.backgroundColor = "#2f2344";
			body.style.backgroundColor = "#140022";
			footer.style.backgroundColor = "#2f2344";
			themeIcon.textContent = "nights_stay";
		} else {
			body.classList.remove("dark-mode");
			body.classList.add("light-mode");
			navbar.style.backgroundColor = "#41464b";
			body.style.backgroundColor = "#ffffff";
			footer.style.backgroundColor = "#41464b";
			themeIcon.textContent = "wb_sunny";
		}
	});
	document.getElementById("themeToggle").click();
	document.getElementById("sortButton").click();
});

// let sortAscending = true;
// function toggleSort() {
// 	const projectGroups = document.querySelectorAll("#projectCards .row");
// 	const sortIcon = document.getElementById("sortIcon");

// 	projectGroups.forEach(group => {
// 		const sortedGroup = Array.from(group.children).sort((a, b) => {
// 			const aName = a.querySelector(".card-title").innerText;
// 			const bName = b.querySelector(".card-title").innerText;

// 			if (sortAscending) {
// 				return aName.localeCompare(bName);
// 			} else {
// 				return bName.localeCompare(aName);
// 			}
// 		});

// 		group.innerHTML = "";
// 		sortedGroup.forEach(card => {
// 			group.appendChild(card);
// 		});
// 	});

// 	if (sortAscending) {
// 		sortIcon.classList.replace("bi-chevron-down", "bi-chevron-up");
// 	} else {
// 		sortIcon.classList.replace("bi-chevron-up", "bi-chevron-down");
// 	}

// 	sortAscending = !sortAscending;
// }
// ============================================================================================================================================================

// function passwordProtecion() {
// 	let content = document.getElementById("projectCards");
// 	content.style.display = "none";

// 	let passwordSection = document.getElementById('passwordProtection');
// 	let incorrectPassword = document.getElementById('incorrectPasswordError');
// 	incorrectPassword.style.display = "none";

// 	document.getElementById('passwordSubmitBtn').addEventListener('click', () => {
// 		if (document.getElementById('passwordInput').value == "LBn6Hawq2NTApQ9") {
// 			content.style.display = "block";
// 			passwordSection.style.display = "none";
// 			incorrectPassword.style.display = "none";
// 		} else {
// 			incorrectPassword.style.display = "block";
// 		}
// 	});
// }


// Resets the form when opened and also handles the submit button
// function handleBugBtn(projectID) {
// 	let currentDate = new Date().toISOString();

// 	document.getElementById('projectID').value = projectID;
// 	document.getElementById('currentDate').value = currentDate.substr(0, 10);
// 	document.getElementById('environmentInfo').value = navigator.userAgent;

// 	// clear form
// 	document.getElementById('bugSummaryTA').value = "";
// 	document.getElementById('actionPerformedTA').value = "";
// 	document.getElementById('expectedResultTA').value = "";
// 	document.getElementById('actualResultTA').value = "";
// 	document.getElementById('errorMessageTA').value = "";

// 	// submit form
// 	document.getElementById('submitBtn').addEventListener('click', () => {
// 		// Add a new document with a generated id.
// 		db.collection(projectID).add({
// 			projectID: projectID,
// 			date: currentDate,
// 			reporterName: document.getElementById('reporterName').value,
// 			environment: navigator.userAgent,
// 			bugSummary: document.getElementById('bugSummaryTA').value,
// 			actionPerformed: document.getElementById('actionPerformedTA').value,
// 			expectedResult: document.getElementById('expectedResultTA').value,
// 			actualResult: document.getElementById('actualResultTA').value,
// 			errorMessage: document.getElementById('errorMessageTA').value
// 		})
// 			.then(() => {
// 				var bugReportModal = document.getElementById('bugReportModal');
// 				var modal = bootstrap.Modal.getInstance(bugReportModal); // Returns a Bootstrap modal instance
// 				modal.toggle();

// 				var toastElList = [].slice.call(document.querySelectorAll('.toast'))
// 				var toastList = toastElList.map(function (toastEl) {
// 					return new bootstrap.Toast(toastEl, {})
// 				});

// 				toastList[0].show();
// 			})
// 			.catch((error) => {
// 				console.error("Error adding document: ", error);
// 			})
// 	})
// }
