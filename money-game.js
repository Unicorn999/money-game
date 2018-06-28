
var value = 40
var x, y, z

const Minus_Ten  = 'Minus_Ten',
      Double      = 'Double',
      Half        = 'Half'

function onEveryButtonPress() {

  var guessX = Math.round(Math.random() * 2)
  var guessY = Math.round(Math.random())

  if (guessX === 0) {
    x = Minus_Ten
    if (guessY === 0) {
      y = Double
      z = Half
    } else {
      y = Half
      z = Double
    }
  } else if (guessX === 1) {
    x = Double
    if (guessY === 0) {
      y = Minus_Ten
      z = Half
    } else {
      y = Half
      z = Minus_Ten
    }
  } else {
    console.log('guess must be 2. Guess is', guessX)
    x = Half
    if (guessY === 0) {
      y = Double
      z = Minus_Ten
    } else {
      y = Minus_Ten
      z = Double
    }
  }
}

function xClick() {
  onEveryButtonPress()
  dotheChance(x)
}

function yClick() {
  onEveryButtonPress()
  dotheChance(y)
}

function zClick() {
  onEveryButtonPress()
  dotheChance(z)
}

function dotheChance(action) {

  if (action === Double) {
    value = value * 2
  } else if (action === Half) {
    value = value / 2
  } else {
    value = value - 10
  }

  $('#moneyLeft').text(value)

  setTimeout(function() {
    if (value >= 100) {
      alert('You win. Game over!')
      gameOver()
    } else if (value <= 0) {
      alert('You lose! Good luck next time!')
      gameOver()
    }
  }, 100)
}

function gameOver() {
  $('button').hide()
}


