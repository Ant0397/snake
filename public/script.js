import {Snake} from './snake.js'
import {Food} from './food.js'
import {Game} from './game.js'
import { Board } from './board.js'

initialise()

function initialise() {
    let gridX = 25
    let gridY = 25

    let board = new Board(gridX, gridY)
    let snake = new Snake(gridX / 2, gridY / 2)
    let food = new Food(gridX, gridY)
    let game = new Game(board, snake, food)

    game.drawBoard()
    game.drawFood()
    game.drawSnake()

    window.addEventListener('keyup', (e) => {
        let newDirection = snake.getNewDirection(e)
    
        if (newDirection == 'invalid') return
    
        // if (snake.moving != false) { // clear movement
        //     clearInterval(snake.moving)
        // }
    
        snake.updateSegments(newDirection)
        game.clearSnake()
        game.drawSnake()
        game.handleCollision()
        if (game.gameOver == true) {
            console.log('game')
        }
    }, 150)
        // snake.moving = setInterval(() => { // restart movement
        //     game.handleCollision()
        //     if (game.gameOver == true) {
        //         clearInterval(snake.moving)
        //         return
        //     }
        //     snake.updateSegments(newDirection)
        //     game.clearSnake()
        //     game.drawSnake()
        // }, 150)
    // })
}