const fs = require('fs');

const bg = '#0A0A0A';
const defs = `<defs>
  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#60A5FA"/>
    <stop offset="30%" stop-color="#3B82F6"/>
    <stop offset="100%" stop-color="#1D4ED8"/>
  </linearGradient>
</defs>`;

// Concept 1: Apollonian Circles
let apollonian = `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
${defs}
<circle cx="256" cy="256" r="256" fill="${bg}"/>
`;
function drawCircles(cx, cy, r, depth) {
  if (depth === 0) return;
  apollonian += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="url(#grad)" stroke-width="${depth + 1}"/>`;
  const r2 = r / 2;
  const offset = r - r2;
  drawCircles(cx - offset, cy, r2, depth - 1);
  drawCircles(cx + offset, cy, r2, depth - 1);
  drawCircles(cx, cy - offset, r2, depth - 1);
  drawCircles(cx, cy + offset, r2, depth - 1);
}
apollonian += `<circle cx="256" cy="256" r="230" fill="url(#grad)" opacity="0.05"/>`;
drawCircles(256, 256, 220, 5);
apollonian += `</svg>`;

// Concept 2: Neural Tree (Radial)
let tree = `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
${defs}
<circle cx="256" cy="256" r="256" fill="${bg}"/>
`;
function drawRadialTree(x, y, length, angle, depth) {
  if (depth === 0) return;
  const endX = x + length * Math.cos(angle);
  const endY = y + length * Math.sin(angle);
  tree += `<line x1="${x}" y1="${y}" x2="${endX}" y2="${endY}" stroke="url(#grad)" stroke-width="${depth * 2}" stroke-linecap="round"/>`;
  tree += `<circle cx="${endX}" cy="${endY}" r="${depth * 1.5}" fill="#60A5FA"/>`;
  drawRadialTree(endX, endY, length * 0.75, angle - 0.45, depth - 1);
  drawRadialTree(endX, endY, length * 0.75, angle + 0.45, depth - 1);
}
// Start multiple branches from center
for(let i=0; i<6; i++) {
   drawRadialTree(256, 256, 75, (i * Math.PI * 2) / 6, 5);
}
tree += `<circle cx="256" cy="256" r="20" fill="url(#grad)"/>`;
tree += `</svg>`;

// Concept 3: Hexagonal Fractal
let hex = `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
${defs}
<circle cx="256" cy="256" r="256" fill="${bg}"/>
`;
function drawHex(cx, cy, r, depth) {
    if (depth === 0) return;
    let points = [];
    for(let i=0; i<6; i++) {
        let angle = (i * Math.PI) / 3;
        points.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
    }
    hex += `<polygon points="${points.join(' ')}" fill="${depth%2===0 ? 'rgba(59, 130, 246, 0.1)' : 'none'}" stroke="url(#grad)" stroke-width="${depth}" />`;
    
    // Draw smaller hexes at vertices
    for(let i=0; i<6; i++) {
        let angle = (i * Math.PI) / 3;
        drawHex(cx + r * Math.cos(angle), cy + r * Math.sin(angle), r/2.8, depth - 1);
    }
}
drawHex(256, 256, 110, 4);
hex += `</svg>`;

// Concept 4: Geometric Concentric Diamonds
let diamonds = `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
${defs}
<circle cx="256" cy="256" r="256" fill="${bg}"/>
`;
function drawDiamond(cx, cy, r, depth) {
    if (depth === 0) return;
    let pts = `${cx},${cy-r} ${cx+r},${cy} ${cx},${cy+r} ${cx-r},${cy}`;
    diamonds += `<polygon points="${pts}" fill="rgba(29, 78, 216, 0.05)" stroke="url(#grad)" stroke-width="${depth + 1}" stroke-linejoin="round"/>`;
    drawDiamond(cx, cy - r/2, r/2, depth-1);
    drawDiamond(cx, cy + r/2, r/2, depth-1);
    drawDiamond(cx - r/2, cy, r/2, depth-1);
    drawDiamond(cx + r/2, cy, r/2, depth-1);
}
drawDiamond(256, 256, 180, 5);
diamonds += `</svg>`;


const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Favicon Concepts</title>
  <style>
    body { background: #000; color: white; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; display: flex; flex-direction: column; align-items: center; padding: 40px; margin: 0; }
    h1 { margin-bottom: 40px; font-weight: 600; font-size: 2.5rem; letter-spacing: -0.05em; text-align: center; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; max-width: 900px; width: 100%; }
    .card { background: #111; border: 1px solid #333; padding: 40px; border-radius: 24px; display: flex; flex-direction: column; align-items: center; text-align: center; transition: transform 0.2s; }
    .card:hover { transform: translateY(-5px); border-color: #3B82F6; }
    .icon-preview { margin-bottom: 24px; position: relative; }
    svg { width: 160px; height: 160px; border-radius: 50%; box-shadow: 0 20px 40px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.1); }
    h2 { margin: 0 0 12px 0; font-size: 1.4rem; font-weight: 600; color: #FFF; }
    p { margin: 0; color: #A3A3A3; font-size: 1rem; line-height: 1.5; }
    .badge { background: rgba(59, 130, 246, 0.1); color: #60A5FA; padding: 4px 12px; border-radius: 999px; font-size: 0.8rem; font-weight: 500; margin-bottom: 16px; border: 1px solid rgba(59, 130, 246, 0.2); }
  </style>
</head>
<body>
  <h1>Fractal Favicon Concepts</h1>
  <div class="grid">
    <div class="card">
        <div class="badge">Concept 1</div>
        <div class="icon-preview">${apollonian}</div>
        <h2>Recursive Spheres</h2>
        <p>Inspired by the Apollonian gasket. Represents depth, recursion, and layers of abstraction.</p>
    </div>
    <div class="card">
        <div class="badge">Concept 2</div>
        <div class="icon-preview">${tree}</div>
        <h2>Neural Branching</h2>
        <p>A radial L-system tree. Connects fractal mathematics with artificial neural networks.</p>
    </div>
    <div class="card">
        <div class="badge">Concept 3</div>
        <div class="icon-preview">${hex}</div>
        <h2>Koch Hexagon</h2>
        <p>Based on snowflake fractals. Highly structured, symmetrical, and visually striking.</p>
    </div>
    <div class="card">
        <div class="badge">Concept 4</div>
        <div class="icon-preview">${diamonds}</div>
        <h2>Fractal Matrix</h2>
        <p>A diamond-based recursive subdivision resembling computational pathways and data structures.</p>
    </div>
  </div>
</body>
</html>`;

fs.writeFileSync('public/favicon-concepts.html', html);
console.log('Concepts generated in public/favicon-concepts.html');
