// Flocking behavior parameters
const ALIGNMENT_FACTOR = 1.0;
const COHESION_FACTOR = 1.0;
const SEPARATION_FACTOR = 1.5;
const NEIGHBOR_RADIUS = 50;
const SPEED_LIMIT = 2;

// Function to calculate alignment
// Returns a velocity vector for alignment
function calculateAlignment(neighbors) {
  let avgVelocity = { x: 0, y: 0 };
  
  if (neighbors.length === 0) {
    return avgVelocity;
  }

  for (let neighbor of neighbors) {
    avgVelocity.x += neighbor.velocityX;
    avgVelocity.y += neighbor.velocityY;
  }

  avgVelocity.x /= neighbors.length;
  avgVelocity.y /= neighbors.length;

  return avgVelocity;
}

// Function to calculate cohesion
// Returns a velocity vector pointing towards the center of mass of neighbors
function calculateCohesion(neighbors, currentPos) {
  let centerOfMass = { x: 0, y: 0 };

  if (neighbors.length === 0) {
    return centerOfMass;
  }

  for (let neighbor of neighbors) {
    centerOfMass.x += neighbor.x;
    centerOfMass.y += neighbor.y;
  }

  centerOfMass.x /= neighbors.length;
  centerOfMass.y /= neighbors.length;

  return {
    x: (centerOfMass.x - currentPos.x) * COHESION_FACTOR,
    y: (centerOfMass.y - currentPos.y) * COHESION_FACTOR
  };
}

// Function to calculate separation
// Returns a velocity vector to avoid crowding neighbors
function calculateSeparation(neighbors, currentPos) {
  let separation = { x: 0, y: 0 };

  for (let neighbor of neighbors) {
    let dx = currentPos.x - neighbor.x;
    let dy = currentPos.y - neighbor.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < NEIGHBOR_RADIUS) {
      separation.x += dx / distance;
      separation.y += dy / distance;
    }
  }

  return {
    x: separation.x * SEPARATION_FACTOR,
    y: separation.y * SEPARATION_FACTOR
  };
}
