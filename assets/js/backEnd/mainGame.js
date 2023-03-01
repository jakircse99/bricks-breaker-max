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
  const bricks = [];
  for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
      const x = c * (brickWidth + brickPadding) + brickOffsetLeft;
      const y = r * (brickHeight + brickPadding) + brickOffsetTop;
      bricks[c][r] = { x, y, width: brickWidth, height: brickHeight, brickColor };
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
        let number = Math.floor(Math.random()*10);
        ctx.fillStyle = brickColor[number];
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
  
  }