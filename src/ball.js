export default class Ball {
  constructor(x, y, radius, color) {
    this.x = x || 0;
    this.y = y || 0;
    this.radius = radius || 2;
    this.color = color || " ";
  }

  setPos(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    // ctx.stroke(); // draw edge line
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}