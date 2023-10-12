// A GUI using dat.gui to control ball color and speed, and background color
const gui = new dat.gui.GUI({autoPlace: false})
const guiContainer = document.getElementById("gui-container")
guiContainer.append(gui.domElement)

gui.addFolder('Ball Adjustments') // adds a section with heading
gui.add(ball, 'xSpeed', 0.0, 20.0, 1.0) // dat.GUI.add takes an object as it's first argument
    .onChange(value => ball.xSpeed = value) // callback on change
gui.add(ball, 'ySpeed', 0.0, 20.0, 1.0)
    .onChange(value => ball.ySpeed = value)
gui.add(ball, 'tempo', 0.1, 4.0, 0.05)
    .onChange(value => ball.tempo = value)
gui.addColor(ball, 'col', 0, 255, 1)
    .onChange(value => ball.col = value)

gui.addFolder('Background Color')
gui.addColor(backgroundColor, 'col', 0, 255, 1)
    .onChange(value => backgroundColor.col = value)

gui.addFolder('Synth Controls')
gui.add({oscillatorType: 1}, 'oscillatorType', 1, 4, 1)
    .onChange(value => {
        // from https://tonejs.github.io/docs/14.7.77/PolySynth.html
        let osc = synthParams.oscillator[value - 1]
        synth.set({ oscillator: { type: osc } })
    })
gui.add({ filter: 3000 }, 'filter', 50, 10000, 10)
    .onChange(value => filter.frequency.value = value )
gui.add(synthParams.envelope, 'attack', 0.001, 2.5, 0.01)
    .onChange(value => {
        // from https://tonejs.github.io/docs/14.7.77/PolySynth.html
        synth.set({ envelope: { attack: value }})
    })
gui.add(synthParams.envelope, 'release', 0.05, 10.0, 0.1)
    .onChange(value => {
        synth.set({ envelope: { release: value } })
    })
gui.add({volume: 0.0}, 'volume', -25, 0, 0.5)
    .onChange(value => Tone.Master.volume.value = dim + value ) // dim from tone-stuff.js

gui.addFolder('Audio Delay Parameters')
gui.add({mix: 0.0}, 'mix', 0.0, 1.0, 0.05)
    .onChange(value => {
        delay.wet.value = value
    })
gui.add({ delayTime: 0.0 }, 'delayTime', 0.0, 10.0, 0.05)
    .onChange(value => {
        delay.delayTime.value = value
    })
gui.add({ feedback: 0.0 }, 'feedback', 0.0, 1.0, 0.05)
    .onChange(value => {
        delay.feedback.value = value
    })