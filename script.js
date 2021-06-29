const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
	isPlaying = true;
	playBtn.classList.replace("fa-play", "fa-pause");
	playBtn.setAttribute("title", "Pause");
	music.play();
}

// pause
function pauseSong() {
	isPlaying = false;
	playBtn.classList.replace("fa-pause", "fa-play");
	playBtn.setAttribute("title", "Play");
	music.pause();
}
// Play or pause
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));
