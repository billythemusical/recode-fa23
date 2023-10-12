/* 

Dat-GUI v0.6.5 - https://github.com/dataarts/dat.gui/releases?page=2#:~:text=Compare-,0.6.5,Add%20Browserify%20support.%20%23137,-Assets
    API Docs - https://github.com/dataarts/dat.gui/blob/master/API.md

    Post on saving dat-GUI settings to JSON - https://stackoverflow.com/questions/22730039/saving-parameters-with-dat-gui-seems-broken
*/


const ball = {
    x: 100,
    y: 100,
    size: 100,
    xSpeed: 6,
    ySpeed: 4,
    col: [45, 200, 12],
    mouseDown: false,
}

const backgroundColor = {
    col: [100, 20, 200],
}

const gui = new dat.gui.GUI()

gui.addFolder('Ball Adjustments') // adds a section with heading
gui.add(ball, 'xSpeed', 0.0, 20.0, 1.0) // dat.GUI.add takes an object as it's first argument
    .onChange(value => ball.xSpeed = value) // callback on change
gui.add(ball, 'ySpeed', 0.0, 20.0, 1.0)
    .onChange(value => ball.ySpeed = value)
gui.addColor(ball, 'col', 0, 255, 1)
    .onChange(value => ball.col = value)

gui.addFolder('Background Color')
gui.addColor(backgroundColor, 'col', 0, 255, 1)
    .onChange(value => backgroundColor.col = value)


function setup() {
    createCanvas(400, 400);
    // noStroke();
}

function draw() {
    background(backgroundColor.col);

    moveBallAndCheckEdges()

    fill(ball.col)

    if (!ball.mouseDown) { // to fix skipping when adjusting controls
        ball.x += ball.xSpeed
        ball.y += ball.ySpeed
    }


    ellipse(ball.x, ball.y, ball.size)
}

function moveBallAndCheckEdges() {
    if (ball.x < ball.size / 2 || ball.x > (width - ball.size / 2)) ball.xSpeed *= -1
    if (ball.y < ball.size / 2 || ball.y > (height - ball.size / 2)) ball.ySpeed *= -1
}

function mousePressed() {
    ball.mouseDown = true;
}

function mouseReleased() {
    ball.mouseDown = false;
}