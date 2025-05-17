const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

ctx.width = innerWidth
ctx.height = innerHeight
// drawImage(image, dx, dy)
// The drawImage(image, dx, dy) syntax positions the image on the canvas.

// Example
// drawImage(image, sx, sy, swidth, sheight, dx, dy, dwidth, dheight)
// The drawImage(image, sx, sy, swidth, sheight, dx, dy, dwidth, dheight) syntax is used to clip the source image, before it is placed on the canvas.