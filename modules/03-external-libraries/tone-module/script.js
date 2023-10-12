// Tone.js stuff, also waiting for the button click...
let synth = new Tone.AMSynth().toDestination()


// A button to kick things off...
const startAudioButton = document.getElementById('startAudio')
startAudioButton.addEventListener('click', () => { // anonymous callback function
    Tone.Transport.start();
    synth.triggerAttackRelease("C4", "4n")
})