const PART_KEYS = ['background', 'body', 'face', 'facial', 'hair'];

const state = {
  background: 0,
  body: 0,
  face: 0,
  facial: 0,
  hair: 0
};

function renderCharacter(animate = false) {
  const svg = document.getElementById('characterSvg');
  const combined =
    CHARACTER_PARTS.background[state.background].svg +
    CHARACTER_PARTS.body[state.body].svg +
    CHARACTER_PARTS.face[state.face].svg +
    CHARACTER_PARTS.hair[state.hair].svg +
    CHARACTER_PARTS.facial[state.facial].svg;

  svg.innerHTML = combined;

  if (animate) {
    svg.classList.remove('character-appearing');
    void svg.offsetWidth; // reflow to restart animation
    svg.classList.add('character-appearing');
  }
}

function generateRandom() {
  const machine = document.getElementById('vendingMachine');
  const lights = document.querySelectorAll('.light');
  const btn = document.getElementById('randomBtn');

  btn.classList.add('btn-pressing');
  machine.classList.add('machine-shaking');
  lights.forEach(l => l.classList.add('light-flashing'));

  setTimeout(() => {
    PART_KEYS.forEach(key => {
      state[key] = Math.floor(Math.random() * CHARACTER_PARTS[key].length);
    });
    renderCharacter(true);
    updateSelectorHighlights();
  }, 350);

  setTimeout(() => {
    machine.classList.remove('machine-shaking');
    lights.forEach(l => l.classList.remove('light-flashing'));
    btn.classList.remove('btn-pressing');
  }, 750);
}

function buildSelectors() {
  PART_KEYS.forEach(key => {
    const container = document.getElementById(`${key}-options`);
    if (!container) return;
    CHARACTER_PARTS[key].forEach((part, i) => {
      const btn = document.createElement('button');
      btn.className = 'part-btn' + (i === state[key] ? ' active' : '');
      btn.textContent = part.name;
      btn.dataset.key = key;
      btn.dataset.index = i;
      btn.addEventListener('click', () => {
        state[key] = i;
        renderCharacter(true);
        updateSelectorHighlights();
      });
      container.appendChild(btn);
    });
  });
}

function updateSelectorHighlights() {
  PART_KEYS.forEach(key => {
    const container = document.getElementById(`${key}-options`);
    if (!container) return;
    container.querySelectorAll('.part-btn').forEach((btn, i) => {
      btn.classList.toggle('active', i === state[key]);
    });
  });
}

function downloadSVG() {
  const svg = document.getElementById('characterSvg');
  const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 280">${svg.innerHTML}</svg>`;
  const blob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
  triggerDownload(URL.createObjectURL(blob), 'character.svg');
}

function downloadPNG() {
  const svg = document.getElementById('characterSvg');
  const scale = 3;
  const w = 200 * scale, h = 280 * scale;
  const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 200 280">${svg.innerHTML}</svg>`;
  const blob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    URL.revokeObjectURL(url);
    canvas.toBlob(blob2 => {
      triggerDownload(URL.createObjectURL(blob2), 'character.png');
    }, 'image/png');
  };
  img.src = url;
}

function triggerDownload(href, filename) {
  const a = document.createElement('a');
  a.href = href;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(href), 2000);
}

document.addEventListener('DOMContentLoaded', () => {
  // Random initial character on load
  PART_KEYS.forEach(key => {
    state[key] = Math.floor(Math.random() * CHARACTER_PARTS[key].length);
  });

  buildSelectors();
  renderCharacter(true);

  document.getElementById('randomBtn').addEventListener('click', generateRandom);
  document.getElementById('downloadSvg').addEventListener('click', downloadSVG);
  document.getElementById('downloadPng').addEventListener('click', downloadPNG);
});
