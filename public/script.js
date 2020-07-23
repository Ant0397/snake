import {Snake} from './snake.js'
import {Food} from './food.js'
import {Game} from './game.js'

initialise()

function initialise() {
    let snake = new Snake(0, 0)
    let food = new Food()
    let game = new Game(snake, food)

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