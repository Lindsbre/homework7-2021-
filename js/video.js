var video = document.querySelector("#player1")

var volume;

window.addEventListener('load', function(){
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	var curSpeed = video.playbackRate;
	video.playbackRate = 0.95 * (curSpeed);
	console.log("Video slowed by 5%");
});

document.querySelector("#faster").addEventListener("click", function() {
	var curSpeed = video.playbackRate;
	video.playbackRate = 1.05 * (curSpeed);
	console.log("Playback speed faster by 5%");
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 15 > video.duration) {
		video.currentTime = 0
	} else {
		video.currentTime += 15
	}
	console.log("Current video time is: " + video.currentTime);
	video.play();
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		console.log("Video unmuted");
	} else {
		video.muted = true;
		console.log("Video muted");
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value / 100
	console.log("The current video volume is " + video.volume);
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Video style set to 'Old School'");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Video style set to 'Original'");
});
