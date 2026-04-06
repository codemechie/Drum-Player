const drumPad = document.querySelectorAll('.drum-pad');


drumPad.forEach(pad => {
    pad.addEventListener('click', () => {
        const audio = pad.querySelector('.clip');
        audio.currentTime = 0;
        audio.play();
        const display = document.getElementById('display');
        display.innerText = `You hit a ${audio.id} key!`
    })
    document.addEventListener('keydown', (e) => {
        const key = e.key.toUpperCase();
        if (['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'].includes(key)) {
            const audio = document.getElementById(key);
            audio.currentTime = 0;
            audio.play()
        }
    });
})

