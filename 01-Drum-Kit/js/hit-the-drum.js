function playSound(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if(!audio){
        return; // if no audio is associated with a pressed key, then exit.
    }

    audio.currentTime = 0; // we don't want to wait for the sound to finish every time we press a key
    audio.play();

    key.classList.add('playing');
}

window.addEventListener('keydown', playSound);