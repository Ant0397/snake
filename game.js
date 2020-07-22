const board = document.querySelector('.board')

import {Snake} from './snake.js'

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