export class Game
{
    constructor(snake, food) {
        this.gameOver = false
        this.board = document.querySelector('.board')
        this.snake = snake
        this.food = food
    }

    drawSnake() { // prints snake to DOM
        for (let x = 0; x < this.snake.segments.length - 1; x++) {
            let newSegment = document.createElement('div')
            newSegment.classList.add('snake')
            this.board.appendChild(newSegment)
            newSegment.style.gridRowStart = this.snake.segments[x].x
            newSegment.style.gridColumnStart = this.snake.segments[x].y
        }
        
    }

    clearSnake() { // removes snake from DOM
        let snakeElements = document.querySelectorAll('.snake')
        if (snakeElements.length == 0) return 
        for (let piece of snakeElements) {
            piece.remove()
            this.clearSnake()
        }
    }

    clearFood() { // removes food from DOM
        let foodElement = document.querySelector('.food')
        foodElement.remove()
    }

    drawFood() { // prints food to DOM
        let newFood = document.createElement('div')
        newFood.classList.add('food')
        this.board.appendChild(newFood)
        newFood.style.gridRowStart = this.food.position.x
        newFood.style.gridColumnStart = this.food.position.y
    }

    getCollisitonType() {
        if (this.snake.segments[0].x == this.food.position.x && this.snake.segments[0].y == this.food.position.y) {
            // food hit 
            return 'food'
        } 

        for (let x = 1; x < this.snake.segments.length; x++) {
            if (this.snake.segments[0].x == this.snake.segments[x].x && this.snake.segments[0].y == this.snake.segments[x].y) {
                // snake hit 
                return 'self'
            }
        }

                   

    }

    handleCollision() {
        let collision = this.getCollisitonType()

        if (collision == 'food') {
            this.clearFood()
            this.food.updatePosition()
            this.drawFood()
            this.snake.addSegment()
        } else if (collision == 'self' || collision == 'boundary') {
            this.gameOver = true
        } else {
            return
        }
    }
}