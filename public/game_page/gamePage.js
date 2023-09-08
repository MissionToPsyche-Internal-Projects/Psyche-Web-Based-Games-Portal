import games from "../data/games.js";

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
});


// Parse the game ID from the URL
const urlSearchParams = new URLSearchParams(window.location.search);
const gameId = urlSearchParams.get('gameId');

// Find the current game and suggested games from the `games` array
const currentGame = games.find(game => game.id === gameId);
const suggestableGames = games.filter(game => game.id !== gameId);

// Set the title of the page (the game page) based on the game clicked by the user.
document.title = currentGame.title;

// Set the game display
document.getElementById('game-iframe').src = currentGame.src;
document.getElementById('game-name').innerText = currentGame.title;
document.getElementById('game-description').innerText = currentGame.description!=''?currentGame.description:"Psyche - Journey to Metal World";;
document.querySelector('#game_info_class span').innerHTML = currentGame.class!=''?currentGame.class:"-";
document.querySelector('#game_info_genre span').innerHTML = currentGame.genre!=''?currentGame.genre:"-";
document.querySelector('#game_info_age span').innerHTML = currentGame.age!=''?currentGame.age:"-";
document.querySelector('#game_info_difficulty span').innerHTML = currentGame.difficulty!=''?currentGame.difficulty:"-";
document.querySelector('#game_info_credits span').innerHTML = currentGame.credits!=''?currentGame.credits:"-";
document.querySelector('#note_message').style.display = currentGame.class=="Nickel - 2021" || currentGame.class=="Copper - 2022" ? "block" : "None";
// Add more data to the game display if needed

// Create the suggested games items
function createSuggestedGameItems(arr) {
    // Make a copy of the original array
    var numberOfsuggestions = 3;
    const shuffledArray = arr.slice();
    
    // Fisher-Yates shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    
    var randomlySelectedSuggestions = shuffledArray.slice(0, numberOfsuggestions);
    for(var i = 0; i<randomlySelectedSuggestions.length; i++){
        var gameCard = createGameCard(randomlySelectedSuggestions[i]);
        document.getElementById("suggested_games").appendChild(gameCard);
    }
}

function createGameCard(game) {
    let card = document.createElement("div");
    card.className = "card";
    card.setAttribute("game-class", game.class);
    card.setAttribute("game-genre", game.genre);
    card.setAttribute("game-age", game.age);
    card.setAttribute("game-difficulty", game.difficulty);
    card.classList.add(
        "border-0",
        "col-2",
        "p-0",
        "mb-5",
        "card"
    );

    let cardContent = document.createElement("div");
    cardContent.classList.add("card-body");

    let cardTitle = document.createElement("h6");
    cardTitle.innerHTML = game.id.split("-").join(" ").toUpperCase();
    cardTitle.classList.add("card-title");

    let projectScreenshot = document.createElement("img");
    projectScreenshot.classList.add("card-img-top");
    projectScreenshot.src = `../images/${game.id}.png`;
    projectScreenshot.onerror = () => projectScreenshot.src = '../images/error.png'
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
    playLink.onclick = () => {window.open(`?gameId=${game.id}`)};
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
	playDivider.style.background = "linear-gradient(to right, rgb(29, 13, 68) 5%, rgb(89, 38, 81) 15%, rgb(165, 63, 91) 35%, rgb(239, 89, 102) 55%, rgb(244, 124, 51) 75%, rgb(249, 160, 0))";
    playLink.appendChild(playText);
    playLink.appendChild(playDivider);

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(playLink);

    card.appendChild(projectScreenshot);
    card.appendChild(cardContent);

    return card;
}
createSuggestedGameItems(suggestableGames);
// var multipleCardCarousel = document.querySelector("#carouselExampleControls");
// if (window.matchMedia("(min-width: 768px)").matches) {
//     var carousel = new bootstrap.Carousel(multipleCardCarousel, {
//         interval: false,
//     });
//     var carouselWidth = $(".carousel-inner")[0].scrollWidth;
//     var cardWidth = $(".carousel-item").width();
//     var scrollPosition = 0;
//     $("#carouselExampleControls .carousel-control-next").on("click", function () {
//         if (scrollPosition < carouselWidth - cardWidth * 4) {
//             scrollPosition += cardWidth;
//             $("#carouselExampleControls .carousel-inner").animate(
//                 { scrollLeft: scrollPosition },
//                 600
//             );
//         }
//     });
//     $("#carouselExampleControls .carousel-control-prev").on("click", function () {
//         if (scrollPosition > 0) {
//             scrollPosition -= cardWidth;
//             $("#carouselExampleControls .carousel-inner").animate(
//                 { scrollLeft: scrollPosition },
//                 600
//             );
//         }
//     });
// } else {
//     $(multipleCardCarousel).addClass("slide");
// }

const gameIframe = document.getElementById("game-iframe");
const fullscreenButton = document.getElementById("fullscreen-button");
let isFullscreen = false;

function toggleFullscreen(elem) {
    if (!isFullscreen) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

function adjustIframeDimensions() {
    if (isFullscreen) {
        gameIframe.style.width = '100%';
        gameIframe.style.height = '100%';
    } else {
        gameIframe.style.width = '100%';
        gameIframe.style.height = '400px';
    }
}

function fullscreenChangeHandler() {
    isFullscreen = !isFullscreen;
    adjustIframeDimensions();
}

fullscreenButton.addEventListener("click", () => toggleFullscreen(gameIframe));
document.addEventListener('fullscreenchange', fullscreenChangeHandler);
document.addEventListener('webkitfullscreenchange', fullscreenChangeHandler);
document.addEventListener('mozfullscreenchange', fullscreenChangeHandler);
document.addEventListener('MSFullscreenChange', fullscreenChangeHandler);
