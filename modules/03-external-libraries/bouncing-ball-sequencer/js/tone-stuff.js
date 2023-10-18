// Make a synth in Tone.js and connect to speakers
// We will use two synths - one for each axis x and y

function restartAudio() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext);
    const context = new Tone.Context(audioCtx);
    console.log('Restarting audio context.')
}

const synthParams = {
    oscillatorType: 'triangle',
    partials: 0,
    envelope: {
        attack: 0.001,
        decay: 0.001,
        sustain: 0.3,
        release: 0.3
    },
    filter: 3000
}

// A PolySynth can play multiple notes at once, aka is polyphonic
const synth = new Tone.PolySynth(synthParams)
// A audio filter to control the tone
const filter = new Tone.Filter(8000, "lowpass").toMaster()
// Connect the synth to the filter which is connected to the master output
synth.connect(filter)

// An audio feedback delay effect
const delayParams = {
    delayTime: 0.5,
    maxDelay: 10.1,
    feedback: 0.0,
    wet: 0.0
}
const delay = new Tone.FeedbackDelay(delayParams).toMaster()
// Connect the filter to the delay as the synth is already going to filter
filter.connect(delay)



// Start with the volume down 12 db to avoid distortion
let dim = -20
Tone.Master.volume.value = dim;

// And some overall compression to keep the levels in check
const masterCompressor = new Tone.Compressor({
    "threshold": (dim - 6),
    "ratio": 4,
    "attack": 0.1,
    "release": 0.5
});

const masterLimiter = new Tone.Compressor({
    "threshold": -3,
    "ratio": 20,
    "attack": 0.01,
    "release": 0.2
});
Tone.Master.chain(masterCompressor, masterLimiter)


