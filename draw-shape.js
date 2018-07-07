

// drawSpace.fillStyle = 'rgb(200, 0, 0)'
// drawSpace.fillRect(10, 20, 50, 100) // red

// drawSpace.fillStyle = 'rgb(0, 0, 200, .5)'
// drawSpace.fillRect(30, 60, 100, 200) // blue

// drawSpace.clearRect(40, 70, 10, 10) // clear white

// drawSpace.beginPath()  // pen down

// drawSpace.arc(65, 130, 20, 0, Math.PI * 2) // arc
// drawSpace.arc(65, 130, 10, 0, Math.PI * 2) // arc
// drawSpace.stroke() // all the stuff need to be stroked


//
//drawSpace.beginPath()
//drawSpace.stroke()
//drawSpace.fillRect(150,70,1,150)

$('#selectBox').change(doChoice)



function doChoice() {
  var choice = $('#selectBox').val()
  console.log(choice)
}


var c = document.getElementById('tutorial')
var drawSpace = c.getContext('2d')

function drawHangman() {

  drawSpace.beginPath()
  drawSpace.arc(150, 50, 40, 0, Math.PI * 2)
  
  mt(150,90)
  lt(150,225)

  mt(75,175)
  lt(150,125)

  mt(225,175)
  lt(150,125)

  mt(75,275)
  lt(150,225)

  mt(225,275)
  lt(150,225)
  
  st()
}

drawHangman()


function bp() {
  drawSpace.beginPath()
}

function st() {
  drawSpace.stroke()
}

function mt(x, y) {
  drawSpace.moveTo(x, y)
}

function lt(x, y) {
  drawSpace.lineTo(x, y)
}


