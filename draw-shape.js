
// var c = document.getElementById('tutorial')
// var drawSpace = c.getContext('2d')

// drawSpace.fillStyle = 'rgb(200, 0, 0)'
// drawSpace.fillRect(10, 20, 50, 100) // red

// drawSpace.fillStyle = 'rgb(0, 0, 200, .5)'
// drawSpace.fillRect(30, 60, 100, 200) // blue

// drawSpace.clearRect(40, 70, 10, 10) // clear white

// drawSpace.beginPath()  // pen down
// drawSpace.arc(65, 130, 20, 0, Math.PI * 2) // arc
// drawSpace.arc(65, 130, 10, 0, Math.PI * 2) // arc
// drawSpace.stroke() // all the stuff need to be stroked

$('#selectBox').change(doChoice)



function doChoice() {
  var choice = $('#selectBox').val()
  console.log(choice)
}