// Instantiate our timeline, but pause it and wait for the button click...
const tl = gsap.timeline().pause()

tl.to("#line1", { opacity: 1, duration: 2, onStart: hideButton })
tl.to("#line1", { opacity: 0, duration: 0.2, delay: 1 })
tl.to("#line2", { opacity: 1, duration: 2 })
tl.to("#line2", { opacity: 0, duration: 0.2, delay: 1 })
tl.to("#line3", { opacity: 1, duration: 2 })
tl.to("#line3", { opacity: 0, duration: 2 })

// Tone.js stuff, also waiting for the button click...
let reverb = new Tone.Reverb({ wet: 0.8, decay: 2, preDelay: 0.4 }).toDestination()
let synth = new Tone.AMSynth().toDestination().connect(reverb)
let loop = new Tone.Loop(playLoop, "4n")

// A button to kick things off...
const startAudioButton = document.getElementById('startAudio')
startAudioButton.addEventListener('click', () => { // anonymous callback function
    Tone.Transport.start();
    loop.start()
    tl.resume()
})

let notes = [
    ["D3", "F#3", "B3", "A3"],
    ["E3", "G3", "A3", "E3"],
    ["B3", "C3", "G3", "C4"],
]
function playLoop() {
    // Tone.js counts time in measures and beats like 0:0:0.000
    // We can use this fact to loop through an array of notes...
    let position = Tone.Transport.position.split(":")
    let measure = parseInt(position[0])
    let beat = parseInt(position[1])

    console.log(`measure: ${measure}, beat: ${beat}`)

    if (measure < notes.length && beat < notes[measure].length) {
        let theNote = notes[measure][beat]
        synth.triggerAttackRelease(theNote, "4n")
    } else {
        loop.stop() // ... and stop when we want
    }
}

function hideButton() {
    gsap.to("#startAudio", { opacity: 0, duration: 0.2 })
}


