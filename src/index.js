import "./styles.css";
import Mouse from "./mouse";
import Ball from "./ball";

const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let pos = new Mouse(canvas);
const balls = [];
const mouse = new Ball(0, 0, 30, "green");

for (let i = 0; i < 100; i++) {
  balls.push(
    new Ball(
      200 + 100 * Math.cos((i * 2 * Math.PI) / 100),
      200 + 100 * Math.sin((i * 2 * Math.PI) / 100)
    )
  );
}

// function ConnectDots(balls) {
//   ctx.beginPath();
//   ctx.moveTo(balls[0].x, balls[0].y);
//   balls.forEach((ball) => ctx.lineTo(ball.x, ball.y));
//   ctx.stroke();
//   ctx.closePath();
// }

function ConnectDotsAlternative(dots) {
  ctx.beginPath();

  for (var i = 0, jlen = dots.length; i <= jlen; ++i) {
    var p0 = dots[i + 0 >= jlen ? i + 0 - jlen : i + 0];
    var p1 = dots[i + 1 >= jlen ? i + 1 - jlen : i + 1];
    ctx.quadraticCurveTo(p0.x, p0.y, (p0.x + p1.x) * 0.5, (p0.y + p1.y) * 0.5);
  }

  ctx.closePath();
  ctx.fill();
}

function Render() {
  window.requestAnimationFrame(Render);
  ctx.clearRect(0, 0, 600, 600);
  mouse.setPos(pos.x, pos.y);
  mouse.draw(ctx);

  balls.forEach((ball) => {
    ball.think(pos);
    // ball.draw(ctx);
  });
  ConnectDotsAlternative(balls);
}

Render();
