export function StartGame() {
//Canvas
const canvas = document.getElementById("mainGame");
const ctx = canvas.getContext("2d");


// Scale the canvas up to the device's pixel density
const scale = window.devicePixelRatio;
canvas.width = canvas.clientWidth * scale;
canvas.height = canvas.clientHeight * scale;
ctx.scale(scale, scale);

// Define paddle properties
const paddle = {
    x: canvas.width / 2 - 75, // starting x position (centered horizontally)
    y: canvas.height - 40, // starting y position (near bottom of canvas)
    width: 150, // paddle width
    height: 20, // paddle height
    dx: 0, // paddle x
    speed: 10,
  };
  
  // Define ball properties
  const ball = {
    x: paddle.x + paddle.width / 2, // center ball horizontally on paddle
    y: canvas.height - 60, // starting y position 
    // x: 100, // center ball horizontally on paddle
    // y: 250, // starting y position 
    radius: 10, // ball radius
    dx: 5, // ball x
    dy: -5, // ball y 
  };
  
  
// Added by raktim

var ballSpeedX = 2;
var ballSpeedY = 2;
var gameStarted = false
  
  function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }
  
  function drawPaddle() {
    ctx.beginPath();
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.fillStyle = "white";
    ctx.closePath();
  }
  
// Define brick properties
const brickRowCount = 3;
const brickColumnCount = 10;
const brickWidth = 81;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30; //similler to y
const brickOffsetLeft = 11; //similler to x

// brickOffsetTop * brickRowCount + brickHeight + brickPadding

// Create an array of bricks
const bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    const x = c * (brickWidth + brickPadding) + brickOffsetLeft;
    const y = r * (brickHeight + brickPadding) + brickOffsetTop;
    bricks[c][r] = { x, y, width: brickWidth, height: brickHeight, color: "#0095DD" };
  }
}

  // Create an array of bricks
  const brickColor =[
    "Black",
    "Yellow",
    "Green",
    "Brown",
    "Azure",
    "Ivory",
    "Teal",
    "Silver",
    "Navy blue",
    "Pea green",
    "Gray",
    "Orange",
    "Maroon",
    "Charcoal",
    "Aquamarine",
    "Coral",
    "Fuchsia",
    "Wheat",
    "Lime",
    "Crimson",
    "Khaki",
    "Hot pink",
    "Magenta",
    "Olden",
    "Plum",
    "Olive",
    "Cyan"
    ];

  let storageHitBrickArray = JSON.parse(localStorage.getItem("hitBrickArray"))
  let hitBricksValue = storageHitBrickArray != null ? storageHitBrickArray : []
  function removeDuplicates(arr) {
    return arr.filter((item, 
        index) => arr.indexOf(item) === index);
  }
// Draw the bricks on the canvas
let bricksStore = [];
function drawBricks() {
  bricksStore = []
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const brick = bricks[c][r];
      //Code for brickBreak
      if(!removeDuplicates(hitBricksValue).includes(bricks[c][r].x + bricks[c][r].y)) {
      // if(bricks[c][r].x + bricks[c][r].y == 647) {
      ctx.beginPath();
      ctx.rect(brick.x, brick.y, brick.width, brick.height);
      let number = Math.floor(Math.random()*10);
      ctx.fillStyle = brickColor[0];
      bricksStore.push(bricks[c][r]);
      ctx.fill();
      ctx.closePath();
      }  
    }
  }

// console.log(bricksStore);
}

// Draw everything on the canvas
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw the bricks, ball, and paddle
  drawBricks();
  drawBall();
  drawPaddle();
}

draw();

// Added by raktim
canvas.addEventListener("click", runGame)

var interval
function runGame(){
  gameStarted = true
  clearInterval(interval)
  interval = setInterval(gameRun, 10)
}

document.onkeydown = function(evt) {
  console.log(evt.key);
  if(evt.key === "Escape"){
    clearInterval(interval)
  }
};

function gameOver(){
  clearInterval(interval)
  gameStarted = false
  bricksStore = []
  hitBricksValue = []
  localStorage.clear()
  defaultPaddleAndBallPos()
}

function defaultPaddleAndBallPos(){
  ball.x =paddle.x + paddle.width / 2
  ball.y = canvas.height - 50, 
  draw()
}

function gameRun(){
  ball.x += ballSpeedX;
  ball.y += ballSpeedY;

  if(ball.y > canvas.height - (canvas.height - paddle.y) - ball.radius){
    if(ball.x >= paddle.x && ball.x <= paddle.x + paddle.width){
      ballSpeedY = -ballSpeedY;
    }else if(ball.y >= canvas.height - ball.radius ){
      gameOver()
    }
  } else if(ball.y < 0 + ball.radius){
    ballSpeedY = -ballSpeedY;
  }
  if(ball.x > canvas.width - ball.radius){
    ballSpeedX = -ballSpeedX;
  } else if(ball.x < 0 + ball.radius){
    ballSpeedX = -ballSpeedX;
  }else if(ball.y < 150){
    hitBrick()
  }
  draw()
}

canvas.addEventListener("mousemove", movingPaddle)

function movingPaddle (e){
  var canvasLeftMargin = (document.body.clientWidth-canvas.width)/2
  const mousePos = e.clientX - canvasLeftMargin
  const paddlePos = mousePos - paddle.width/2
  if(paddlePos >= 0 && paddlePos <= canvas.width - paddle.width){
    paddle.x = mousePos - paddle.width/2
  }
  if(!gameStarted){
    defaultPaddleAndBallPos()
  }
}

let bricksIndex;
function hitBrick(){
  let offLoop = false
    for (bricksIndex = 0; bricksIndex < bricksStore.length; bricksIndex++) {
        const oneBrick = bricksStore[bricksIndex]
        const brickSum = oneBrick.x + oneBrick.y

        if( ball.y <= (oneBrick.y + oneBrick.height + ball.radius) &&
        ball.y >= (oneBrick.y - ball.radius)  &&
        ball.x >= (oneBrick.x - ball.radius) &&
        ball.x <= (oneBrick.x + oneBrick.width + ball.radius) &&
        !removeDuplicates(hitBricksValue).includes(brickSum)
        ){
          if(ball.y == (oneBrick.y + oneBrick.height + ball.radius)){
            ballSpeedY = 2;
            hitBricksValue.push(oneBrick.x + oneBrick.y)
            localStorage.setItem("hitBrickArray", JSON.stringify(hitBricksValue))
            offLoop = true
            break;
          }else if(ball.x == (oneBrick.x + oneBrick.width + ball.radius)){
            ballSpeedX = 2;
            hitBricksValue.push(oneBrick.x + oneBrick.y)
            localStorage.setItem("hitBrickArray", JSON.stringify(hitBricksValue))
            offLoop = true
            break;
          }else if(ball.y == (oneBrick.y - ball.radius)){
            ballSpeedY = -2;
            hitBricksValue.push(oneBrick.x + oneBrick.y)
            localStorage.setItem("hitBrickArray", JSON.stringify(hitBricksValue))
            offLoop = true
            break;
          }else{
            ballSpeedX = -2;
            hitBricksValue.push(oneBrick.x + oneBrick.y)
            localStorage.setItem("hitBrickArray", JSON.stringify(hitBricksValue))
            offLoop = true
            break;
          }
        }

        if(offLoop){
          break;
        }
    }
}

}