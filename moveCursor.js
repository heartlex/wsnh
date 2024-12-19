const robot = require("robotjs");

// Get the time interval from command-line arguments (default to 10 seconds)
const args = process.argv.slice(2); // Get arguments passed to the script
const intervalInSeconds = args[0] ? parseInt(args[0], 10) : 10; // Default to 10 seconds if no argument is provided

if (isNaN(intervalInSeconds) || intervalInSeconds <= 0) {
  console.error("Invalid interval. Please provide a positive number of seconds.");
  process.exit(1);
}

let moveRight = true; // Toggle to track direction

// Function to move cursor
function moveCursor() {
  const mouse = robot.getMousePos(); // Get current mouse position
  const xOffset = moveRight ? 1 : -1; // Alternate between left and right
  robot.moveMouse(mouse.x + xOffset, mouse.y); // Move cursor
  moveRight = !moveRight; // Toggle direction
  console.log(`Cursor moved to: (${mouse.x + xOffset}, ${mouse.y})`);
}

// Convert seconds to milliseconds and set interval
const intervalInMilliseconds = intervalInSeconds * 1000;
console.log(`Cursor will move every ${intervalInSeconds} seconds.`);
setInterval(moveCursor, intervalInMilliseconds);
