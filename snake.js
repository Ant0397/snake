export class Snake
{
    constructor() {
        this.segments = [
            {x: 20, y: 20},
            {x: 21, y: 20},
            {x: 23, y: 20},
            {x: 24, y: 20},
            {x: 25, y: 20},
            {x: 26, y: 20}
        ]
        this.currentDirection = undefined
        this.moving = false
    }

    drawSnake(board) { // maps coordinates of each segment to grid in DOM
        this.segments.forEach(segment => {
            let newSegment = document.createElement('div')
            newSegment.classList.add('snake')
            board.appendChild(newSegment)
            newSegment.style.gridRowStart = segment.x
            newSegment.style.gridColumnStart = segment.y
        })
    }

    clearSnake() { // removes snake from DOM
        let snake = board.children 
        if (snake.length === 0) return 
        for (let segment of snake) {
            segment.remove()
            this.clearSnake()
        }
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
    
    updateSegments(newDirection) { // removes last segment and places it one square in front of the head in the desired direction
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

    moveSnake(board) {
        s.clearSnake()
        s.drawSnake(board)
    } 
}


let s = new Snake()


window.addEventListener('keyup', (e) => {
    let newDirection = s.getNewDirection(e)

    if (newDirection == 'invalid') return

    if (s.moving != false) { // clear movement
        clearInterval(s.moving)
    }

    s.moving = setInterval(() => { // restart movement
        s.updateSegments(newDirection)
        s.moveSnake()
    }, 150);
})
