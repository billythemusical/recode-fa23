class Ball {
    constructor(x, y, size, xSpeed, ySpeed) {
        this.x = x,
            this.y = y,
            this.size = size,
            this.xSpeed = xSpeed,
            this.ySpeed = ySpeed
    }

    display() {
        ellipse(this.x, this.y, this.size)
    }

    move() {
        this.x += this.xSpeed
        this.y += this.ySpeed
    }

    reset() {
        this.x = -400 + random() * 200
        this.y = -600 + random() * 700
    }

}

