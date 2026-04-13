// Player.js - A simple music player

class MusicPlayer {
    constructor(tracks) {
        this.tracks = tracks;
        this.currentTrackIndex = 0;
        this.isPlaying = false;
        this.audio = new Audio();
        this.updateTrack();
    }

    updateTrack() {
        this.audio.src = this.tracks[this.currentTrackIndex].source;
        this.audio.load();
    }

    play() {
        this.audio.play();
        this.isPlaying = true;
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
    }

    next() {
        this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
        this.updateTrack();
        if (this.isPlaying) this.play();
    }

    previous() {
        this.currentTrackIndex = (this.currentTrackIndex - 1 + this.tracks.length) % this.tracks.length;
        this.updateTrack();
        if (this.isPlaying) this.play();
    }

    updateProgressBar(progressBar) {
        progressBar.value = (this.audio.currentTime / this.audio.duration) * 100;
    }

    displayLyrics(lyricsElement) {
        lyricsElement.innerText = this.tracks[this.currentTrackIndex].lyrics;
    }
}

// Example usage:
const tracks = [
    { source: 'track1.mp3', lyrics: 'Lyrics for track 1' },
    { source: 'track2.mp3', lyrics: 'Lyrics for track 2' }, 
    // Add more tracks here
];

const player = new MusicPlayer(tracks);

// HTML integration example:
// <button onclick='player.play()'>Play</button>
// <button onclick='player.pause()'>Pause</button>
// <button onclick='player.next()'>Next</button>
// <button onclick='player.previous()'>Previous</button>
// <progress id="progressBar"></progress>
// <div id="lyrics"></div>
// setInterval(() => player.updateProgressBar(document.getElementById('progressBar')), 1000);
// player.displayLyrics(document.getElementById('lyrics'));