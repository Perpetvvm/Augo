// Initialize canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

// Main game loop
function gameLoop() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw sheep
  updateSheep();  // From boids.js
  drawSheep(ctx);  // From boids.js

  // Update and draw dog
  updateDog();  // From dog.js
  drawDog(ctx);  // From dog.js

  // Refresh at approximately 60 frames per second
  requestAnimationFrame(gameLoop);
}

// Event listener for bark action (e.g., when spacebar is pressed)
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 32) {  // Spacebar
    handleBark(dog, sheep);  // From bark.js
  }
});

// Start the game loop
gameLoop();
