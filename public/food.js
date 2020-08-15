export class Food
{
    constructor(gridX, gridY) {
        this.position = {
            x: Math.floor(Math.random() * gridX) + 1,
            y: Math.floor(Math.random() * gridY) + 1
        }
    }

    updatePosition(gridX, gridY, snakeSegments) { // updates coordinates of food and ensures food does not overlap with snake body
        let overlap
        do {
            this.position.x = Math.floor(Math.random() * gridX) + 1,
            this.position.y = Math.floor(Math.random() * gridY) + 1

            overlap = false
            for (let x = 0; x < snakeSegments.length; x++) {
                if (this.position.x == snakeSegments[x].x && this.position.y == snakeSegments[x].y) {
                    overlap = true
                    break
                }
            }
        } while (overlap == true)
    }
}