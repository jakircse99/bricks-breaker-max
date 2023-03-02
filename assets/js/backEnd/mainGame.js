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
    // x: paddle.x + paddle.width / 2, // center ball horizontally on paddle
    // y: canvas.height - 60, // starting y position 
    x: 11, // center ball horizontally on paddle
    y: 10, // starting y position 
    radius: 10, // ball radius
    dx: 5, // ball x
    dy: -5, // ball y 
  };
  
  
// Added by raktim

var ballX = 75;
var ballSpeedX = 2;
var ballY = 75;
var ballSpeedY = 2;
  
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

  // Create an array of bricks
  const brickColor =[
  
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
    const hitBricksValue = []
// Draw the bricks on the canvas
function drawBricks() {
  const bricksStore = [];

  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const brick = bricks[c][r];
        // console.log("hitbricksvalue", hitBricksValue);
      //Code for brickBreak
      // if(bricks[c][r].x + bricks[c][r].y == 71) {
      ctx.beginPath();
      ctx.rect(brick.x, brick.y, brick.width, brick.height);
      let number = Math.floor(Math.random()*10);
      ctx.fillStyle = brickColor[0];
      // bricksStore.push(bricks[c][r]);
      ctx.fill();
      ctx.closePath();
      // }  
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
document.addEventListener("click", runGame)

var interval
function runGame(){
    clearInterval(interval)
    interval = setInterval(gameRun, 50)
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
    // if(ball.x >= paddle.x && ball.x <= paddle.x + paddle.width){
      ballSpeedY = -ballSpeedY;
    // }else if(ball.y >= canvas.height - ball.radius ){
    //   alert("game over")
    // }
    // ballRest();
    // brickReset();
  } else if(ball.y < 0 + ball.radius){
    ballSpeedY = -ballSpeedY;
  }
  // ballx
  if(ball.x > canvas.width - ball.radius){
    ballSpeedX = -ballSpeedX;
  } else if(ball.x < 0 + ball.radius){
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
        for(let brickRowIndex = 0; brickRowIndex < brickCol.length; brickRowIndex ++){
          const oneBrick = brickCol[brickRowIndex]
        // // let brickLeft = oneBrick.x
        // // let brickRight = oneBrick.x + oneBrick.width
        // // let brickBottom = oneBrick.y + oneBrick.height
        // // let brickTop = oneBrick.y
        // // let brickDisplay = getComputedStyle(brick).display
        // // console.log("left", brickLeft);
        // // console.log("right", brickRight);
        // // console.log("bottom", brickBottom);
        // // console.log("top", brickTop);
        
        // // if(ball.y >= (brickTop - ball.radius) && ball.y <= (brickTop + brick.height) && ball.x >= (brickLeft - ball.radius) && ball.x <= (brickLeft + brick.width)){
        if(ball.y >= 50 && // 50 (brick.y - ball.radius) top
        ball.y <= 90  && // 90 (brick.y + brick.height + ball.radius) bottom
        ball.x >= 1 && // 1 (brick.x - ball.radius) left
        ball.x <= 101 // 101 (brick.x + brick.width + ball.radius) right
        ){
          console.log("Hit");
            if(ball.y == 50
            ){
              console.log("Top Hit");
                // brokeBrick("bottom", brickBottom - ballRadius, brickLeft)
                ballSpeedY = -2;
                hitBricksValue.push(oneBrick)
                break;
            }else if(ball.y == 90
            ){
                // brokeBrick("top", brickBottom + brickHeight, brickLeft)
                console.log("Bottom Hit");
                ballSpeedY = 2;
                hitBricksValue.push(oneBrick)
                break;
            }else if(ball.x == 1
            ){
              console.log("Left Hit");
                // brokeBrick("left", brickLeft - ballRadius, brickLeft)
                ballSpeedX = -2;
                hitBricksValue.push(oneBrick)
                break;
            }else if(ball.x == 101
            ){
              console.log("right Hit");
                // brokeBrick("right", brickLeft + brickWidth, brickLeft)
                ballSpeedX = 2;
                hitBricksValue.push(oneBrick)
                break;
            }
            break;
        }
      }
    }
}

}