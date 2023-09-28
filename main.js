var lienzo = document.getElementById("canvas")
var lapiz = lienzo.getContext("2d")
var mouse_event = ""
var mouseX = 0
var mouseY = 0
var mouseAX
var mouseAY




lienzo.addEventListener("mousedown", evento_click)

lienzo.addEventListener("mousemove", evento_move)

lienzo.addEventListener("mouseup", evento_up)

lienzo.addEventListener("touchstart", evento_touch)



lienzo.addEventListener("touchmove", evento_touch_move)

function evento_click(click) {
    mouseX = click.clientX - canvas.offsetLeft;
    mouseY = click.clientY - canvas.offsetTop;
    mouse_event = "mousedown"
    mouseAX = mouseX
    mouseAY = mouseY
}

function evento_move(move) {
    mouseX = move.clientX - canvas.offsetLeft
    mouseY = move.clientY - canvas.offsetTop
    if (mouse_event == "mousedown") {
        var figura = document.getElementById("Selector").value
        if (figura == "Linea") {
            Linea()
    
        }
        else if (figura == "Circulo") {
            Circulo()
    
        }
    }
    mouseAX = mouseX
    mouseAY = mouseY
}
function evento_up(up) {
    mouse_event = "mouseup"
}
function evento_leave(leave) {
    mouse_event = "mouseleave"
}

function evento_touch(touch) {
    mouseX = touch.touches[0].clientX - canvas.offsetLeft
    mouseY = touch.touches[0].clientY - canvas.offsetTop
    mouseAX = mouseX
    mouseAY = mouseY
}

function evento_touch_move(touch) {
    mouseX = touch.touches[0].clientX - canvas.offsetLeft
    mouseY = touch.touches[0].clientY - canvas.offsetTop
    var figura = document.getElementById("Selector").value
    if (figura == "Linea") {
        Linea()

    }
    else if (figura == "Circulo") {
        Circulo()

    }
    mouseAX = mouseX
    mouseAY = mouseY
}

function Limpiar() { lapiz.clearRect(0, 0, 600, 500) }





function Linea() {
    lapiz.strokeStyle = document.getElementById("color").value
    lapiz.lineWidth = document.getElementById("grosor").value
    lapiz.beginPath()
    lapiz.moveTo(mouseAX, mouseAY)
    lapiz.lineTo(mouseX, mouseY)
    lapiz.stroke()
}

function Circulo() {
    lapiz.strokeStyle = document.getElementById("color").value
    lapiz.lineWidth = document.getElementById("grosor").value
    lapiz.beginPath()
    lapiz.arc(mouseX, mouseY, 100, 0, 2 * Math.PI)
    lapiz.stroke()
}

















