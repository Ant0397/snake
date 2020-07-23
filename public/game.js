import {Snake} from './snake.js'

const board = document.querySelector('.board')

function draw(snake) { // maps coordinates of each segment of snake to grid in DOM
    snake.segments.forEach(segment => {
        let newSegment = document.createElement('div')
        newSegment.classList.add('snake')
        board.appendChild(newSegment)
        newSegment.style.gridRowStart = segment.x
        newSegment.style.gridColumnStart = segment.y
    })
}

function clear() { // removes snake from DOM
    if (board.children.length === 0) return 
    for (let segment of board.children) {
        segment.remove()
        clear()
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
        clear()
        draw(s)
    }, 150);
})


