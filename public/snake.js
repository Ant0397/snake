export class Snake
{
    constructor(x, y) {
        this.segments = [
            {x: x, y: y},
        ]
        this.currentDirection = null
        this.moving = false
    }

    addSegment() {
        let lastSegment = this.segments[this.segments.length - 1]
        let secondLastSegment = this.segments[this.segments.length - 2]

        let x 
        let y
        if (secondLastSegment == undefined) { 
            x = lastSegment.x 
            y = lastSegment.y
        } else { // use direction of tail to determine where to add segment if snake is longer than 1
            let tailXDirection = secondLastSegment.x - lastSegment.x
            let tailYDirection = secondLastSegment.y - lastSegment.y

            if (tailXDirection == 0) { // tail is moving horizontally
                if (tailYDirection == -1) { // tail is heading left
                    x = lastSegment.x
                    y = lastSegment.y + 1 
                } else if (tailYDirection == 1) { // tail is heading right 
                    x = lastSegment.x 
                    y = lastSegment.y - 1
                }
            } else if(tailYDirection == 0) { // tail is moving vertically
                if (tailXDirection == -1) { // tail is heading up
                    x = lastSegment.x + 1
                    y = lastSegment.y 
                } else if (tailXDirection == 1) { // tail is heading down
                    x = lastSegment.x - 1
                    y = lastSegment.y 
                }
            }   
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
                newHeadY = this.segments[0].y - 1 // updating y coordinate
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