export class Board
{
    constructor(width, height) {
        this.width = width 
        this.height = height
        this.scoreElement = document.querySelector('.score')
        this.boundaries = []
        this.setBoundaries()
    }

    setBoundaries() {
        for (let i = 1; i <= this.width; i++) {
            this.boundaries.push({
                x: i, y: 0
            })
            this.boundaries.push({
                x: i, y: this.width + 1
            })
        }
        for (let i = 1; i <= this.height; i++) {
            this.boundaries.push({
                x: 0, y: i
            })
            this.boundaries.push({
                x: this.height + 1, y: i
            })
        }          
    }
}