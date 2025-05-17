    // Get canvas element and its 2D drawing context
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // Get the device pixel ratio (for Retina/high-DPI displays)
    const dpr = window.devicePixelRatio || 1;

    // Define display size in CSS pixels
    const cssWidth = innerWidth;
    const cssHeight = innerHeight;

    // Set canvas internal resolution (actual pixels) to be higher for sharpness
    canvas.width = cssWidth * dpr;
    canvas.height = cssHeight * dpr;

    // Scale the drawing context to account for device pixel ratio
    ctx.scale(dpr, dpr);

    // Set the canvas's visible size using CSS (stays 400x400 visually)
    canvas.style.width = cssWidth + "px";
    canvas.style.height = cssHeight + "px";

    // ---- Draw First Line (Top-Left to Bottom-Right) ----
    ctx.beginPath();                // Begin a new path
    ctx.moveTo(0, 0);              // Start point (top-left corner)
    ctx.lineTo(cssWidth, cssHeight); // End point (bottom-right corner)
    ctx.strokeStyle = "red";       // Set stroke color to red
    ctx.lineWidth = 2;             // Set line width to 2 pixels
    ctx.stroke();                  // Draw the line

    // ---- Draw Second Line (Bottom-Left to Top-Right) ----
    ctx.beginPath();                // Begin a new path
    ctx.moveTo(0, cssHeight);      // Start point (bottom-left corner)
    ctx.lineTo(cssWidth, 0);       // End point (top-right corner)
    ctx.strokeStyle = "blue";      // Set stroke color to blue
    ctx.lineWidth = 2;             // Set line width to 2 pixels
    ctx.stroke();                  // Draw the line


    // beginPath() -- begins a path
    // arc(x, y, r, startangle, endangle) - creates an arc/curve.
    //  To create a circle with arc(): Set startangle to 0 and endangle to 2*Math.PI. 
    // The x- and y-coordinates define the center of the circle. 
    // r defines the radius of the circle

    
ctx.beginPath();
ctx.arc(395, 240, 200, 0, 2 * Math.PI);
ctx.stroke();



// beginPath()	Declares that we are about to draw a new path (without drawing)	No
// moveTo(x,y)	Sets the start-point of the line in the canvas (without drawing)	No
// lineTo(x,y)	Sets the end-point of the line in the canvas (without drawing)	No
// stroke()	Draws the line. The default stroke color is black	Yes


