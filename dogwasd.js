// WASD key codes
const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

// Event listener for WASD controls
document.addEventListener('keydown', function(event) {
  switch(event.keyCode) {
    case KEY_W:
      dog.velocityY = -dog.speed;
      break;
    case KEY_A:
      dog.velocityX = -dog.speed;
      break;
    case KEY_S:
      dog.velocityY = dog.speed;
      break;
    case KEY_D:
      dog.velocityX = dog.speed;
      break;
  }
});

// Event listener for keyup to stop movement
document.addEventListener('keyup', function(event) {
  switch(event.keyCode) {
    case KEY_W:
    case KEY_S:
      dog.velocityY = 0;
      break;
    case KEY_A:
    case KEY_D:
      dog.velocityX = 0;
      break;
  }
});
