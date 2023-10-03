const balls = []
const numBalls = 20

function setup() {
    const canvas = createCanvas(600, 300)
    canvas.parent('sketch-holder')

    for (let i = 0; i < numBalls; i++) {
        let x = -400 + random() * 800
        let y = -600 + random() * 700
        let ballSize = 5
        let xSpeed = 3
        let ySpeed = 2
        balls.push(new Ball(x, y, ballSize, xSpeed, ySpeed))
    }
    console.log(`balls.length: ${balls.length}`)
}

function draw() {
    background(0, 10)

    for (let ball of balls) {
        ball.display()
        ball.move()
        if (ball.x > width || ball.y > height) {
            ball.reset()
        }
    }

}


