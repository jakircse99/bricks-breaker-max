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
    x: 300, // center ball horizontally on paddle
    y: 200, // starting y position 
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
    const hitBricksValue = []

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

// draw();

// Added by raktim
document.addEventListener("click", runGame)

var interval
function runGame(){
    clearInterval(interval)
    interval = setInterval(gameRun, 10)
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
    // draw()
  }
}

function hitBrick(){
  let offLoop = false
    for (let bricksIndex = 0; bricksIndex < bricksStore.length; bricksIndex++) {
        const oneBrick = bricksStore[bricksIndex]
        const brickSum = oneBrick.x + oneBrick.y
        if( ball.y <= (oneBrick.y + oneBrick.height + ball.radius) && // 50 (brick.y - ball.radius) top
        ball.y >= (oneBrick.y - ball.radius)  && // 90 (brick.y + brick.height + ball.radius) bottom
        ball.x >= (oneBrick.x - ball.radius) && // 1 (brick.x - ball.radius) left
        ball.x <= (oneBrick.x + oneBrick.width + ball.radius) && // 101 (brick.x + brick.width + ball.radius) right
        !removeDuplicates(hitBricksValue).includes(brickSum)
        ){
            if(ball.y == (oneBrick.y - ball.radius)
            ){
              console.log("Top Hit");
                brokeBrick("top", ball.y + ball.radius, ball.x)
                ballSpeedY = -2;
                offLoop = true
                break;
            }else if(ball.y == (oneBrick.y + oneBrick.height + ball.radius)
            ){
                brokeBrick("bottom", ball.y - ball.radius - oneBrick.height, ball.x)
                console.log("Bottom Hit");
                console.log(oneBrick);
                ballSpeedY = 2;
                offLoop = true
                break;
            }else if(ball.x == (oneBrick.x - ball.radius)
            ){
              console.log("Left Hit");
                brokeBrick("left", ball.y, ball.x + ball.radius, oneBrick)
                ballSpeedX = -2;
                offLoop = true
                break;
            }else if(ball.x == (oneBrick.x + oneBrick.width + ball.radius)
            ){
              console.log("right Hit");
                brokeBrick("right", ball.y, ball.x - ball.radius - oneBrick.width )
                ballSpeedX = 2;
                offLoop = true
                break;
            }
            break;
        }
        if(offLoop){
          break;
        }
    }
}

function brokeBrick(side, brickY, brickX ){
  let offLoop = false
  for (let bricksIndex = 0; bricksIndex < bricksStore.length; bricksIndex++) {
    const oneBrick = bricksStore[bricksIndex]; 
      if(side === "top"){
        if(brickY === oneBrick.y){
          if(brickX >= oneBrick.x && brickX <= oneBrick.x + oneBrick.width + ball.radius){
            hitBricksValue.push(oneBrick.x + oneBrick.y)
            console.log(side, brickY, brickX);
            offLoop = true
            break;
          }
        }
      }else if(side === "bottom"){
        if(brickY === oneBrick.y){
          if(brickX >= oneBrick.x && brickX <= oneBrick.x + oneBrick.width + ball.radius){
            hitBricksValue.push(oneBrick.x + oneBrick.y)
            console.log(side, brickY, brickX);
            offLoop = true
            break;
          }
        }
      }else if(side === "right"){
        if(brickX === oneBrick.x){
          if(brickY >= oneBrick.y && brickY <= oneBrick.y + oneBrick.height){
            hitBricksValue.push(oneBrick.x + oneBrick.y)
            console.log(side, brickY, brickX);
            offLoop = true
            break;
          }
        }
    }else if(side === "left"){
      if(brickX === oneBrick.x){
        if(brickY >= oneBrick.y && brickY <= oneBrick.y + oneBrick.height){
          hitBricksValue.push(oneBrick.x + oneBrick.y)
          console.log(side, brickY, brickX);
          offLoop = true
          break;
        }
      }
  }
    if(offLoop){
      break;
    }
  }
  
}

}