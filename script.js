const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
	isPlaying = true;
	music.play();
}

// pause
function pauseSong() {
	isPlaying = false;
	music.pause();
}
// Play or pause
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));
