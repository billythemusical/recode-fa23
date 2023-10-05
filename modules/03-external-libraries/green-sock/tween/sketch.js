let x = 40
let y = 40
let xMove = 1
let yMove = 1.5

function setup() {
    const canvas = createCanvas(600, 300)
    canvas.parent('sketch-holder')
}

function draw() {
    background(0, 0, 0, 0)
    fill(200)
    ellipse(x, y, 50)

    x += xMove
    y += yMove

    if (x > width || x < 0) xMove *= -1
    if (y > height || y < 0) yMove *= -1
}


