const board = document.querySelector('.board')

class Snake
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
    }

    drawSnake() { // maps coordinates of each segment to grid in DOM
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
    
    updateSegments(event) { // removes last segment and places it one square in front of the head in the desired direction
        let newHeadX
        let newHeadY

        switch (event.which || event.keyPress) {
            case 37: // left
                if (this.currentDirection == 'right') return // prevents snake going backwards
                this.currentDirection = 'left'
                newHeadX = this.segments[0].x 
                newHeadY = this.segments[0].y - 1 // updating y coordinate
                break

            case 38: // up
                if (this.currentDirection == 'down') return // prevents snake going backwards
                this.currentDirection = 'up'
                newHeadX = this.segments[0].x - 1 // updating x coordinate
                newHeadY = this.segments[0].y
                break

            case 39: // right
                if (this.currentDirection == 'left') return // prevents snake going backwards
                this.currentDirection = 'right'
                newHeadX = this.segments[0].x
                newHeadY = this.segments[0].y + 1 // updating y coordinate
                break

            case 40: // down
                if (this.currentDirection == 'up') return // prevents snake going backwards
                this.currentDirection = 'down'
                newHeadX = this.segments[0].x + 1 // updating x coordinate
                newHeadY = this.segments[0].y 
                break

            default: 
                return
        }

        this.segments.pop() // remove last segment
        this.segments.unshift({ // add new head with updated coordinates
            x: newHeadX, y: newHeadY
        })
    }

    moveSnake(event) {
        this.updateSegments(event)
        this.clearSnake()
        this.drawSnake()
    }
}

let s = new Snake()


window.addEventListener('keydown', (e) => {
    s.moveSnake(e)
})
