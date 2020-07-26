export class Snake
{
    constructor(x, y) {
        this.segments = [
            {x: x, y: y},
            {x: x+1, y: y},
        ]
        this.currentDirection = null
        this.moving = false
    }

    addSegment() {
        let x 
        let y
        let lastSegment = this.segments[this.segments.length - 1]
        
        switch (this.currentDirection) {
            case 'left':
                x = lastSegment.x
                y = lastSegment.y + 1 

            case 'up':
                x = lastSegment.x + 1
                y = lastSegment.y 
                
            case 'right':
                x = lastSegment.x 
                y = lastSegment.y - 1

            case 'down':
                x = lastSegment.x - 1
                y = lastSegment.y
        }

        this.segments.push({
            x: x, y: y
        })
    }

    getNewDirection(event) {
        switch (event.which || event.keyPress) {
            case 37: // left
                return 'left'

            case 38: // up
                return 'up'

            case 39: // right 
                return 'right'

            case 40: // down
                return 'down'

            default:
                return 'invalid'
        }
    }
    
    updatePosition(newDirection) { // removes last segment and places it one square in front of the head in the desired direction
        let newHeadX
        let newHeadY

        if (newDirection == 'left') {
            if (this.currentDirection != 'right') {
                this.currentDirection = 'left'
                newHeadX = this.segments[0].x
                newHeadY = this.segments[0].y -1 // updating y coordinate
            } else { // prevents snake going backwards
                newHeadX = this.segments[0].x
                newHeadY = this.segments[0].y + 1 // updating y coordinate
            }
        } else if (newDirection == 'up') {
            if (this.currentDirection != 'down') {
                this.currentDirection = 'up'
                newHeadX = this.segments[0].x - 1 // updating x coordinate
                newHeadY = this.segments[0].y
            } else { // prevents snake going backwards
                newHeadX = this.segments[0].x + 1 // updating x coordinate
                newHeadY = this.segments[0].y 
            }
        } else if (newDirection == 'right') {
            if (this.currentDirection != 'left') {
                this.currentDirection = 'right'
                newHeadX = this.segments[0].x
                newHeadY = this.segments[0].y + 1 // updating y coordinate
            } else { // prevents snake going backwards
                newHeadX = this.segments[0].x 
                newHeadY = this.segments[0].y - 1 // updating y coordinate
            }
        } else if (newDirection == 'down') {
            if (this.currentDirection != 'up') {
                this.currentDirection = 'down'
                newHeadX = this.segments[0].x + 1 // updating x coordinate
                newHeadY = this.segments[0].y
            } else { // prevents snake going backwards
                newHeadX = this.segments[0].x - 1 // updating x coordinate
                newHeadY = this.segments[0].y
            }
        }

        this.segments.pop() // remove last segment
        this.segments.unshift({ // add new head with updated coordinates
            x: newHeadX, y: newHeadY
        })
    }
}