export class Food
{
    constructor() {
        this.position = {
            x: Math.floor(Math.random() * 40) + 1,
            y: Math.floor(Math.random() * 40) + 1
        }
        console.log(this.position)
    }

    updatePosition() {
        this.position.x = Math.floor(Math.random() * 40) + 1,
        this.position.y = Math.floor(Math.random() * 40) + 1
    }
}