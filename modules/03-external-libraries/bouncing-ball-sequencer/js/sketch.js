
/*
*
* Combining all of the external libraries from class
* to make an interactive music player.
*
* This is a sequencer which plays a note each time the ball hits a wall
* using Tone.js v13.0.1.
*
*/

// Press spacebar to start/stop!
let pause = true;

const ball = {
    x: 100,
    y: 100,
    size: 50,
    xSpeed: 6,
    ySpeed: 4,
    col: 'rgb(45, 200, 12)',
    tempo: 1.0
}

const backgroundColor = {
    col: 'rgb(100, 20, 200)',
}

// A selection of notes from the Mixolydian scale - https://en.wikipedia.org/wiki/Mixolydian_mode
// This scale ensures a pleasing melody regardless of sequence
const notes = {
    0: "A3",
    1: "C4",
    2: "D4",
    3: "E4",
    4: "G4",
    5: "A4",
    6: "D5",
    7: "E5"
}

// Picking sequences of notes from the notes object above
// which will be used to play a note when the ball hits either axis
const sequence1 = [1, 3, 4, 7]
const sequence2 = [0, 2, 5, 6]

/*
*
* p5.js stuff to make an interface
*
*/

function setup() {
    const can = createCanvas(400, 400);
    can.parent('sketch-container')
    textAlign(CENTER)
    textSize(20)

    // A shim to fix when audio is muted on refresh
    // createButton('No sound? Click me')
}

function draw() {
    background(backgroundColor.col);
    displayNotesGrid() // long function at bottom 
    if (!pause) moveBall()
    checkEdges()
    constrainBallLocation()
    displayBall()
}

function moveBall() {
    ball.x += ball.xSpeed * ball.tempo
    ball.y += ball.ySpeed * ball.tempo
}

function constrainBallLocation() {
    ball.y = constrain(ball.y, ball.size / 2, height - ball.size / 2) // to keep the ball on screen
    ball.x = constrain(ball.x, ball.size / 2, width - ball.size / 2) // to keep the ball on screen
}

function displayBall() {
    fill(ball.col)
    ellipse(ball.x, ball.y, ball.size)
}

function checkEdges() {

    if (ball.x < ball.size / 2 || ball.x > (width - ball.size / 2)) {
        playNotes('x') // play notes before ball changes direction
        ball.xSpeed *= -1
    }

    if (ball.y < ball.size / 2 || ball.y > (height - ball.size / 2)) {
        playNotes('y') // play notes before ball changes direction
        ball.ySpeed *= -1
    }

}

function playNotes(axis) {

    // if the ball hits the top or bottom...
    if (axis == 'y') {

        // look at the ball's x value and determine a zone
        let zone = floor((ball.x / height) * 4) // gives a number between 0 and 4
        let noteChoice = sequence1[zone]
        synth.triggerAttackRelease(notes[noteChoice], "4n")

        // else if the ball hits either side
    } else {

        // look at the ball's y value and determine a zone
        let zone = floor((ball.y / height) * 4) // gives a number between 0 and 4
        let noteChoice = sequence2[zone]
        synth.triggerAttackRelease(notes[noteChoice], "4n")
    }
}

function displayNotesGrid() {

    // Show the notes along the X axis
    for (i = 0; i < sequence1.length; i++) {
        let sequenceNote = sequence1[i] // find a note of our chosen sequence using i
        let note = notes[sequenceNote] // find a note in notes using the sequenceNote
        let spacing = (width / sequence1.length) // used to space out text and lines evenly
        let x = spacing * i
        let y = height - 10;
        push()
        fill(0)
        strokeWeight(10)
        // don't draw a line at the sketch's edges when we are at the end of the loop
        if (i < (sequence1.length - 1)) line(x + spacing, height, x + spacing, 0)
        // draw the note name from notes
        text(note, x + spacing / 2, y)
        pop()
    }
    // Show the notes along the Y axis, same comments apply
    for (j = 0; j < sequence2.length; j++) {
        let sequenceNote = sequence2[j]
        let note = notes[sequenceNote]
        let spacing = (height / sequence2.length)
        let y = spacing * j
        let x = width - 20
        push()
        fill(0)
        strokeWeight(10)
        if (j < (sequence2.length - 1)) line(width, y + spacing, 0, y + spacing)
        text(note, x, y + spacing / 2)
        pop()

    }
}

// Set up the spacebar to pause/unpause
function keyPressed(key) {
    if (key.keyCode == 32) {
        key.preventDefault() // prevent the default behavior which scrolls the page
        pause = !pause
    }
}



// This will allow us to toggle ball movement on mobile
// even though Safari won't play the sounds 👿
function touchEnded() {
    pause = !pause
}

function touchStared() {
    return
}

function mousePressed() {
    return
}

function mouseReleased() {
    return
}

