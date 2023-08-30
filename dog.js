// Initialize dog attributes
let dog = {
  x: 400, // Initial X position
  y: 300, // Initial Y position
  velocityX: 0,
  velocityY: 0,
  speed: 2
};

// Function to update the dog's position based on its velocity
function updateDog() {
  dog.x += dog.velocityX;
  dog.y += dog.velocityY;

  // Keep the dog within the canvas bounds
  if (dog.x < 0) dog.x = 0;
  if (dog.x > canvas.width) dog.x = canvas.width;
  if (dog.y < 0) dog.y = 0;
  if (dog.y > canvas.height) dog.y = canvas.height;
}

// Function to draw the dog on the canvas
function drawDog(ctx) {
  ctx.fillStyle = 'black';  // Dog color
  ctx.beginPath();
  ctx.arc(dog.x, dog.y, 10, 0, Math.PI * 2);  // Dog is represented as a circle
  ctx.fill();
}
