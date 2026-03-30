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
let apollonian = `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">\n${defs}\n<circle cx="256" cy="256" r="256" fill="${bg}"/>\n`;
function drawCircles(cx, cy, r, depth) {
  if (depth === 0) return;
  apollonian += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="url(#grad)" stroke-width="${depth + 1}"/>\n`;
  const r2 = r / 2;
  const offset = r - r2;
  drawCircles(cx - offset, cy, r2, depth - 1);
  drawCircles(cx + offset, cy, r2, depth - 1);
  drawCircles(cx, cy - offset, r2, depth - 1);
  drawCircles(cx, cy + offset, r2, depth - 1);
}
apollonian += `<circle cx="256" cy="256" r="230" fill="url(#grad)" opacity="0.05"/>\n`;
drawCircles(256, 256, 220, 5);
apollonian += `</svg>`;
fs.writeFileSync('public/concept1_spheres.svg', apollonian);

// Concept 2: Neural Tree (Radial)
let tree = `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">\n${defs}\n<circle cx="256" cy="256" r="256" fill="${bg}"/>\n`;
function drawRadialTree(x, y, length, angle, depth) {
  if (depth === 0) return;
  const endX = x + length * Math.cos(angle);
  const endY = y + length * Math.sin(angle);
  tree += `<line x1="${x}" y1="${y}" x2="${endX}" y2="${endY}" stroke="url(#grad)" stroke-width="${depth * 2}" stroke-linecap="round"/>\n`;
  tree += `<circle cx="${endX}" cy="${endY}" r="${depth * 1.5}" fill="#60A5FA"/>\n`;
  drawRadialTree(endX, endY, length * 0.75, angle - 0.45, depth - 1);
  drawRadialTree(endX, endY, length * 0.75, angle + 0.45, depth - 1);
}
for(let i=0; i<6; i++) {
   drawRadialTree(256, 256, 75, (i * Math.PI * 2) / 6, 5);
}
tree += `<circle cx="256" cy="256" r="20" fill="url(#grad)"/>\n`;
tree += `</svg>`;
fs.writeFileSync('public/concept2_neural.svg', tree);

// Concept 3: Hexagonal Fractal
let hex = `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">\n${defs}\n<circle cx="256" cy="256" r="256" fill="${bg}"/>\n`;
function drawHex(cx, cy, r, depth) {
    if (depth === 0) return;
    let points = [];
    for(let i=0; i<6; i++) {
        let angle = (i * Math.PI) / 3;
        points.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
    }
    hex += `<polygon points="${points.join(' ')}" fill="${depth%2===0 ? 'rgba(59, 130, 246, 0.1)' : 'none'}" stroke="url(#grad)" stroke-width="${depth}" />\n`;
    for(let i=0; i<6; i++) {
        let angle = (i * Math.PI) / 3;
        drawHex(cx + r * Math.cos(angle), cy + r * Math.sin(angle), r/2.8, depth - 1);
    }
}
drawHex(256, 256, 110, 4);
hex += `</svg>`;
fs.writeFileSync('public/concept3_hexagon.svg', hex);

// Concept 4: Geometric Concentric Diamonds
let diamonds = `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">\n${defs}\n<circle cx="256" cy="256" r="256" fill="${bg}"/>\n`;
function drawDiamond(cx, cy, r, depth) {
    if (depth === 0) return;
    let pts = `${cx},${cy-r} ${cx+r},${cy} ${cx},${cy+r} ${cx-r},${cy}`;
    diamonds += `<polygon points="${pts}" fill="rgba(29, 78, 216, 0.05)" stroke="url(#grad)" stroke-width="${depth + 1}" stroke-linejoin="round"/>\n`;
    drawDiamond(cx, cy - r/2, r/2, depth-1);
    drawDiamond(cx, cy + r/2, r/2, depth-1);
    drawDiamond(cx - r/2, cy, r/2, depth-1);
    drawDiamond(cx + r/2, cy, r/2, depth-1);
}
drawDiamond(256, 256, 180, 5);
diamonds += `</svg>`;
fs.writeFileSync('public/concept4_matrix.svg', diamonds);

console.log("Successfully generated all SVGs to public/");
