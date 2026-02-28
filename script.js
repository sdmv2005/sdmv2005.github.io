const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 600;

let car = {
  x: 180,
  y: 500,
  width: 40,
  height: 80,
  speed: 0,
  fuel: 100,
  coins: 0
};

let keys = {};

document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

document.getElementById("left").onclick = () => car.x -= 20;
document.getElementById("right").onclick = () => car.x += 20;
document.getElementById("accelerate").onclick = () => car.speed += 1;
document.getElementById("brake").onclick = () => car.speed -= 1;

function drawCar() {
  ctx.fillStyle = "red";
  ctx.fillRect(car.x, car.y, car.width, car.height);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (keys["ArrowLeft"]) car.x -= 5;
  if (keys["ArrowRight"]) car.x += 5;
  if (keys["ArrowUp"]) car.speed += 0.2;
  if (keys["ArrowDown"]) car.speed -= 0.2;

  if (car.speed < 0) car.speed = 0;
  if (car.speed > 10) car.speed = 10;

  if (car.speed > 0 && car.fuel > 0) {
    car.fuel -= 0.02;
    car.coins += 0.01;
  }

  drawCar();

  document.getElementById("speed").innerText = Math.floor(car.speed * 10);
  document.getElementById("fuel").innerText = Math.floor(car.fuel);
  document.getElementById("coins").innerText = Math.floor(car.coins);

  requestAnimationFrame(update);
}

update();
