// Star-burst polar curve — the page's signature element.
// r(θ) = R · |cos(n·θ/2)|^p — n controls spike count, p controls sharpness

const canvas = document.getElementById('curve');
const ctx = canvas.getContext('2d');
const size = canvas.width;
const center = size / 2;
const R = size * 0.42;

const n = 7;     // number of spikes
const p = 0.25;  // sharpness — smaller = spikier points

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let rotation = 0;

function drawStar(rot) {
  ctx.clearRect(0, 0, size, size);

  // faint axes
  ctx.strokeStyle = 'rgba(46,58,82,0.08)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, center); ctx.lineTo(size, center);
  ctx.moveTo(center, 0); ctx.lineTo(center, size);
  ctx.stroke();

  ctx.strokeStyle = '#B5472E';
  ctx.lineWidth = 1.6;
  ctx.beginPath();

  const steps = 720;
  for (let i = 0; i <= steps; i++) {
    const theta = (i / steps) * Math.PI * 2;
    const r = R * Math.pow(Math.abs(Math.cos(n * theta / 2)), p);
    const x = center + r * Math.cos(theta + rot);
    const y = center + r * Math.sin(theta + rot);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.stroke();

  // tracing point at current rotation tip
  const tipTheta = (Date.now() / 4000) % (Math.PI * 2);
  const tipR = R * Math.pow(Math.abs(Math.cos(n * tipTheta / 2)), p);
  const tipX = center + tipR * Math.cos(tipTheta + rot);
  const tipY = center + tipR * Math.sin(tipTheta + rot);
  ctx.fillStyle = '#B5472E';
  ctx.beginPath();
  ctx.arc(tipX, tipY, 4, 0, Math.PI * 2);
  ctx.fill();
}

if (reduceMotion) {
  drawStar(0);
} else {
  function animate() {
    rotation += 0.002;
    drawStar(rotation);
    requestAnimationFrame(animate);
  }
  animate();
}