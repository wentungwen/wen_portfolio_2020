const showBtn = document.getElementById("rules-btn");
const rules = document.getElementById("rules");
const closeBtn = document.getElementById("close-btn");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let score = 0;

const brickRowCount = 9;
const brickColumnCount = 5;

//canvas create ball
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 15,
  speed: 4,
  dx: 4,
  dy: -4,
};

// draw ball
function drawball() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
  ctx.fillStyle = "#104f5f";
  ctx.fill();
  ctx.closePath();
}

// create paddle
const paddle = {
  x: canvas.width / 2 - 40,
  y: canvas.height - 20,
  w: 80,
  h: 10,
  speed: 8,
  dx: 0,
};

//draw paddle
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
  ctx.fillStyle = " #104f5f";
  ctx.fill();
  ctx.closePath();
}

// draw score
function drawScore() {
  ctx.font = "1.2rem Ariel";
  ctx.fillText(`Score : ${score}`, canvas.width - 100, 30);
}

// bricks
bricksInfo = {
  w: 70,
  h: 20,
  padding: 10,
  offsetX: 45,
  offsetY: 60,
  visible: true,
};

const bricks = [];
for (let i = 0; i < brickRowCount; i++) {
  bricks[i] = [];
  for (let j = 0; j < brickColumnCount; j++) {
    const x = i * (bricksInfo.w + bricksInfo.padding) + bricksInfo.offsetX;
    const y = j * (bricksInfo.h + bricksInfo.padding) + bricksInfo.offsetY;
    bricks[i][j] = { x, y, ...bricksInfo };
  }
}
console.log(bricks);

//draw bricks
function drawBricks() {
  bricks.forEach((col) => {
    col.forEach((brick) => {
      ctx.beginPath();
      ctx.rect(brick.x, brick.y, brick.w, brick.h);
      ctx.fillStyle = brick.visible ? "#104f5f" : "transparent";
      ctx.fill();
      ctx.closePath();
    });
  });
}

// move paddle
function movePaddle() {
  paddle.x += paddle.dx;

  //wall detection
  if (paddle.x + paddle.w > canvas.width) {
    paddle.x = canvas.width - paddle.w - 10;
  }
  if (paddle.x < 0) {
    paddle.x = 0;
  }
}

//move ball
function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;

  //wall barrier(x)
  if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
    ball.dx *= -1;
  }
  if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
    ball.dy *= -1;
  }

  // paddle collision
  if (
    ball.x - ball.size > paddle.x &&
    ball.x + ball.size < paddle.x + paddle.w &&
    ball.y + ball.size > paddle.y
  ) {
    ball.dy *= -1;
  }
  // bricks collision
  bricks.forEach((col) => {
    col.forEach((brick) => {
      if (brick.visible) {
        if (
          ball.x - ball.size > brick.x &&
          ball.x + ball.size < brick.x + brick.w &&
          ball.y + ball.size > brick.y &&
          ball.y - ball.size < brick.y + brick.h
        ) {
          ball.dy *= -1;
          brick.visible = false;
          increaseScore();
        }
      }
    });
  });
  // hit bottom ball-lose
  if (ball.y + ball.size > canvas.height) {
    showAllBricks();
    score = 0;
  }
}

// increase score
function increaseScore() {
  score++;
  if (score % (brickRowCount * brickColumnCount) === 0) {
    showAllBricks();
  }
}

// show ALl bricks
function showAllBricks() {
  bricks.forEach((col) => {
    col.forEach((brick) => {
      brick.visible = true;
    });
  });
}

// draw everything
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawball();
  drawPaddle();
  drawScore();
  drawBricks();
}

//update
function update() {
  movePaddle();
  moveBall();
  draw();

  requestAnimationFrame(update);
}
update();

// key event
function keydown(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    paddle.dx = paddle.speed;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    paddle.dx = -paddle.speed;
  }
}
function keyup(e) {
  if (
    e.key === "Right" ||
    e.key === "ArrowRight" ||
    e.key === "Left" ||
    e.key === "ArrowLeft"
  ) {
    paddle.dx = 0;
  }
}

// keyboard event
document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);

//rules
showBtn.addEventListener("click", () => rules.classList.add("active"));
closeBtn.addEventListener("click", () => rules.classList.remove("active"));
