export class Food
{
    constructor(gridX, gridY) {
        this.position = {
            x: Math.floor(Math.random() * gridX) + 1,
            y: Math.floor(Math.random() * gridY) + 1
        }
    }

    updatePosition(gridX, gridY) {
        this.position.x = Math.floor(Math.random() * gridX) + 1,
        this.position.y = Math.floor(Math.random() * gridY) + 1
    }
}