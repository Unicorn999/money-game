var value = 50

const MINUS_FIVE = '-5'
const DOUBLE     = 'double'
const HALF       = 'half'

var x, y, z

function randomForNextChance() {

  var guessX = Math.round(Math.random() * 2)
  var guessY = Math.round(Math.random())

  if (guessX === 0) {
    x = MINUS_FIVE
    if (guessY === 0) {
      y = DOUBLE
      z = HALF
    } else {
      y = HALF
      z = DOUBLE
    }
  } else if (guessX === 1) {
    x = DOUBLE
    if (guessY === 0) {
      y = HALF
      z = MINUS_FIVE
    } else {
      y = MINUS_FIVE
      z = HALF
    }
  } else {
    console.log('guess must be 2. Guess is', guessX)
    x = HALF
    if (guessY === 0) {
      y = DOUBLE
      z = MINUS_FIVE
    } else {
      y = MINUS_FIVE
      z = DOUBLE
    }
  }
}
// This will do random for first chance
randomForNextChance()

function xClick() {
  doAction(x)
}

function yClick() {
  doAction(y)
}

function zClick() {
  doAction(z)
}

function doAction(action) {

  console.log('doAction', action)

  if (action === DOUBLE) {
    value = value * 2
  } else if (action === HALF) {
    value = value / 2
  } else {
    value = value - 5
  }
  $('#moneyLeft').text(value)

  if (value >=100) {
    alert('You win!🎊. Game over!')
    gameOver()
  } else if (value <=0) {
    alert('You lose!😒. Game over!')
    gameOver()
  } else {
    randomForNextChance()
  }
}

function gameOver() {
  $('button').hide()
}



// alert('hello')

