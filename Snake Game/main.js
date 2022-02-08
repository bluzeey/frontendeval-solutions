const grid = document.querySelector('.grid')
const startButton = document.getElementById('start')
const restartButton = document.getElementById('restart')
const scoreDisplay = document.getElementById('score')
const prevScoreDisplay = document.getElementById('prevScore')
const overlay = document.getElementById('overlay')
let squares = []
let currentSnake = [212,211,210]
let direction = 1
const width = 15
let appleIndex = 0
let score = 0
let intervalTime = 600
let speed = 0.85
let timerId = 0

function createGrid() {
    for (let i=0; i < width*width; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    grid.appendChild(square)    
    squares.push(square)
    }
}
createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake'))


function startGame() {
    currentSnake.forEach(index => squares[index].classList.remove('snake'))
    clearInterval(timerId)
    currentSnake = [212,211,210]
    score = 0
    scoreDisplay.textContent = score
    direction = 1
    intervalTime = 600
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    timerId = setInterval(move, intervalTime)
}

function restartGame() {
    overlay.style.display = 'none'
    currentSnake.forEach(index => squares[index].classList.remove('snake'))
    squares[appleIndex].classList.remove('apple')
    clearInterval(timerId)
    currentSnake = [212,211,210]
    score = 0
    scoreDisplay.textContent = score
    direction = 1
    intervalTime = 600
    generateApple()
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    timerId = setInterval(move, intervalTime)
}

function move() {
    if (
        (currentSnake[0] + width >= width*width && direction === width) |
        (currentSnake[0] % width === width-1 && direction === 1) |
        (currentSnake[0] % width === 0 && direction === -1) |
        (currentSnake[0] - width < 0 && direction === -width) |
        squares[currentSnake[0] + direction].classList.contains('snake')
    ) {
        scoreDisplay.textContent = '0'
        overlay.style.display = 'block'
        return clearInterval(timerId); 
    }
    
    const tail = currentSnake.pop()
    squares[tail].classList.remove('snake')
    currentSnake.unshift(currentSnake[0] + direction)

    if (squares[currentSnake[0]].classList.contains('apple')) {
        squares[currentSnake[0]].classList.remove('apple')
        squares[tail].classList.add('snake')
        currentSnake.push(tail)
        generateApple()
        score++
        scoreDisplay.textContent = score
        clearInterval(timerId)
        intervalTime = intervalTime * speed
        timerId = setInterval(move, intervalTime)
    }
       
    squares[currentSnake[0]].classList.add('snake')
}


function generateApple() {
    do {
        appleIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
} 
generateApple()

function control(KeyboardEvent) {
    if (KeyboardEvent.key === 'ArrowRight') {
        direction = 1
    } else if (KeyboardEvent.key === 'ArrowUp') {
        direction = -width
    } else if (KeyboardEvent.key === 'ArrowLeft') {
        direction = -1
    } else if (KeyboardEvent.key === 'ArrowDown') {
        direction = +width
    }
}


document.addEventListener('keydown', control)
startButton.addEventListener('click', startGame)
restartButton.addEventListener('click', restartGame)
overlay.addEventListener('click', function(event) {
    if (event.target.id == 'overlay'){
        overlay.style.display = 'none'
    }
})