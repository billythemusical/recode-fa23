function setup() {
    const cnv = createCanvas(windowWidth, windowHeight)
    cnv.style('display', 'block')
    frameRate(5)
}

function draw() {
    background(255, 0, 200)

    let numBalls = map(mouseX, 0, width, 5, 300)
    let sizeBalls = map(mouseY, 0, height, 4, 300)

    for (let i = 0; i < numBalls; i++) {
        let x = random() * width
        let y = random() * height
        ellipse(x, y, sizeBalls)
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
