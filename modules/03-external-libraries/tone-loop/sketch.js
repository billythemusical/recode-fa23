/* 

Using Tone.js v13.0.1 - https://cdnjs.cloudflare.com/ajax/libs/tone/13.0.1/Tone.min.js

*/

// example from https://tonejs.github.io/docs/r12/AMSynth#:~:text=%7D-,EXAMPLE,-var%20synth%20%3D
//create a synth and connect it to the main output (your speakers)
const synth = new Tone.AMSynth().toDestination();

//play a middle 'C' for the duration of an 8th note
synth.oscillator.type = 'square'
// synth.triggerAttackRelease("C4", "4n");

let k = "press a key"
let pausePlayback = true

function setup() {
    createCanvas(400, 400);
    textAlign(CENTER);
    textSize(36);
    playNote();
}

function draw() {
    background(220);
    text(k, width * 0.5, height * 0.5)
}

let index = 0
let notes = ["C4", "G4", "A4", "E4"]


function playNote() {
    if (pausePlayback == false) synth.triggerAttackRelease(notes[index], "4n")
    index++
    index = index % 4
    // console.log(index)
    setTimeout(playNote, 500)
}

function keyPressed(key) {
    k = key.keyCode

    if (k == 32) {
        pausePlayback = !pausePlayback
        index = 0
        return
    }

    console.log(k)

    let keyCodes = {
        65: "C4", // A
        87: "C#4", // W
        83: "D4", // S,
        69: "D#4", // E
        68: "E4", // D
        70: "F4", // F
        84: "F#4", // T
        71: "G4", // G
        89: "G#4", // Y
        72: "A4", // H
        85: "Bb4", // U
        74: "B4", // J
        75: "C5", // K
        79: "C#5", // O
        76: "D5", // L
        80: "D#5", // P
        186: "E5", // ;
    }

    synth.triggerAttackRelease(keyCodes[k], "4n")

    // making a keyboard with white keys and black:
    //   W   E   _   T   Y   U   _   O   P
    // A   S   D   F   G   H   J   K   L   ;

    // switch (key.keyCode) { // ooh a switch! https://www.w3schools.com/js/js_switch.asp
    //     case 65: // A
    //      synth.triggerAttackRelease("C4", "4n");
    //     break;
    //     case 87: // W
    //         synth.triggerAttackRelease("C#4", "4n");
    //     break;
    //     case 83: // S
    //         synth.triggerAttackRelease("D4", "4n");
    //     break;
    //     case 69: // E
    //         synth.triggerAttackRelease("D#4", "4n");
    //     break;
    //     case 68: // D
    //         synth.triggerAttackRelease("E4", "4n");
    //         break;
    //     case 70: // F
    //         synth.triggerAttackRelease("F4", "4n");
    //         break;   
    //     case 84: // T
    //         synth.triggerAttackRelease("F#4", "4n");
    //         break;
    //     case 71: // G
    //         synth.triggerAttackRelease("G4", "4n");
    //         break;
    //     case 89: // Y
    //         synth.triggerAttackRelease("G#4", "4n");
    //         break;
    //     case 72: // H
    //         synth.triggerAttackRelease("A4", "4n");
    //         break;
    //     case 85: // U
    //         synth.triggerAttackRelease("Bb4", "4n");
    //         break;
    //     case 74: // J
    //         synth.triggerAttackRelease("B4", "4n");
    //         break;
    //     case 75: // K
    //         synth.triggerAttackRelease("C5", "4n");
    //         break;
    //     case 79: // O
    //         synth.triggerAttackRelease("C#5", "4n");
    //         break;
    //     case 76: // L
    //         synth.triggerAttackRelease("D5", "4n");
    //         break;
    //     case 80: // P
    //         synth.triggerAttackRelease("D#5", "4n");
    //         break;
    //     case 186: // ;
    //         synth.triggerAttackRelease("E5", "4n");
    //         break;  
    // }
}



