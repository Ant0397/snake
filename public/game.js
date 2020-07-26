export class Game
{
    constructor(board, snake, food) {
        this.gameOver = false
        this.board = board
        this.snake = snake
        this.food = food
    }

    drawBoard() { // prints board to DOM
        let boardElement = document.createElement('div')
        boardElement.classList.add('board')
        boardElement.style.gridTemplateRows = `repeat(${this.board.width}, 1fr)`
        boardElement.style.gridTemplateColumns = `repeat(${this.board.height}, 1fr)`
        document.querySelector('.container').appendChild(boardElement)
    }

    drawSnake() { // prints snake to DOM
        for (let x = 0; x < this.snake.segments.length - 1; x++) {
            let newSegment = document.createElement('div')
            newSegment.classList.add('snake')
            document.querySelector('.board').appendChild(newSegment)
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
        document.querySelector('.board').appendChild(newFood)
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

        for (let x = 0; x < this.board.boundaries.length; x++) {
            if (this.snake.segments[0].x == this.board.boundaries[x].x && this.snake.segments[0].y == this.board.boundaries[x].y) {
                // board boundary hit
                return 'boundary'
            }
        }   

    }

    handleCollision() {
        let collision = this.getCollisitonType()

        if (collision == 'food') {
            this.clearFood()
            this.food.updatePosition(this.board.width, this.board.height)
            this.drawFood()
            this.snake.addSegment()
        } else if (collision == 'self' || collision == 'boundary') {
            this.gameOver = true
        } else {
            return
        }
    }

    end() {
        clearInterval(this.snake.moving)

        let gameOverScreen = document.createElement('div')
        gameOverScreen.classList.add('game-over')
        document.querySelector('.board').appendChild(gameOverScreen)

        let textElement = document.createElement('h1')
        textElement.innerText = 'Game Over'
        gameOverScreen.appendChild(textElement)

        let restartBtn = document.createElement('button')
        restartBtn.innerText = 'Play Again'
        restartBtn.addEventListener('click', () => {
            location.reload()
        })
        gameOverScreen.appendChild(restartBtn)

    }
}