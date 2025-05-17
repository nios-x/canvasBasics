const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d") 
ctx.fillStyle = "cyan"
ctx.fillRect(0,0,200,1000) 


// You access a <canvas> element with the HTML DOM method getElementById():
// The getContext() method returns an object with tools (properties and methods) for drawing.

// The fillStyle property can be a color, a gradient, or a pattern. The default fillStyle is black.
// The fillRect(x, y, width, height) method draws the rectangle, filled with the fill style color, on the canvas: