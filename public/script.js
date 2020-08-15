import {Snake} from './snake.js'
import {Food} from './food.js'
import {Game} from './game.js'
import {Board} from './board.js'

const params = new URLSearchParams(location.search)
let gridX 
let gridY 
let speed

init()
play()


function init() {
    switch (params.get('difficulty')) {
        case 'easy': 
            gridX = 20
            gridY = 20
            speed = 150
            break

        case 'medium':
            gridX = 10
            gridY = 10
            speed = 150
            break

        case 'hard':
            gridX = 8
            gridY = 8
            speed = 100
            break
    }

    let primaryColour = params.get('primary')
    document.body.style.setProperty('--primary-colour', primaryColour)

    let foodColour = params.get('food')
    document.body.style.setProperty('--food-colour', foodColour)
}

function play() {
    let board = new Board(gridX, gridY)
    let snake = new Snake(gridX / 2, gridY / 2)
    let food = new Food(gridX, gridY)
    let game = new Game(board, snake, food)

    game.drawBoard()
    game.drawSnake()
    game.drawFood()

    window.addEventListener('keyup', (e) => {
        if (game.gameOver) return

        let newDirection = snake.getNewDirection(e)
    
        if (newDirection == 'invalid') return
        
        if (snake.moving != false) { // clear movement
            clearInterval(snake.moving)
        }

        snake.moving = setInterval(() => { // restart movement
                snake.updatePosition(newDirection)
                game.handleCollision()
                if (game.gameOver) {
                    game.end()
                } else {
                    game.clearSnake()
                    game.drawSnake()
                }     
        }, speed)
    })
}