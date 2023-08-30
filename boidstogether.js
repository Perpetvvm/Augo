// Initialize sheep array
let sheep = []; 

// Initialize sheep positions randomly
function initializeSheep() {

  // Your code to initialize sheep array

}

// Update sheep positions 
function updateSheep() {

  // Loop through sheep
  for (let i = 0; i < sheep.length; i++) {

    // Get current sheep
    let sheep = sheep[i];

    // Find neighbors
    let neighbors = // Your code to find neighbors

    // Calculate vectors
    let alignment = // Your code
    let cohesion = // Your code 
    let separation = // Your code

    // Update velocity
    sheep.velocityX += // Your code 
    sheep.velocityY += // Your code

    // Limit speed
    if (speed > SPEED_LIMIT) {
      // Your code to limit speed
    }

    // Update position
    sheep.x += sheep.velocityX;
    sheep.y += sheep.velocityY;

    // Bounds check
    if (sheep.x < 0) sheep.x = 0; 
    // etc

  }

}

// Draw sheep
function drawSheep() {
  
  // Your code to draw sheep
  
}

// Run simulation
initializeSheep();

function loop() {
  updateSheep();
  drawSheep();
  requestAnimationFrame(loop);
}

loop();