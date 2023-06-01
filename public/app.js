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

// Project List for all Web Based Projects (Games and WebXR)
// src/data/games.js
const games = [
	{
		id: 'jolts-journey',
		title: 'JOLTS JOURNEY',
		thumbnail: 'joltsl_journey.jpg',
		difficulty: 'Easy',
		genre: 'Arcade',
		age: 'Elementary',
		class: 'Nickel - 2022',
		gtype: 'nickel',
		video: 'jolts.mp4',
	},
	{
		id: 'return-from-psyche',
		title: 'RETURN FROM PSYCHE',
		thumbnail: 'return_from_psyche.jpg',
		difficulty: 'Medium',
		genre: 'Adventure',
		age: 'Middle School',
		class: 'Copper - 2022',
		gtype: 'copper',
		video: 'return_from_psyche.mp4'
	},
	{
		id: 'survive-to-psyche',
		title: 'SURVIVE TO PSYCHE',
		thumbnail: 'survive_to_psyche.jpg',
		difficulty: 'Medium',
		genre: 'Adventure',
		age: 'Middle School',
		class: 'Nickel - 2022',
		gtype: 'nickel',
		video: 'survive_to_psyche.mov'
	},
	{
		id: 'passage-to-psyche',
		title: 'PASSAGE TO PSYCHE',
		thumbnail: 'passage_to_psyche.jpg',
		difficulty: 'Medium',
		genre: 'Arcade',
		age: 'Middle School',
		class: 'Nickel - 2022',
		gtype: 'nickel',
		video: '',
	},
	{
		id: 'jump-to-psyche',
		title: 'JUMP TO PSYCHE',
		thumbnail: 'jump_to_psyche.jpg',
		difficulty: 'Hard',
		genre: 'Knowledge Quiz',
		age: 'Middle School',
		class: 'Nickel - 2022',
		gtype: 'nickel',
		video: '',
	},
	{
		id: 'psyche-driller',
		title: 'PSYCHE DRILLER',
		thumbnail: 'psyche_driller.jpg',
		difficulty: 'Hard',
		genre: 'Adventure',
		age: 'High',
		class: 'Nickel - 2022',
		gtype: 'nickel',
		video: '',
	},
	{
		id: 'journey-to-psyche',
		title: 'JOURNEY TO PSYCHE',
		thumbnail: 'journey_to_psyche.jpg',
		difficulty: 'Medium',
		genre: 'Trivia',
		age: 'Middle School',
		class: 'Nickel - 2022',
		gtype: 'nickel',
		video: '',
	},
	{
		id: 'nasa-psyche-mission',
		title: 'NASA PSYCHE MISSION',
		thumbnail: 'nasa_psyche_mission.jpg',
		difficulty: 'Easy',
		genre: 'Arcade',
		age: 'Elementary',
		class: 'Nickel - 2022',
		gtype: 'nickel',
		video: '',
	},
	// Add more games as needed
];

// Creates the cards for all projects with two buttons
for (let index = 0; index < games.length; index++) {
	let card = document.createElement("div");
	card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.4)";
	card.className = "card";
	card.setAttribute("game-class", games[index].class);
	card.setAttribute("game-genre", games[index].genre);
	card.setAttribute("game-age", games[index].age);
	card.setAttribute("game-difficulty", games[index].difficulty);
	card.classList.add(
		// "border",
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
	// cardTitle.style.color = "#908a9c";

	let projectScreenshot = document.createElement("img");
	projectScreenshot.classList.add("card-img-top");
	projectScreenshot.src = `images/${games[index].id}.png`;
	projectScreenshot.onerror = () => projectScreenshot.src = 'images/error.png'
	projectScreenshot.style.width = "100%";
	projectScreenshot.style.height = "150%";
	projectScreenshot.style.borderRight = "none";
	projectScreenshot.style.borderLeft = "none";
	projectScreenshot.style.borderTop = "none";
	projectScreenshot.style.borderBottom = "0.5px solid white";

	let btnGroup = document.createElement("div");
	btnGroup.className = "btn-group";
	btnGroup.setAttribute("role", "group");

	// Add a "Report a Bug" button into the each game chicklet.

	// let bugBtn = document.createElement("button");
	// bugBtn.setAttribute("type", "button");
	// bugBtn.setAttribute("data-bs-toggle", "modal");
	// bugBtn.setAttribute("data-bs-target", "#bugReportModal");
	// bugBtn.setAttribute("title", "Report a bug");
	// bugBtn.classList.add("btn","btn-sm", "btn-danger", "rounded", "ms-5", "hidden");
	// bugBtn.onclick = handleBugBtn.bind(this, games[index].id);

	// let bugText = document.createElement("span");
	// bugText.classList.add("bug-text");
	// bugText.innerHTML = "Report a Bug";

	// bugBtn.appendChild(bugText);


	// Add a "Play" button into the each game chicklet.
	let playLink = document.createElement("div");
	playLink.className = "play-link";
	playLink.style.cursor = "pointer";
	playLink.onclick = () => {
		if (games[index].id == "journey-to-psyche") {
			window.open(`/${games[index].id}/journey_to_psyche.html`)
		} else if (games[index] == "15I") {
			window.open(`/${games[index].id}/src`)
		} else {
			window.open(`/public/game_page?gameId=${games[index].id}`)
		}
	};
	let playText = document.createElement("p");
	// playText.style.fontSize = "15px";
	playText.style.letterSpacing = "1px";
	playText.style.marginTop = "7px";
	playText.innerHTML = "Play";

	let playDivider1 = document.createElement("div");
	playDivider1.className = "divider1"
	playDivider1.style.marginTop = "-15px";
	playDivider1.style.width = "100%";
	playDivider1.style.height = "2px";
	playDivider1.style.float = "left";
	playDivider1.style.background = "linear-gradient(to right, rgb(29, 13, 68), rgb(89, 38, 81) 30%, rgb(165, 63, 91) 50%, rgb(239, 89, 102) 70%, rgb(244, 124, 51) 90%, rgb(249, 160, 0))";

	// let playDivider2 = document.createElement("div");
	// playDivider2.className = "divider2"
	// playDivider2.style.marginTop = "-15px";
	// playDivider2.style.width = "100%";
	// playDivider2.style.height = "2px";
	// playDivider2.style.background = "linear-gradient(to right, rgb(29, 13, 68), rgb(89, 38, 81) 30%, rgb(165, 63, 91) 50%, rgb(239, 89, 102) 70%, rgb(244, 124, 51) 90%, rgb(249, 160, 0))";

	playLink.appendChild(playText);
	playLink.appendChild(playDivider1);
	// playLink.appendChild(playDivider2);



	btnGroup.appendChild(playLink);
	// btnGroup.appendChild(bugBtn);

	cardContent.appendChild(cardTitle);
	cardContent.appendChild(btnGroup);

	card.appendChild(projectScreenshot);
	card.appendChild(cardContent);
	document.getElementById("projectsGroup16").appendChild(card);
}

// Resets the form when opened and also handles the submit button
function handleBugBtn(projectID) {
	let currentDate = new Date().toISOString();

	document.getElementById('projectID').value = projectID;
	document.getElementById('currentDate').value = currentDate.substr(0, 10);
	document.getElementById('environmentInfo').value = navigator.userAgent;

	// clear form
	document.getElementById('bugSummaryTA').value = "";
	document.getElementById('actionPerformedTA').value = "";
	document.getElementById('expectedResultTA').value = "";
	document.getElementById('actualResultTA').value = "";
	document.getElementById('errorMessageTA').value = "";

	// submit form
	document.getElementById('submitBtn').addEventListener('click', () => {
		// Add a new document with a generated id.
		db.collection(projectID).add({
			projectID: projectID,
			date: currentDate,
			reporterName: document.getElementById('reporterName').value,
			environment: navigator.userAgent,
			bugSummary: document.getElementById('bugSummaryTA').value,
			actionPerformed: document.getElementById('actionPerformedTA').value,
			expectedResult: document.getElementById('expectedResultTA').value,
			actualResult: document.getElementById('actualResultTA').value,
			errorMessage: document.getElementById('errorMessageTA').value
		})
			.then(() => {
				var bugReportModal = document.getElementById('bugReportModal');
				var modal = bootstrap.Modal.getInstance(bugReportModal); // Returns a Bootstrap modal instance
				modal.toggle();

				var toastElList = [].slice.call(document.querySelectorAll('.toast'))
				var toastList = toastElList.map(function (toastEl) {
					return new bootstrap.Toast(toastEl, {})
				});

				toastList[0].show();
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			})
	})
}

// Add event listeners to the filter checkboxes
const filterCheckboxes = document.querySelectorAll('.form-check-input');
filterCheckboxes.forEach(checkbox => {
	if (checkbox.id == "themeToggle") {

	}
	else {
		checkbox.addEventListener('change', applyFilters);
	}

});

function applyFilters() {
	const cards = document.querySelectorAll('#projectsGroup16 .card');
	const anyFilterChecked = document.querySelector('#filterAccordion input[type=checkbox]:checked') !== null;
	cards.forEach(card => {
		const cardClass = card.getAttribute('game-class');
		const cardGenre = card.getAttribute('game-genre');

		const cardAge = card.getAttribute('game-age');
		const cardDifficulty = card.getAttribute('game-difficulty');

		const classFilter = document.querySelector(`input[type=checkbox][id$=Class][value="${cardClass}"]:checked`);
		const genreFilter = document.querySelector(`input[type=checkbox][id$=Genre][value="${cardGenre}"]:checked`);
		const ageFilter = document.querySelector(`input[type=checkbox][id$=Age][value="${cardAge}"]:checked`);
		const difficultyFilter = document.querySelector(`input[type=checkbox][id$=Difficulty][value="${cardDifficulty}"]:checked`);



		if (classFilter || genreFilter || ageFilter || difficultyFilter || !anyFilterChecked) {
			card.style.display = card.getAttribute('data-original-display');
		} else {
			card.style.display = 'none';
		}
	});
}
