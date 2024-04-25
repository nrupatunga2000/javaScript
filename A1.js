document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audioPlayer");
    const previous = document.getElementById("prevs");
    const play = document.getElementById("play");
    const pause = document.getElementById("pause");
    const next = document.getElementById("next");

    //this is to create an array of songs to create a playlist of songs
    const audioSources = [
        "Kambada.m4a",
        "yava_mohana.opus",
        "yehasivadia.m4a"
    ];

    
    let currentTrackIndex = 0;

    function playAudio() {
        audioPlayer.play();
    }

    function pauseAudio() {
        audioPlayer.pause();
    }

    function nextAudio() {
        currentTrackIndex = (currentTrackIndex + 1) % audioSources.length;
        audioPlayer.src = audioSources[currentTrackIndex];
        audioPlayer.play();
    }

    function previousAudio() {
        currentTrackIndex = (currentTrackIndex - 1 + audioSources.length) % audioSources.length;
        audioPlayer.src = audioSources[currentTrackIndex];
        audioPlayer.play();
    }

    play.addEventListener("click", playAudio);
    pause.addEventListener("click", pauseAudio);
    next.addEventListener("click", nextAudio);
    previous.addEventListener("click", previousAudio);
});
