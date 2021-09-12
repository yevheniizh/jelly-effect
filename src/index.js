import "./styles.css";
import Mouse from "./mouse";
import Ball from "./ball";

const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let pos = new Mouse(canvas);
const balls = [];
const mouse = new Ball(0, 0, 30, "green");

for (let i = 0; i < 100; i++) {
  balls.push(new Ball(Math.random() * 600, Math.random() * 600));
}

function Render() {
  window.requestAnimationFrame(Render);
  ctx.clearRect(0, 0, 600, 600);
  mouse.setPos(pos.x, pos.y);
  mouse.draw(ctx);

  balls.forEach((ball) => {
    ball.think(pos);
    ball.draw(ctx);
  });
}

Render();
