import {Snake} from './snake.js'
import {Food} from './food.js'
import {Game} from './game.js'
import { Board } from './board.js'

main()

function main() {
    let gridX = 10
    let gridY = 10

    let board = new Board(gridX, gridY)
    let snake = new Snake(1, 10)
    let food = new Food(gridX, gridY)
    let game = new Game(board, snake, food)

    game.drawBoard()
    game.drawFood()
    game.drawSnake()
    console.log(snake.segments)

    window.addEventListener('keyup', (e) => {
        if (game.gameOver) return

        let newDirection = snake.getNewDirection(e)
    
        if (newDirection == 'invalid') return
        
        if (snake.moving != false) { // clear movement
            clearInterval(snake.moving)
        }

        snake.moving = setInterval(() => { // restart movement
                snake.updatePosition(newDirection)
                if (game.handleCollision() != false) {
                    snake.updatePosition(newDirection)
                }
                if (game.gameOver) {
                    game.end()
                } else {
                    game.clearSnake()
                    game.drawSnake()
                }     
        }, 150)
    })
}