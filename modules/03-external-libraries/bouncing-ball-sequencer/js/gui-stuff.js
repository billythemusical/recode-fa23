// A GUI using dat.gui to control ball color and speed, and background color
const gui = new lil.GUI({ autoPlace: false })
const guiContainer = document.getElementById("gui-container")
guiContainer.append(gui.domElement)

const ballAdjustments = gui.addFolder('Ball Adjustments') // adds a section with heading
ballAdjustments.add(ball, 'xSpeed', 1, 20, 1) // dat.GUI.add takes an object as it's first argument
    .onFinishChange(value => ball.xSpeed = value) // callback on change
ballAdjustments.add(ball, 'ySpeed', 0, 20, 1)
    .onFinishChange(value => ball.ySpeed = value)
ballAdjustments.add(ball, 'tempo', 0.1, 4.0, 0.05)
    .onChange(value => ball.tempo = value)
ballAdjustments.addColor(ball, 'col')
    .onChange(value => ball.col = value)

const bkgd = gui.addFolder('Background')
bkgd.addColor(backgroundColor, 'col')
    .onChange(value => backgroundColor.col = value)

// global variables for tracking osc type and partials
let oscType = synthParams.oscillatorType
let oscPartials = synthParams.partials
const synthControls = gui.addFolder('Synth Parameters')
synthControls.add(synthParams, 'oscillatorType', ['triangle', 'square', 'sawtooth', 'sine'])
    .onChange(value => {
        oscType = value
        // from https://tonejs.github.io/docs/14.7.77/PolySynth.html
        synth.set({ oscillator: { type: (oscType + oscPartials) } })
    })
synthControls.add(synthParams, 'partials', 0, 32, 1)
    .onChange(value => {
        if (value) oscPartials = value
        else oscPartials = ''
        synth.set({ oscillator: { type: (oscType + oscPartials) } })
    })

synthControls.add({ filter: 3000 }, 'filter', 50, 20000, 10)
    .onChange(value => filter.frequency.value = value)
synthControls.add(synthParams.envelope, 'attack', 0.001, 2.5, 0.01)
    .onChange(value => {
        // from https://tonejs.github.io/docs/14.7.77/PolySynth.html
        synth.set({ envelope: { attack: value } })
    })
synthControls.add(synthParams.envelope, 'release', 0.05, 10.0, 0.1)
    .onChange(value => {
        synth.set({ envelope: { release: value } })
    })
synthControls.add({ volume: 0.0 }, 'volume', -25, 0, 0.5)
    .onChange(value => Tone.Master.volume.value = dim + value) // dim from tone-stuff.js

const audioDelayParameters = gui.addFolder('Audio Delay Parameters')
audioDelayParameters.add({ mix: 0.0 }, 'mix', 0.0, 1.0, 0.05)
    .onChange(value => {
        delay.wet.value = value
    })
audioDelayParameters.add({ delayTime: 1.0 }, 'delayTime', 0.0, 10.0, 0.05)
    .onChange(value => {
        delay.delayTime.value = value
    })
audioDelayParameters.add({ feedback: 0.0 }, 'feedback', 0.0, 1.0, 0.05)
    .onChange(value => {
        delay.feedback.value = value
    })

// Add save/load settings
let preset = {}
let saveLoad = {
    savePreset() {
        preset = gui.save()
        console.log(preset)
        loadButton.enable()
        // localStorage.setItem("BBS", preset)
    },
    loadPreset() {
        gui.load(preset)
    }
}
gui.add(saveLoad, 'savePreset')


const loadButton = gui.add(saveLoad, 'loadPreset')
    .disable();