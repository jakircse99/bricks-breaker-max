export function StartGame() {
//Canvas
const canvas = document.getElementById("mainGame");
const ctx = canvas.getContext("2d");


// Scale the canvas up to the device's pixel density
const scale = window.devicePixelRatio;
canvas.width = canvas.clientWidth * scale;
canvas.height = canvas.clientHeight * scale;
ctx.scale(scale, scale);

// Added by raktim

var ballX = 75;
var ballSpeedX = 8;
var ballY = 75;
var ballSpeedY = 8;

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
    radius: 20, // ball radius
    dx: 5, // ball x
    dy: -5, // ball y 
  };
  
  
  
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

console.log(bricks);
// Draw the bricks on the canvas
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const brick = bricks[c][r];
      ctx.beginPath();
      ctx.rect(brick.x, brick.y, brick.width, brick.height);
      ctx.fillStyle = brick.color;
      ctx.fill();
      ctx.closePath();
    }
  }
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
document.addEventListener("click", runGame)

var interval
function runGame(){
    clearInterval(interval)
    interval = setInterval(gameRun, 30)
}

document.onkeydown = function(evt) {
  console.log(evt.key);
  if(evt.key === "Escape"){
    clearInterval(interval)
  }
};

function gameRun(){
  // ball.x = 5
  ball.x += ballSpeedX;
  ball.y += ballSpeedY;
  // ballY
  if(ball.y > canvas.height - (canvas.height - paddle.y) - ball.radius){
    if(ball.x >= paddle.x && ball.x <= paddle.x + paddle.width){
      ballSpeedY = -ballSpeedY;
    }else if(ball.y >= canvas.height - ball.radius ){
      alert("game over")
    }
    // ballRest();
    // brickReset();
  } else if(ball.y < 0 + ball.radius){
    ballSpeedY = -ballSpeedY;
  }
  // ballx
  if(ball.x > canvas.width - ball.radius && ballSpeedX > 0.0){
    ballSpeedX = -ballSpeedX;
  } else if(ball.x < 0 + ball.radius && ballSpeedX < 0.0){
    ballSpeedX = -ballSpeedX;
  }else{
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
    draw()
  }
}

function hitBrick(){
    for (let bricksIndex = 0; bricksIndex < bricks.length; bricksIndex++) {
        const brickCol = bricks[bricksIndex];
        for(let brickColIndex = 0; brickColIndex < brickCol.length; brickColIndex ++){
          const brick = brickCol[brickColIndex]
          // console.log(brick);
          ctx.clearRect(830, 90, 81, 20);
        }
        // let brickLeft = parseInt(getComputedStyle(brick).left.replace("px", ""))
        // let brickBottom = parseInt(getComputedStyle(brick).bottom.replace("px", ""))
        // let brickHeight = parseInt(getComputedStyle(brick).height.replace("px", ""))
        // let brickWidth = parseInt(getComputedStyle(brick).width.replace("px", ""))
        // let brickDisplay = getComputedStyle(brick).display
        
        // if(y >= (brickBottom - ballRadius) && y <= (brickBottom + brickHeight) && x >= (brickLeft - ballRadius) && x <= (brickLeft + brickWidth) && brickDisplay !== "none"){
        //     if(y === (brickBottom - ballRadius)){
        //         brokeBrick("bottom", brickBottom - ballRadius, brickLeft)
        //         return yAdd = -2
        //     }else if(y === (brickBottom + brickHeight)){
        //         brokeBrick("top", brickBottom + brickHeight, brickLeft)
        //         return yAdd = 2
        //     }else if(x  === (brickLeft - ballRadius)){
        //         brokeBrick("left", brickLeft - ballRadius, brickLeft)
        //         return xAdd = -2 
        //     }else if(x === (brickLeft + brickWidth)){
        //         brokeBrick("right", brickLeft + brickWidth, brickLeft)
        //         return xAdd = 2 
        //     }
        // }
    }
}

}