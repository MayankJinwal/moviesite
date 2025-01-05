const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const backwardBtn = document.getElementById('backwardBtn');
const forwardBtn = document.getElementById('forwardBtn');
const seekBar = document.getElementById('seekBar');
const volumeBar = document.getElementById('volumeBar');
const fullscreenBtn = document.getElementById('fullscreenBtn');

// Play and Pause functionality
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.innerHTML = '<img src="img/pause.svg" alt="Pause">';
    } else {
        video.pause();
        playPauseBtn.innerHTML = '<img src="img/play.svg" alt="Play">';
    }
});

// Forward 10 seconds
forwardBtn.addEventListener('click', () => {
    video.currentTime += 10;
});

// Backward 10 seconds
backwardBtn.addEventListener('click', () => {
    video.currentTime -= 10;
});

// Update seek bar as video plays
video.addEventListener('timeupdate', () => {
    const value = (video.currentTime / video.duration) * 100;
    seekBar.value = value;
});

// Seek functionality
seekBar.addEventListener('input', () => {
    const time = (seekBar.value / 100) * video.duration;
    video.currentTime = time;
});

// Volume control
volumeBar.addEventListener('input', () => {
    video.volume = volumeBar.value;
});

// Full screen toggle
fullscreenBtn.addEventListener('click', () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    }
});
