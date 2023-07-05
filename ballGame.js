const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

window.addEventListener("load", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight / 2;

  //   rectangle fill
  //   ctx.fillStyle = "green";
  //   ctx.fillRect(50, 50, 100, 100);
  //   ctx.fillStyle = "red";
  //   ctx.fillRect(200, 50, 100, 100);

  //   ctx.clearRect(50, 50, 50, 50);

  //   stroke rect
  //   ctx.strokeStyle = "purple";
  //   ctx.lineWidth = 5;
  //   ctx.strokeRect(50, 50, 200, 200);

  //   storke text
  //   ctx.font = "40px Aria";
  //   ctx.lineWidth = 3;
  //   ctx.strokeText("Hello Canvas", 200, 200);

  //   ctx.fillText("Hello Canvas 2", 400, 200);

  //   path
  //   ctx.beginPath();
  //   ctx.moveTo(50, 50);
  //   ctx.lineTo(200, 50);
  //   250 50

  //   ctx.lineTo(125, 150);
  //   ctx.stroke();
  //   ctx.fillStyle = "green";
  //   ctx.fill();
  //   ctx.closePath();

  //   ctx.beginPath();
  //   ctx.moveTo(200, 200);
  //   ctx.lineTo(200, 250);
  //  ctx.stroke();

  //   ctx arc

  //   ctx.arc(200, 200, 100, 0, Math.PI * 2, true);
  //   ctx.stroke();
  //   ctx.fill();
  //   ctx.closePath();

  let ball = {
    x: 100,
    y: 100,
    size: 30,
    moveX: 5,
    moveY: 3,
  };

  function draw() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fillStyle = "purple";
    ctx.fill();
    ctx.closePath();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();

    ball.x += ball.moveX;
    ball.y += ball.moveY;

    if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
      ball.moveY *= -1;
    }

    if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
      ball.moveX *= -1;
    }

    requestAnimationFrame(animate);
  }

  animate();
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight / 2;
});
